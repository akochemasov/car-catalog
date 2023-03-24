import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/layouts/header/Header";
import Meta, { IMeta } from "@/components/seo/Meta";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(() => import("./Footer"), {
  ssr: false,
  // loading: () => <p>Loading...</p>,
});

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
      {/* не будет отображаться в page source */}
      <DynamicFooter />
      {/*<Footer />*/}
    </Meta>
  );
};

export default Layout;
