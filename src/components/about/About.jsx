import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../assets/img/about-left.png";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about bg-white">
      <h1 className="text-blue text-center pb-[52px] pt-[70px]">
        {t("about.title")}{" "}
      </h1>
      <div className="container">
        <div className="box flex justify-between items-center pb-[108px]">
          <div className="left w-1/2 z-40 relative">
            <img src={image} alt="Image" />
          </div>
          <div className="right w-[80%] bg-red-600 rounded-50 -ml-[45%] flex justify-end">
            <div className="mt-[57px] mr-10 w-[65%]">
              <p className="font-light text-primary leading-[34.5px]">
                {t("about.desc")}
              </p>
              <a href={t("about.link")} target="_blank" rel="noreferrer">
                <button className="btn-more-details text-white my-8 pt-[15px] pr-[60px] pb-3 pl-[58px] rounded-35">
                  {t("about.btn")}{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
