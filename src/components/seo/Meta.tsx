import React, { FC, PropsWithChildren } from "react";
import Head from "next/head";

export interface IMeta {
  title: string;
  description?: string; //необязательно так как некоторые страницы не должны индексироваться - админ панель, личный кабинет
}

const getTitle = (title: IMeta["title"]) => `${title} | cars`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {description ? (
          <>
            <meta name={"description"} content={description} />
            {/* для соц сетей */}
            <meta name={"og:title"} content={getTitle(title)} />
            <meta name={"og:description"} content={description} />
          </>
        ) : (
          <>
            {/* говорим роботу, чтобы не индексировал эту страничку */}
            <meta name={"robots"} content={"noindex, nofollow"} />
          </>
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
