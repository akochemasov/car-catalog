import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { ICar } from "@/types/car.types";
import Layout from "@/components/layouts/Layout";
import CarItem from "@/components/ui/carItem/CarItem";

import styles from "./HomeScreen.module.css";

const HomeScreen = ({ cars }: { cars: ICar[] }) => {
  const {} = useRouter();

  useEffect(() => {
    console.log("API_KEY", process.env.NEXT_PUBLIC_API_KEY);
    console.log("API_URL", process.env.API_URL);
    console.log("API_KEY", process.env.API_KEY);
  }, []);

  return (
    <Layout title={"Home"} description={"home"}>
      {cars?.length ? (
        cars.map((car) => <CarItem key={car.id} data={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </Layout>
  );
};

export default HomeScreen;
