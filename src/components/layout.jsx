import React from "react";
import Header from "./Header";
import Footer from "./footer";
import layoutStyles from "../styles/layout.module.css";

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;