import React from "react";
import vector1 from "../assets/images/vector1.png";
import vector2 from "../assets/images/vector2.png";
import frame from "../assets/images/frame.png";
import phone1 from "../assets/images/phone1.png";
import frame2 from "../assets/images/frame2.png";
import phone2 from "../assets/images/phone2.png";
import vector3 from "../assets/images/vector3.png";
import vector4 from "../assets/images/vector4.png";
import vector5 from "../assets/images/vector5.png";
import vector6 from "../assets/images/vector6.png";
import FormRegister from "./FormRegister";

const Banner = () => {
  const handleScroll = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 650,
    });
  };

  return (
    <div>
      <div className="banner">
        <img className="banner__vector1" src={vector1} />
        <h1 className="banner__title">
          APP LUYỆN NÓI <br />& GIAO TIẾP TIẾNG ANH THỜI 4.0
        </h1>
        <p className="banner__para">
          Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay!
        </p>

        <button className="banner__button" onClick={() => handleScroll()}>
          Đăng ký ngay
        </button>
        <img className="banner__frame" src={frame} />
        <img className="banner__phone1" src={phone1} />
        <img className="banner__vector2" src={vector2} />
      </div>
      <div className="session1">
        <div className="session1__image">
          <img className="session1__image__frame2" src={frame2} />
          <img className="session1__image__vector6" src={vector6} />
          <img className="session1__image__vector4" src={vector4} />
          <img className="session1__image__phone2" src={phone2} />
          <img className="session1__image__vector3" src={vector3} />
          <img className="session1__image__vector5" src={vector5} />
        </div>
        <div className="session1__form">
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default Banner;
