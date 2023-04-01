import React from "react";
import CarItem from "@/components/ui/carItem/CarItem";
import { ICar } from "@/types/car.types";

interface IProps {
  cars: ICar[];
}

const CarsList = ({ cars }: IProps) => {
  return (
    <>
      {cars?.length ? (
        cars.map((car) => <CarItem key={car.id} data={car} />)
      ) : (
        <div>Cars not found</div>
      )}
    </>
  );
};

export default CarsList;
