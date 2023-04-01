import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsService } from "@/services/cars.service";
import { ICar } from "@/types/car.types";
import { HYDRATE } from "next-redux-wrapper";

interface IState {
  data: ICar[];
}

const initialState: IState = {
  data: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<ICar[]>) => {
      state.data = action.payload;
    },
  },
  //todo: чтобы синхронизировать сторы бэкенда и фронтенда
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cars,
      };
    },
  },
});

export const { setData } = carsSlice.actions;

export const getAll = createAsyncThunk(
  "cars/getAll",
  async (_, { dispatch }) => {
    const cars = await CarsService.getAll();
    dispatch(setData(cars));
  }
);

export const getById = createAsyncThunk("cars/getById", async (id: number) => {
  const data = await CarsService.getById(id);
  return data;
});

export default carsSlice.reducer;
