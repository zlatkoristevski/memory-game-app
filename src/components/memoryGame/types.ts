export type MemoryGameType = "flags" | "numbers" | "faces";

export type MemoryGameData = {
  id: string;
  itemId: string;
  itemFile: string;
  isGuessed: boolean;
  isOpen: boolean;
};
