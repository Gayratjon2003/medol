import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Navigation, Grid } from "swiper/modules";
import { Link } from "react-router-dom";

const Partners = () => {
  const { t } = useTranslation();
  const [slidesPerView, setSlidesPerView] = useState(4);
  useEffect(() => {
    if (window.innerWidth < 767) {
      setSlidesPerView(2);
    }
  }, []);
  return (
    <section className="partners bg-white pb-[130px] -md:pb-[30px]">
      <div className="container">
        <div className="box">
          <div className="top">
            <h1 className="text-blue text-center mb-[65px]">
              {t("partners.title")}{" "}
            </h1>
          </div>
          <div className="center">
            <Swiper
              slidesPerView={slidesPerView}
              grid={{
                rows: 2,
              }}
              loop={true}
              modules={[Navigation, Grid]}
              initialSlide={4}
              navigation={true}
              className="partner-swipper"
            >
              {i18next
                .t("partners.cards", { returnObjects: true })
                .map((item, id) => (
                  <SwiperSlide key={id}>
                    <Link
                      href={item?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block !w-[275px]"
                    >
                      <div className="partner-card w-[275px] h-[135px] flex justify-center items-center rounded-30">
                        <img
                          src={process.env.PUBLIC_URL + item?.image_url}
                          alt={item?.link}
                          className="py-2 px-[60px]"
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
