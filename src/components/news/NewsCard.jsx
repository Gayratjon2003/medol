import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ image_url, title, desc, link, btnText }) => {
  return (
    <div className="pt-40 -md:mt-0">
      <Link href={link} target="_blank" rel="noreferrer">
        <div className="news-card card flex flex-col rounded-35 max-w-[382px] items-center text-center">
          <div
           className="top max-w-[240px] h-[251px] flex items-center justify-center rounded-50 overflow-hidden -mt-[35%] -md:w-[280px]">
            <img
              src={image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="center mt-[22px] mx-[41px] -md:ml-5 -md:mr-[14px]">
            <h2 className="text-xl text-blue mb-[14px] news-card-title">
              {title}{" "}
            </h2>
            <p className="text-black font-light pb-[72px]">
              {desc?.length > 240 ? desc.slice(0, 255).concat("...") : desc}
            </p>
          </div>
          <div className="bottom -mb-[25px]">
            <a href={link} target="_blank" rel="noreferrer">
              <button className="news-card-btn text-white text-xl font-normal rounded-35 pt-15 pr-[84px] pb-3 pl-[82px] btn-more-details">
                {btnText}
              </button>
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
