export interface EggItem {
  image: string;
  rarity: string;
  name: string;
}
export interface EggObject extends EggItem {
  rate: number;
}
