import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { ICar } from "@/types/car.types";
import Layout from "@/components/layouts/Layout";
import CarItem from "@/components/ui/carItem/CarItem";

import styles from "./HomeScreen.module.css";
import { CarsService } from "@/services/cars.service";

const HomeScreen = ({ data }: { data: ICar[] }) => {
  const [cars, setCars] = useState(data);
  const {} = useRouter();

  useEffect(() => {
    console.log("API_KEY", process.env.NEXT_PUBLIC_API_KEY);
    console.log("API_URL", process.env.API_URL);
    console.log("API_KEY", process.env.API_KEY);
  }, []);

  return (
    <Layout title={"Home"} description={"home"}>
      <div style={{ margin: 10 }}>
        <button
          onClick={async () => {
            await CarsService.addNewCar();
            const res = await CarsService.getAll();
            setCars(res);
          }}
        >
          Add rnd car
        </button>
      </div>

      {cars?.length ? (
        cars.map((car) => <CarItem key={car.id} data={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </Layout>
  );
};

export default HomeScreen;
