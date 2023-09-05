import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FooterContent from "../Footer/Footer";
import { Layout } from "antd";
import RoutesApp from "../../Routes/Routes";

const Index = () => {
  const {  Content } = Layout;

  return (
    <Router>
      <Layout style={{ background: "transparent" }}>
        <Navbar />

        <Content style={{minHeight:'100vh'}}>
          <RoutesApp />
        </Content>

        <FooterContent />
      </Layout>
    </Router>
  );
};

export default Index;
