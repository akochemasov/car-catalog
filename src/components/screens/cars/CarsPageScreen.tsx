import React, { useEffect } from "react";
import Layout from "@/components/layouts/Layout";
import { getAll } from "@/store/slices/cars.slice";
import CarsList from "@/components/ui/carsList/CarsList";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/store";
import type { AppDispatch } from "@/store";

const CarsPageScreen = () => {
  //обязательно указать тип AppDispatch, иначе предупреждение
  const dispatch: AppDispatch = useDispatch();
  const { data } = useSelector((state: AppState) => state.cars);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <Layout title={"Cars"} description={"cars"}>
      Cars page
      <CarsList cars={data} />
    </Layout>
  );
};

export default CarsPageScreen;
