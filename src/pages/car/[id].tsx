import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ICarDataSingle } from "@/types/car.type";
import CarDetail from "@/components/screens/carDetail/CarDetail";
import { CarsService } from "@/services/cars.service";

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />;
};

//https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export const getStaticPaths: GetStaticPaths = async () => {
  //указать все пути
  //todo: а если пути диначиеские? еще добавляется машина?
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
  };
};

export default CarPage;
