import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import i18next from "i18next";
import { Link } from "react-router-dom";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero mt-119 bg-transparent -sm:mt-[53px]">
      <div className="container">
        <div className="box">
          <>
            <Swiper
              pagination={{ clickable: true }}
              loop={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {i18next.t("hero.data", { returnObjects: true }).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="slide flex">
                    <div className="left w-1/2 -xl:w-full">
                      <div className="flex flex-col justify-between items-start">
                        <h1 className="mb-8 text-blue text-50 w-4/5 -sm:text-[32px] -sm:mb-[22px]">
                          {item?.title}
                        </h1>
                        <p className="text-primary text-2xl mr-[65px] -sm:text-[20px] -sm:mr-0">
                          {item?.text}
                        </p>
                        <Link href={item?.link} target="_blank" rel="noreferrer">
                          <button className="mt-11 btn-more-details text-white text-2xl mb-[108px] py-[21px] pr-[74px] pl-[71px] rounded-35 -sm:py-[18px] -sm:pr-[119px] -sm:pl-[112px] -sm:text-[20px] -sm:mt-[37px] -sm:mb-[30px]">
                            {t("moreDetails")}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="right w-1/2 -xl:hidden">
                      <img
                        src={process.env.PUBLIC_URL + item?.image_url}
                        alt={item?.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default Hero;
