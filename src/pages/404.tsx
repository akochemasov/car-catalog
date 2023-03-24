import React from "react";
import Layout from "@/components/layouts/Layout";
import Image from "next/image";
import Head from "next/head";

import Image404 from "../../public/404.png";

const NotFound = () => {
  return (
    <Layout>
      <Head>
        <title>Not found</title>
      </Head>
      <h2>Not found</h2>
      <Image src={"/404.png"} alt={"404"} width={450} height={433} />

      {/* растянуть на всю страницу */}
      {/*<Image src={"/404.png"} alt={"404"} fill />*/}

      {/* размер не обязательно указывать */}
      {/*<Image src={Image404} alt={"404"} />*/}
    </Layout>
  );
};

export default NotFound;
