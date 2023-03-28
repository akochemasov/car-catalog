import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { ICarData, ICarDataSingle } from "@/types/car.types";
import CarDetail from "@/components/screens/carDetail/CarDetail";
import { CarsService } from "@/services/cars.service";

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />;
};

//https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  //указать все пути
  //todo: а если еще добавляется машина?
  const cars = await CarsService.getAll();

  return {
    paths: cars.map((car) => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: "blocking", //если страница не существует, чтобы делался запрос на сервер - как раз для нового добавленной машины
  };
};

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({
  params,
}) => {
  //id - это из адресной строки - /car/[id]
  const car = await CarsService.getById(Number(params?.id));

  return {
    props: { car },
    // revalidate: 1,
  };
};

// @ts-ignore
// export async function getServerSideProps({ query }) {
//   console.log("context", query);
//
//   return {
//     props: {},
//   };
// }

export default CarPage;
