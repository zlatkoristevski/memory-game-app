export type MemoryGameType = "flags" | "icons" | "faces";

export type MemoryGameData = {
  id: number;
  itemId: string;
  itemFile: string;
  isGuessed: boolean;
  isOpen: boolean;
};

export type RawElement = string[];

export type MemoryGameRawData = {
  flags: RawElement;
  faces: RawElement;
  icons: RawElement;
};
