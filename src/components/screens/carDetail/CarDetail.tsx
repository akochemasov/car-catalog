import React, { FC } from "react";
import { ICarDataSingle } from "@/types/car.types";
import Layout from "@/components/layouts/Layout";
import CarItem from "@/components/ui/carItem/CarItem";
import { useRouter } from "next/router";

const CarDetail: FC<ICarDataSingle> = ({ car }) => {
  const router = useRouter();

  return (
    <Layout title={car?.name} description={"Car detail"}>
      <button onClick={() => router.replace("/")}>Go home</button>
      <CarItem data={car} />
    </Layout>
  );
};

export default CarDetail;
