import HomeScreen from "@/components/screens/home/HomeScreen";
import { NextPage } from "next";
import { ICarData } from "@/types/car.types";
import { wrapper } from "@/store";
import { getAll } from "@/store/slices/cars.slice";

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return (
    <>
      <HomeScreen data={cars} />
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
// export const getStaticProps: GetStaticProps<ICarData> = async () => {
//   const cars = await CarsService.getAll();
//
//   return {
//     //обязательно обернуть в объект
//     props: { cars }, //пропсы попадаю в компонент HomePage({cars})
//     revalidate: 60, //ревалидация данных - это ISR
//     // notFound,
//     // redirect,
//   };
// };

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(getAll());
      const { data } = store.getState().cars;
      //console.log("cars", data); //todo: данные на бэкенде

      return {
        props: { cars: data },
      };
    }
);

export default HomePage;
