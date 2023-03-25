import HomeScreen from "@/components/screens/home/HomeScreen";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { ICarData } from "@/types/car.types";
import { CarsService } from "@/services/cars.service";

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return (
    <>
      <HomeScreen cars={cars} />
    </>
  );
};

//fetching data
//SSR - принимает дженерик
// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarsService.getAll();
//
//   return {
//     //обязательно обернуть в объект
//     props: { cars },
//     // notFound,
//     // redirect,
//   };
// };

//SSG
//локально работает аналогично SSR
export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarsService.getAll();

  return {
    //обязательно обернуть в объект
    props: { cars },
    revalidate: 60, //ревалидация данных - это ISR
    // notFound,
    // redirect,
  };
};

export default HomePage;
