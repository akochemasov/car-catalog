import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarsService } from "@/services/cars.service";
import { ICar } from "@/types/car.types";

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
});

export const { setData } = carsSlice.actions;

export const getAll = createAsyncThunk(
  "cars/getAll",
  async (_, { dispatch }) => {
    const cars = await CarsService.getAll();
    dispatch(setData(cars));
  }
);

export default carsSlice.reducer;
