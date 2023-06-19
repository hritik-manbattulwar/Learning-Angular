export interface IMobile {
  brand: string;
  color: string;
  price: number;
}
export const getMobile = (): IMobile => {
  return {
    brand: 'Apple',
    color: 'silver',
    price: 110000,
  };
};
