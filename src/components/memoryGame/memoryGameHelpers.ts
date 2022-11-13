import { filter, pipe, clone, map, addIndex, flatten, splitAt, slice } from "ramda";
import type { MemoryGameType, MemoryGameData, MemoryGameRawData, RawElement } from "./types";

const mapIndexed = addIndex(map);
const arrayShuffle = (o: any) => {
  for (let j, x, i = o.length; i; j = parseInt(String(Math.random() * i)), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

export const generateMemoryGameData = (
  memoryGameType: MemoryGameType,
  data: MemoryGameRawData,
  itemsLength = 5
): MemoryGameData[] => {
  const dataToBeParsed = slice(0, itemsLength, data[memoryGameType]) as RawElement;

  const generateCardObj = (f: string, index: number, plusNo: number): MemoryGameData => {
    return {
      id: index + plusNo,
      itemId: splitAt(-4, f)[0],
      itemFile: f,
      isGuessed: false,
      isOpen: false
    };
  };

  const result = pipe(
    mapIndexed((c: string, index: number) => {
      return [generateCardObj(c, index, 1), generateCardObj(c, index, 2)];
    }),
    flatten,
    mapIndexed((c, i) => {
      c.id = i + 1;
      return c;
    }),
    arrayShuffle
  )(dataToBeParsed);

  return result;
};

// export const generateMemoryGameData = (memoryGameType: MemoryGameType): MemoryGameData[] => {
//   return [
//     {
//       id: "1",
//       itemId: "macedonia",
//       itemFile: "macedonia.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "2",
//       itemId: "germany",
//       itemFile: "germany.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "3",
//       itemId: "brazil",
//       itemFile: "brazil.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "4",
//       itemId: "macedonia",
//       itemFile: "macedonia.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "5",
//       itemId: "croatia",
//       itemFile: "croatia.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "6",
//       itemId: "brazil",
//       itemFile: "brazil.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "7",
//       itemId: "germany",
//       itemFile: "germany.svg",
//       isGuessed: false,
//       isOpen: false
//     },
//     {
//       id: "8",
//       itemId: "croatia",
//       itemFile: "croatia.svg",
//       isGuessed: false,
//       isOpen: false
//     }
//   ];
// };

const areTheCardsGuessed = (openCards: MemoryGameData[]): boolean => {
  return openCards[0].itemId === openCards[1].itemId;
};

export const checkIfAreTwoCardsOpen = (memoryGameData: MemoryGameData[]): boolean =>
  pipe(
    filter((i: MemoryGameData) => i.isGuessed === false),
    filter((i: MemoryGameData) => i.isOpen === true),
    openedCards => openedCards.length,
    totalOpenCards => totalOpenCards === 2
  )(clone(memoryGameData));

export const checkIfAreCardsGuessed = (memoryGameData: MemoryGameData[]): boolean => {
  const localMemoryGameData = pipe(
    filter<MemoryGameData>(i => i.isGuessed === false),
    filter<MemoryGameData>(i => i.isOpen === true)
  )(clone(memoryGameData));

  return areTheCardsGuessed(localMemoryGameData);
};

export const closeUnguessedCards = (memoryGameData: MemoryGameData[]): MemoryGameData[] => {
  return map((i: MemoryGameData) => {
    if (i.isOpen && !i.isGuessed) i.isOpen = false;
    return i;
  })(clone(memoryGameData));
};

export const updateStatusOfTheGuessedCards = (memoryGameData: MemoryGameData[]): MemoryGameData[] => {
  return map((i: MemoryGameData) => {
    if (i.isOpen && !i.isGuessed) {
      i.isOpen = true;
      i.isGuessed = true;
    }
    return i;
  })(clone(memoryGameData));
};

export const checkIfAllCardsAreGuessed = (memoryGameData: MemoryGameData[]): boolean => {
  const unguessedCards = filter((i: MemoryGameData) => {
    return i.isGuessed === true && i.isOpen === true;
  })(clone(memoryGameData));

  return unguessedCards.length === memoryGameData.length;
};
