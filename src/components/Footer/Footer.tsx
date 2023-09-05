import React from "react";
import { useAppSelector } from "../../hooks";
import { Layout } from "antd";
import "./footer.scss";

const Footer = () => {
  const { isDarK } = useAppSelector((state) => state.theme);
  const { Footer } = Layout;
  return (
    <Footer
      className={`footer ${isDarK ? "headerFooterDark" : "headerFooterLight"}`}
    >
      @ 2022 all rights reserved
    </Footer>
  );
};

export default Footer;
