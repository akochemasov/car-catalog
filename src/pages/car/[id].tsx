import { useRouter } from "next/router";
import exp from "constants";
import Layout from "@/components/layouts/Layout";

const CarPage = () => {
  const router = useRouter();

  console.log(router.asPath, router.pathname, router.query);

  return (
    <Layout>
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
