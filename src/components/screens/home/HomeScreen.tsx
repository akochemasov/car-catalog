import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ICar } from "@/types/car.types";
import Layout from "@/components/layouts/Layout";

import { CarsService } from "@/services/cars.service";
import CarsList from "@/components/ui/carsList/CarsList";

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

      <CarsList cars={cars} />
    </Layout>
  );
};

export default HomeScreen;
