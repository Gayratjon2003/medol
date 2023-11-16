import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Modal = ({ status, title, closeModal }) => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [theme, setTheme] = useState("");
  const [agree, setAgree] = useState(true);
  const [message, setMessage] = useState("");
  const clear = () => {
    setUserName("");
    setTel("");
    setTheme("");
    setMessage("");
    setAgree(true);
  };
  const submit = () => {
    console.log(`${userName} ${tel} ${theme} ${message} ${agree}`);
    clear();
    closeModal();
  };

  return (
    <div
      className={`modal top-0 left-0 fixed z-50 w-screen h-screen flex items-center justify-center ${
        status ? "" : "hidden"
      }`}
    >
      <div className="relative bg-white rounded-30">
        <div className="child ">
          <div className="box flex flex-col mt-[50px] mx-[71px] mb-10 text-[#8D8D8D] text-lg items-center">
            <h1 className="text-secondary mb-[43px] text-center">{title}</h1>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder={t("modal.name")}
              className="pt-[18px] pl-[21px] pb-[17px] rounded-20 bg-[#F6F6F6] mb-5 w-full"
            />
            <input
              type="number"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder={t("modal.tel")}
              className="pt-[18px] pl-[21px] pb-[17px] rounded-20 bg-[#F6F6F6] mb-5 w-full"
              required
            />
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="pt-[18px] pl-[21px] pb-[17px] rounded-20 bg-[#F6F6F6] mb-5 w-full"
              placeholder={t("modal.theme")}
              required
            />
            <textarea
              placeholder={t("modal.message")}
              className="pt-[18px] pl-[21px] pb-[17px] rounded-20 bg-[#F6F6F6] w-full h-[147px] mb-4 overflow-auto myTextarea"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex">
              <div
                className="custom-checkbox mr-4 cursor-pointer"
                onClick={() => setAgree(!agree)}
              >
                {agree ? (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        y="0.204102"
                        width="24"
                        height="23.2895"
                        rx="4"
                        fill="#F3F3F3"
                      />
                      <path
                        d="M7.17224 11.6481C6.7984 11.2996 6.1923 11.2996 5.81846 11.6481C5.44463 11.9967 5.44463 12.5619 5.81846 12.9104L9.20291 16.0662C9.57792 16.4158 10.1863 16.4146 10.5597 16.0634L18.1838 8.89103C18.556 8.54091 18.5533 7.97577 18.1778 7.62875C17.8023 7.28173 17.1962 7.28424 16.824 7.63436L9.87678 14.1699L7.17224 11.6481Z"
                        fill="#00C9C9"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="w-[24px] h-[24px] bg-[#F6F6F6] rounded-4 block"></span>
                )}
              </div>
              <p className="text-[#333] text-[14px] font-normal">
                {t("modal.agree")}
              </p>
            </div>
            <button
              className="btn-more-details py-6 px-[84px] rounded-35 mt-[30px] text-white text-xl"
              onClick={submit}
            >
              {t("modal.send")}
            </button>
          </div>
        </div>
        <div
          className="absolute top-[29px] right-[30px] cursor-pointer cancel-modal"
          onClick={() => closeModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_645_935)">
              <path
                d="M12.3739 10.0017L19.8022 2.57392C20.0659 2.31015 20.0659 1.8833 19.8022 1.61962L18.3825 0.199446C18.2561 0.0730941 18.0845 0.00195312 17.9054 0.00195312C17.7263 0.00195312 17.5547 0.0730941 17.4283 0.199446L10 7.6278L2.57174 0.199446C2.4453 0.0730941 2.27372 0.00195312 2.09459 0.00195312C1.9155 0.00195312 1.74388 0.0730941 1.61748 0.199446L0.19783 1.61962C-0.0659432 1.8833 -0.0659432 2.31015 0.19783 2.57392L7.6261 10.0018L0.198568 17.4287C-0.0650751 17.6924 -0.0650751 18.1193 0.198568 18.383L1.61831 19.8032C1.74466 19.9295 1.91628 20.0006 2.09541 20.0006C2.27455 20.0006 2.44613 19.9295 2.57261 19.8032L9.99997 12.3757L17.4274 19.8032C17.5538 19.9295 17.7254 20.0006 17.9045 20.0006C18.0837 20.0006 18.2553 19.9295 18.3816 19.8032L19.8014 18.383C20.065 18.1193 20.065 17.6924 19.8014 17.4287L12.3739 10.0017Z"
                fill="#AAAAAA"
              />
            </g>
            <defs>
              <clipPath id="clip0_645_935">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
