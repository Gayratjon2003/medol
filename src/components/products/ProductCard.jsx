import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, image, btnText, link }) => {
  return (
    <div className="card flex justify-center items-center bgProductCard max-w-[50%] -md:w-[40%] -sm:!w-[40%]">
      <div className="flex flex-col mt-9 mb-[42px] mx-12 items-center text-center -sm:m-0">
        <div className="w-[220px] h-[220px] flex items-center justify-center -sm:w-[335px]">
          <img src={image} alt={title} className="max-w-[220px] object-cover" />
        </div>
        <h2 className="text-2xl font-normal text-primary w-4/5">{title}</h2>
        <Link href={link} target="_blank" rel="noreferrer">
          <button className="px-58 py-6 btn-more-details mt-7 text-white text-xl rounded-35 whitespace-nowrap -md:px-11 -sm:py-6">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
