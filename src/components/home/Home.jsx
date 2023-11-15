import React from "react";
import { useTranslation } from "react-i18next";
import { About, Hero, Products, Services } from "../index";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Hero />
        <Products />
        <Services />
        <About />
    </div>
  );
};

export default Home;
