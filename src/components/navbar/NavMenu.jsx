import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="navMenu">
      <div className="container">
        <div className="navMenu-box font-normal text-xl text-blue">
          <div className="">
            <ul className="flex items-center justify-between rounded-35 overflow-hidden gap-x-[2px]">
              {i18next
                .t("navData.data", { returnObjects: true })
                .map((item, id) => (
                  <Link key={id} to={item?.path}>
                    <li
                      className={`px-12 pt-6 pb-4 bg-white whitespace-nowrap relative navLiHover hover:text-lightBlue ${
                        pathname === item?.path ? "text-lightBlue" : ""
                      }`}
                    >
                      <span
                        className={`absolute top-3 right-3 navHoverSpan ${
                          pathname === item?.path ? "block" : "hidden"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle cx="6" cy="6" r="6" fill="#00C9C9" />
                        </svg>
                      </span>
                      {item.title}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
