import React from "react";
import { useTranslation } from "react-i18next";
import image from "../../assets/img/about-left.png";
import { Link } from "react-router-dom";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="about bg-white">
      <h1 className="text-blue text-center pb-[52px] pt-[70px]">
        {t("about.title")}{" "}
      </h1>
      <div className="container">
        <div className="box flex justify-between items-center pb-[108px]">
          <div className="left w-1/2 z-40 relative -md:hidden">
            <img src={image} alt="Image" />
          </div>
          <div className="right w-[80%] rounded-50 -ml-[45%] flex justify-end -2xl:w-[70%] -md:w-full -md:m-0 -md:!rounded-50">
            <div className="mt-[57px] mr-10 w-[65%] -md:w-full">
              <p className="font-light text-primary leading-[34.5px] pl-[41px]">
                {t("about.desc")}
              </p>
              <Link href={t("about.link")} target="_blank" rel="noreferrer" 
              className="flex items-center justify-center"
              >
                <button className="btn-more-details text-white my-8 pt-[15px] pr-[60px] pb-3 pl-[58px] rounded-35">
                  {t("about.btn")}{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
