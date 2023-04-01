import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.css";

const Header = () => {
  const router = useRouter();
  //console.log(router.pathname);

  return (
    <div className={styles.wrapper}>
      <Link href={"/"} className={router.pathname === "/" ? styles.active : ""}>
        Home
      </Link>
      <Link
        href={"/about"}
        className={router.pathname === "/about" ? styles.active : ""}
      >
        About
      </Link>
      <Link
        href={"/cars"}
        className={router.pathname === "/cars" ? styles.active : ""}
      >
        Cars
      </Link>
    </div>
  );
};

export default Header;
