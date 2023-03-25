import axios from "axios";
import { ICar } from "@/types/car.type";

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
};
