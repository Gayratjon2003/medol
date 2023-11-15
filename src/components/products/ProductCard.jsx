import React from "react";

const ProductCard = ({ title, image, btnText, link }) => {
  return (
    <div className="card flex justify-center items-center bgProductCard">
      <div className="flex flex-col mt-9 mb-[42px] mx-12 items-center text-center">
        <div className="w-[220px] h-[220px] flex items-center justify-center">
          <img src={image} alt={title} className="max-w-[220px] object-cover" />
        </div>
        <h2 className="text-2xl font-normal text-primary w-4/5">{title}</h2>
        <a href={link} target="_blank" rel="noreferrer">
          <button className="px-58 py-6 btn-more-details mt-7 text-white text-xl rounded-35">
            {btnText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
