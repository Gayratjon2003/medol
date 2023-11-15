import React from "react";
import { useTranslation } from "react-i18next";
import { NewsCard } from "../index";
import i18next from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const News = () => {
  const { t } = useTranslation();
  return (
    <section className="news bg-white">
      <div className="container">
        <div className="box">
          <div className="top">
            <h1 className="text-blue text-center mb-[81px]">
              {t("news.title")}{" "}
            </h1>
          </div>
          <div className="center flex items-center justify-between">
            <Swiper
              slidesPerView={3}
              spaceBetween={83}
              loop={true}
              modules={[ Navigation]}
              navigation={true}
              initialSlide={2}
              className="news-swipper"
            >
              {i18next
                .t("news.cards", { returnObjects: true })
                .map((item, id) => (
                  <SwiperSlide key={item.id}>
                    <NewsCard
                      key={id}
                      title={item?.title}
                      image_url={item?.image_url}
                      desc={item?.desc}
                      link={item?.link}
                      btnText={t("moreDetails")}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="bottom pt-[69px] flex justify-center items-center text-blue text-2xl pb-[105px]">
            <a
              href={t("news.viewAllNewsLink")}
              target="_blank"
              rel="noreferrer"
              className="mr-[335px] flex items-center justify-center font-normal hover:text-lightBlue"
            >
              {t("news.viewAllNews")}
              <span className="border-[3px] ml-3 rounded-full w-[30px] h-[30px] flex items-center justify-center news-arrow-left">
                <i className="bx bx-chevron-right mr-[1.5px] font-bold"></i>
              </span>
            </a>
            <a
              href={t("news.viewAllNewsLink")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center font-normal hover:text-lightBlue"
            >
              {t("news.subscribeToNews")}
              <span className="border-[3px] ml-3 rounded-full w-[30px] h-[30px] flex items-center justify-center news-arrow-left">
                <i className="bx bx-chevron-right mr-[1.5px] font-bold"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
