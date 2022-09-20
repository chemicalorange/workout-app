import React from "react";
import Header from "./Header/Header";

import styles from "./Layout.module.scss";

const Layout = ({ children, background }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <Header />
      {children}
    </div>
  );
};

export default Layout;
