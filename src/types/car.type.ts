export interface ICar {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface ICarData {
  cars: ICar[];
}
