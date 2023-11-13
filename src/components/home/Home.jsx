import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
  return <div>
    {t("greeting")}
  </div>;
};

export default Home;
