import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
const Services = () => {
  const { t } = useTranslation();
  return (
    <section className="services">
      <h1 className="text-blue py-[69px] bg-white text-center">
        {t("services.title")}{" "}
      </h1>
      <div className="container">
        <div className="box flex justify-between items-center text-center mt-[75px] gap-x-[95px] pb-[92px]">
          {i18next
            .t("services.cards", { returnObjects: true })
            .map((item, id) => (
              <div
                key={id}
                className="card flex flex-col rounded-50 max-w-[394px] bg-white"
              >
                <div className="top w-[394px] h-[255px] flex items-center justify-center rounded-tl-50 rounded-tr-50 overflow-hidden">
                  <img
                    src={item?.image_url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="center mt-[22px] mx-[41px]">
                  <h2 className="text-xl text-blue mb-[14px]">
                    {item?.title}{" "}
                  </h2>
                  <p className="text-black font-light pb-[72px]">
                    {item?.desc?.length > 145
                      ? item?.desc.slice(0, 146).concat(".....")
                      : item?.desc}
                  </p>
                </div>
                <div className="bottom -mb-[25px]">
                  <Link href={item?.link} target="_blank" rel="noreferrer">
                    <button className="text-white text-xl font-normal rounded-35 pt-15 pr-[84px] pb-3 pl-[82px] btn-more-details">
                      {t("moreDetails")}{" "}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
