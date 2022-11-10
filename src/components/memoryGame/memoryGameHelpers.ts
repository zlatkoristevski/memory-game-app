import type { MemoryGameType, MemoryGameData } from "./types";

export const generateMemoryGameData = (memoryGameType: MemoryGameType): MemoryGameData[] => {
  console.log(memoryGameType);
  return [
    {
      id: "1",
      itemId: "macedonia",
      itemFile: "macedonia.svg",
      isGuessed: false
    },
    {
      id: "2",
      itemId: "germany",
      itemFile: "germany.svg",
      isGuessed: false
    },
    {
      id: "3",
      itemId: "brazil",
      itemFile: "brazil.svg",
      isGuessed: false
    },
    {
      id: "4",
      itemId: "macedonia",
      itemFile: "macedonia.svg",
      isGuessed: false
    },
    {
      id: "5",
      itemId: "croatia",
      itemFile: "croatia.svg",
      isGuessed: false
    },
    {
      id: "6",
      itemId: "brazil",
      itemFile: "brazil.svg",
      isGuessed: false
    },
    {
      id: "7",
      itemId: "germany",
      itemFile: "germany.svg",
      isGuessed: false
    },
    {
      id: "8",
      itemId: "croatia",
      itemFile: "croatia.svg",
      isGuessed: false
    }
  ];
};
