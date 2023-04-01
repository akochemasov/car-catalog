import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { ICarData, ICarDataSingle } from "@/types/car.types";
import CarDetail from "@/components/screens/carDetail/CarDetail";
import { CarsService } from "@/services/cars.service";
import { wrapper } from "@/store";
import { getById } from "@/store/slices/cars.slice";

const CarPage: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetail car={car} />;
};

//https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
//todo: wrapper.getStaticPaths - нет!
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

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      //id - это из адресной строки - /car/[id]
      const { payload } = await store.dispatch(getById(Number(params?.id)));
      //console.log("car", payload); //лог на сервере

      return {
        props: { car: payload },
        // revalidate: 1,
      };
    }
);

// @ts-ignore
// export async function getServerSideProps({ query }) {
//   console.log("context", query);
//
//   return {
//     props: {},
//   };
// }

export default CarPage;
