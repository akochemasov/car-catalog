import axios from "axios";
import { ICar } from "@/types/car.types";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export const CarsService = {
  async getAll() {
    const { data } = await axios.get<ICar[]>("/cars");
    return data;
  },

  async getById(id: ICar["id"]) {
    const { data } = await axios.get<ICar[]>("/cars", { params: { id } });
    return data[0];
  },

  async updatePrice(id: ICar["id"], price: ICar["price"]) {
    const { data } = await axios.patch<ICar>(`/cars/${id}`, {
      price,
    });
    return data;
  },

  async addNewCar() {
    const { data } = await axios.post<ICar>(`/cars/`, {
      name: "New car",
      price: 1000,
      image: "",
    });
    return data;
  },
};
