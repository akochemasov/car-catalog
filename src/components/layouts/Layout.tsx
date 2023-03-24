import React, { FC, PropsWithChildren } from "react";
import Header from "@/components/layouts/header/Header";
import Meta, { IMeta } from "@/components/seo/Meta";

const Layout: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      <main>{children}</main>
    </Meta>
  );
};

export default Layout;
