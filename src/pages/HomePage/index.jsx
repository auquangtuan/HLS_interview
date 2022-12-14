import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./style.css";

const HomePage = ({ children }) => {
  return (
    <div className="HomePage">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomePage;
