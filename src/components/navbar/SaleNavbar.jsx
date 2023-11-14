import React, { useState } from "react";
import logo from "../../assets/img/logo_1.png";
import uzFlag from "../../assets/img/Flag_of_Uzbek.png";
import ruFlag from "../../assets/img/Flag_of_Russia.png";
import enFlag from "../../assets/img/Flag_of_English.png";
import { Link } from "react-router-dom";
import { langData, routes } from "../../constant";
import i18n from "../../i18n";

const SaleNavbar = () => {
  const [bStatus, setBStatus] = useState(false);
  const [extLangStatus, setExtLangStatus] = useState(false);
  const [language, setLanguage] = useState({
    id: 1,
    title: "Русский",
    value: "ru",
    image: ruFlag,
  });
  const handleSetLanguage = (lang) => {
    i18n.changeLanguage(lang.value);
    setLanguage(lang);
    setExtLangStatus(false);
  };
  return (
    <div className="saleNavbar h-[120px] flex items-center justify-center">
      <div className="container">
        <div className="flex items-center justify-between text-blue">
          <div className="top flex w-2/5">
            <div className="flex items-center justify-center w-[233px] mr-10">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-white text-2xl text-blue rounded-full mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.554 15.2497 21.554 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98818 13.6093 7.94472 11.5658 7.94472 9.054C7.94472 6.54219 9.98823 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z"
                    fill="#0D4C93"
                  />
                </svg>
              </span>
              <p className="text-secondary w-[163px]">
                г.Ташкент, Чиланзар 10 квартал, дом 3/1
              </p>
            </div>
            <div className="flex items-center justify-center w-[215px]">
              <span className="w-[50px] h-[50px] flex items-center justify-center bg-white text-2xl text-blue rounded-full mr-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_502_117)">
                    <path
                      d="M9.10989 12.8901C7.01002 10.7902 6.53589 8.69037 6.42892 7.84906C6.39903 7.61643 6.47908 7.38315 6.64551 7.21789L8.34482 5.51933C8.59479 5.26952 8.63915 4.88019 8.45178 4.58054L5.74616 0.3793C5.53888 0.0474982 5.11326 -0.0722526 4.76337 0.102783L0.419887 2.1484C0.136944 2.28773 -0.0294791 2.58835 0.00264593 2.90209C0.230232 5.06416 1.17282 10.3791 6.39592 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5786L21.8957 17.2351C22.0701 16.886 21.9511 16.4615 21.6207 16.2538L17.4194 13.549C17.12 13.3614 16.7306 13.4054 16.4806 13.6552L14.7821 15.3545C14.6168 15.5209 14.3835 15.6009 14.1509 15.5711C13.3096 15.4641 11.2097 14.99 9.10989 12.8901Z"
                      fill="#0D4C93"
                    />
                    <path
                      d="M17.4483 11.7586C17.0293 11.7586 16.6896 11.419 16.6896 11C16.6861 7.85915 14.1408 5.31388 11 5.31033C10.581 5.31033 10.2414 4.97069 10.2414 4.55171C10.2414 4.13274 10.581 3.79309 11 3.79309C14.9784 3.79748 18.2025 7.02155 18.2069 11C18.2069 11.419 17.8672 11.7586 17.4483 11.7586Z"
                      fill="#0D4C93"
                    />
                    <path
                      d="M21.2414 11.7586C20.8224 11.7586 20.4827 11.419 20.4827 11C20.4769 5.76524 16.2347 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0723 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6355 11.6787 21.4426 11.7586 21.2414 11.7586Z"
                      fill="#0D4C93"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_502_117">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <div className="flex flex-col">
                <a className="text-secondary" href="tel:+998712766253">
                  +998 71 276-62-53
                </a>
                <a className="text-secondary" href="tel:+998712766254">
                  +998 71 276-62-54
                </a>
              </div>
            </div>
          </div>
          <div className="center w-1/5 ">
            <Link to={routes.HOME}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="bottom flex w-[35%] justify-between">
            <div
              className={`top bg-white flex rounded-25 ${
                bStatus ? "w-full" : ""
              }`}
            >
              <button
                className={`flex items-center justify-center w-[50px] h-[50px]  text-2xl text-blue rounded-full ${
                  !bStatus ? "bg-white" : "bg-blue"
                }`}
              >
                {!bStatus ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z"
                      fill="#0D4C93"
                    />
                    <path
                      d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z"
                      fill="#0D4C93"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z"
                      fill="white"
                    />
                    <path
                      d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
              {bStatus && (
                <input
                  type="text"
                  placeholder="Поиск по сайту"
                  className="ml-[26px] bg-transparent bottomInput text-black text-xs"
                />
              )}
            </div>
            {!bStatus && (
              <>
                <div className="center mr-4">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center justify-center h-[50px] py-18 bg-white rounded-25 px-5">
                      <span className="mr-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.7037 22V11.9655H16.0706L16.5757 8.05372H12.7037V5.55662C12.7037 4.42442 13.0169 3.65284 14.6423 3.65284L16.712 3.65199V0.153153C16.354 0.10664 15.1254 0 13.6954 0C10.7094 0 8.66505 1.82266 8.66505 5.1692V8.05372H5.28802V11.9655H8.66505V22H12.7037Z"
                            fill="#0D4C93"
                          />
                        </svg>
                      </span>
                      <p>Мы на Facebook</p>
                    </div>
                  </a>
                </div>
                <div className="bottom relative">
                  <div
                    onClick={() => setExtLangStatus(!extLangStatus)}
                    className="center flex w-[142px] h-[50px] bg-white rounded-25 items-center justify-center py-18 px-5 cursor-pointer"
                  >
                    <img
                      src={language?.image}
                      className="rounded-full mr-2.5"
                    />
                    <p className="mr-3">{language?.title}</p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_502_104)">
                          <path
                            d="M5.49997 8.63515C5.30283 8.63515 5.10571 8.55987 4.95541 8.40964L0.225655 3.67984C-0.0752185 3.37897 -0.0752185 2.89115 0.225655 2.5904C0.526408 2.28965 1.01413 2.28965 1.31502 2.5904L5.49997 6.77559L9.68494 2.59055C9.98581 2.2898 10.4735 2.2898 10.7742 2.59055C11.0752 2.8913 11.0752 3.37912 10.7742 3.67999L6.04453 8.40979C5.89416 8.56005 5.69704 8.63515 5.49997 8.63515Z"
                            fill="#0D4C93"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_502_104">
                            <rect width="11" height="11" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  {extLangStatus && (
                    <div className="bottomExtraDiv">
                      <div className="bg-white flex justify-center items-center w-full rounded-15">
                        <div className="my-3 w-full flex flex-col items-center justify-center">
                          {langData.map((lang) => (
                            <div
                              onClick={() => handleSetLanguage(lang)}
                              className="w-full hover:bg-gray flex items-center justify-center cursor-pointer"
                              key={lang.id}
                            >
                              <div className="py-1 flex w-4/6">
                                <div className="flex items-center justify-center">
                                  <img
                                    src={lang?.image}
                                    alt="w-full"
                                    className="!w-[30px] !w-[30px] rounded-full mr-2.5"
                                  />
                                </div>
                                <p className="py-3 text-xs">{lang?.title}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleNavbar;
