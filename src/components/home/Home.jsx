import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  About,
  Hero,
  News,
  Partners,
  Products,
  Services,
  Modal,
} from "../index";
const Home = ({ modalStatus, closeModal }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Hero />
      <Products />
      <Services />
      <About />
      <News />
      <Partners />
      <Modal
        status={modalStatus}
        title={t("modal.title")}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Home;
