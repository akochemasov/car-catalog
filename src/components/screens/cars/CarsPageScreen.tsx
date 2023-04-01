import React, { useEffect } from "react";
import Layout from "@/components/layouts/Layout";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAll } from "@/store/slices/cars.slice";
import CarsList from "@/components/ui/carsList/CarsList";

const CarsPageScreen = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cars);

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
