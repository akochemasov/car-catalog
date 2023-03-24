import { useRouter } from "next/router";
import Layout from "@/components/layouts/Layout";

const CarPage = () => {
  const router = useRouter();

  console.log(router.asPath, router.pathname, router.query);

  return (
    <Layout title={`Car ${router.query.id}`} description={"car"}>
      <h2>Car page</h2>

      {/* нет возможности вернуться назад */}
      <button onClick={() => router.replace("/")}>Go home (replace)</button>

      <br />

      {/* можно вернуться назад */}
      <button onClick={() => router.replace("/")}>Go home</button>
    </Layout>
  );
};

export default CarPage;
