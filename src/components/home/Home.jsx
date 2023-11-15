import React from "react";
import { useTranslation } from "react-i18next";
import { About, Hero, News, Partners, Products, Services } from "../index";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
        <Hero />
        <Products />
        <Services />
        <About />
        <News />
        <Partners />
    </div>
  );
};

export default Home;
