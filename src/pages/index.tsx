import HomeScreen from "@/components/screens/home/HomeScreen";
import { GetServerSideProps, NextPage } from "next";
import { ICarData } from "@/types/car.type";
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
export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
  const cars = await CarsService.getAll();

  return {
    //обязательно обернуть в объект
    props: { cars },
    // notFound,
    // redirect,
  };
};

export default HomePage;
