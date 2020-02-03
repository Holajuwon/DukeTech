import React from "react";
import layoutStyles from "../styles/layout.module.css";

const Footer = () => {
  return (
    <footer className={layoutStyles.footer}>
      <p>
        Created with <span style={{ color: "red" }}>❤</span> by Huncho &copy;
        2020
      </p>
    </footer>
  );
};

export default Footer;
