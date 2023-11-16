import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo_1.png";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { routes } from "../../constant";
const Footer = ({openModal}) => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <div className="box pt-[55px]">
          <div className="flex justify-between">
            <div className="left flex w-1/2 flex-col mr-[62px]">
              <div className="top flex">
                <h2 className="text-[#595959] text-[26px] mr-10">
                  {t("footer.contact")}{" "}
                </h2>
                <div className="flex items-start flex-col justify-start mr-12">
                  <div className="flex items-center justify-center mb-10">
                    <span className="mr-5">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="50" height="50" rx="25" fill="white" />
                        <path
                          d="M24.5 13C19.5076 13 15.4459 17.0616 15.4459 22.054C15.4459 28.2497 23.5484 37.3454 23.8934 37.7295C24.2174 38.0904 24.7832 38.0898 25.1066 37.7295C25.4516 37.3454 33.554 28.2497 33.554 22.054C33.554 17.0616 29.4924 13 24.5 13ZM24.5 26.6093C21.9882 26.6093 19.9447 24.5658 19.9447 22.054C19.9447 19.5422 21.9882 17.4987 24.5 17.4987C27.0118 17.4987 29.0552 19.5422 29.0552 22.0541C29.0552 24.5659 27.0118 26.6093 24.5 26.6093Z"
                          fill="#0D4C93"
                        />
                      </svg>
                    </span>
                    <p className="text-base text-secondary w-[163px]">
                      {t("footer.address")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="mr-5">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="50" height="50" rx="25" fill="white" />
                        <g clipPath="url(#clip0_4301_2)">
                          <path
                            d="M33.9785 16.7402H15.0215C14.7103 16.7402 14.419 16.8167 14.1554 16.9428L24.4551 27.2425L26.7636 25.0239C26.7636 25.0239 26.7637 25.0237 26.7638 25.0236C26.7638 25.0235 26.764 25.0234 26.764 25.0234L34.8449 16.943C34.5813 16.8168 34.2898 16.7402 33.9785 16.7402Z"
                            fill="#0D4C93"
                          />
                          <path
                            d="M35.7977 17.896L28.1932 25.5001L35.7974 33.1043C35.9235 32.8408 36 32.5495 36 32.2383V18.7617C36 18.4507 35.9237 18.1595 35.7977 17.896Z"
                            fill="#0D4C93"
                          />
                          <path
                            d="M13.2026 17.8955C13.0765 18.1591 13 18.4504 13 18.7616V32.2381C13 32.5491 13.0764 32.8405 13.2024 33.1039L20.8069 25.4998L13.2026 17.8955Z"
                            fill="#0D4C93"
                          />
                          <path
                            d="M27.2403 26.4532L24.9315 28.672C24.7999 28.8037 24.6275 28.8695 24.4551 28.8695C24.2828 28.8695 24.1103 28.8037 23.9787 28.672L21.7598 26.4531L14.1551 34.0573C14.4187 34.1835 14.7102 34.2601 15.0215 34.2601H33.9785C34.2897 34.2601 34.581 34.1836 34.8446 34.0575L27.2403 26.4532Z"
                            fill="#0D4C93"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4301_2">
                            <rect
                              width="23"
                              height="23"
                              fill="white"
                              transform="translate(13 14)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <p className="w-[113px] text-[#5A5A5A]">
                      {t("footer.email")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex mb-8">
                    <span className="mr-5">
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="50" height="50" rx="25" fill="white" />
                        <g clipPath="url(#clip0_4301_2)">
                          <path
                            d="M22.1099 26.89C20.01 24.7902 19.5359 22.6903 19.4289 21.849C19.399 21.6164 19.4791 21.3831 19.6455 21.2178L21.3448 19.5193C21.5948 19.2695 21.6392 18.8801 21.4518 18.5805L18.7462 14.3792C18.5389 14.0474 18.1133 13.9277 17.7634 14.1027L13.4199 16.1483C13.137 16.2877 12.9705 16.5883 13.0027 16.902C13.2302 19.0641 14.1728 24.379 19.3959 29.6025C24.619 34.826 29.9332 35.7682 32.0964 35.9958C32.4101 36.0279 32.7107 35.8615 32.8501 35.5785L34.8957 31.235C35.0701 30.8859 34.9511 30.4614 34.6207 30.2538L30.4195 27.5489C30.12 27.3613 29.7307 27.4054 29.4807 27.6551L27.7821 29.3544C27.6168 29.5208 27.3836 29.6009 27.1509 29.571C26.3096 29.464 24.2098 28.9899 22.1099 26.89Z"
                            fill="#0D4C93"
                          />
                          <path
                            d="M30.4483 25.7585C30.0293 25.7585 29.6897 25.4188 29.6897 24.9999C29.6861 21.859 27.1409 19.3138 24 19.3102C23.581 19.3102 23.2414 18.9706 23.2414 18.5516C23.2414 18.1326 23.581 17.793 24 17.793C27.9785 17.7974 31.2025 21.0214 31.2069 24.9999C31.2069 25.4188 30.8673 25.7585 30.4483 25.7585Z"
                            fill="#0D4C93"
                          />
                          <path
                            d="M34.2414 25.7586C33.8224 25.7586 33.4828 25.419 33.4828 25C33.4769 19.7652 29.2348 15.5231 24 15.5172C23.581 15.5172 23.2414 15.1776 23.2414 14.7586C23.2414 14.3396 23.581 14 24 14C30.0724 14.0067 34.9933 18.9276 35 25C35 25.2012 34.9201 25.3942 34.7778 25.5364C34.6356 25.6787 34.4426 25.7586 34.2414 25.7586Z"
                            fill="#0D4C93"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4301_2">
                            <rect
                              width="22"
                              height="22"
                              fill="white"
                              transform="translate(13 14)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <div className="flex flex-col text-[#5A5A5A] ">
                      <span>
                        <a href="tel:+998712766253" className="font-normal">
                          +998 71 276-62-53
                        </a>
                      </span>
                      <span>
                        <a href="tel:+998712766254" className="font-normal">
                          +998 71 276-62-54
                        </a>
                      </span>
                    </div>
                  </div>
                  <button
                  onClick={openModal}
                  className="btn-more-details h-[50px] px-[30px] whitespace-nowrap rounded-35 text-white font-normal">
                    {t("footer.submitApp")}
                  </button>
                </div>
              </div>
              <div className="bottom flex items-center mt-[47px] w-full">
                <Link to={routes.HOME} className="mr-[37px] block w-[35%]">
                  <img src={logo} alt="Logo" className="" />
                </Link>
                <p className="text-[#585858] text-xl w-[80%]">
                  {t("footer.desc")}
                </p>
              </div>
            </div>
            <div className="right w-1/2 flex justify-between text-[#595959]">
              <div>
                <h2>{t("footer.about.title")}</h2>
                {i18next
                  .t("footer.about.lists", { returnObjects: true })
                  .map((item, id) => (
                    <li key={id}>
                      <Link to={item?.link}>{item?.name}</Link>
                    </li>
                  ))}
              </div>
              <div>
                <h2>{t("footer.products.title")}</h2>
                {i18next
                  .t("footer.products.lists", { returnObjects: true })
                  .map((item, id) => (
                    <li key={id}>
                      <Link to={item?.link}>{item?.name}</Link>
                    </li>
                  ))}
              </div>
              <div>
                <h2>{t("footer.services.title")}</h2>
                {i18next
                  .t("footer.services.lists", { returnObjects: true })
                  .map((item, id) => (
                    <li key={id}>
                      <Link to={item?.link}>{item?.name}</Link>
                    </li>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full text-[#353535] text-lg mt-[50px] mb-7">
            <div className="w-1/2 flex items-center justify-start">
              <p>{t("footer.medical")} </p>
            </div>
            <div className="w-1/2 flex items-center justify-end">
              <p className="flex">
                {t("footer.domain")}
                <a
                  href="www.uz"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lightBlue underline"
                >
                  .uz
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
