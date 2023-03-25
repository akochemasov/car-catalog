import React from "react";
import { ICar } from "@/types/car.types";
import Image from "next/image";
import Link from "next/link";

import styles from "./CarItem.module.css";

const url = process.env.NEXT_PUBLIC_API_URL;

const CarItem = ({ data }: { data: ICar }) => {
  return (
    <div className={styles.wrapper}>
      {/* без http не будет работать. Посмотреть как это можно исправить */}
      <Image
        src={`http:${url}/${data.image}`}
        alt={"car image"}
        width={200}
        height={200}
      />
      <h2>{data.name}</h2>
      <small>{data.price}</small>

      <div>
        <Link href={`/car/${data.id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default CarItem;
