//доступна по адресу - http://localhost:3000/about
import Layout from "@/components/layouts/Layout";
import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout title={"About"} description={"about"}>
      About page
    </Layout>
  );
};

export default AboutPage;
