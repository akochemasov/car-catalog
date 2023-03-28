import React, { useState } from "react";
import { ICar } from "@/types/car.types";
import Image from "next/image";
import Link from "next/link";
import { CarsService } from "@/services/cars.service";

import styles from "./CarItem.module.css";

const url = process.env.NEXT_PUBLIC_API_URL;

const CarItem = ({ data }: { data: ICar }) => {
  const [car, setCar] = useState(data);

  return (
    <div className={styles.wrapper}>
      {/* без http не будет работать. Посмотреть как это можно исправить */}
      <Image
        src={`http:${url}/${car?.image}`}
        alt={"car image"}
        width={200}
        height={200}
      />
      <h2>{car?.name}</h2>
      <small>{car?.price}</small>
      <button
        onClick={async () => {
          const res = await CarsService.updatePrice(
            data.id,
            Math.round(Math.random() * 3000)
          );
          setCar(res);
        }}
      >
        Update price
      </button>

      <div>
        <Link href={`/car/${car?.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default CarItem;
