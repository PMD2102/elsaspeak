import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import name from "../assets/images/name.png";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email.png";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { store } from "react-notifications-component";

const defaultValues = {
  name: "",
  phonenumber: "",
  email: "",
  course: false,
};
const notify = () => {
  store.addNotification({
    title: "Thông báo",
    message: "Chúc mừng bạn đã đăng ký thành công !",
    type: "success",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 3000,
    },
  });
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object({
    name: yup.string().required("Thông tin bắt buộc"),
    phonenumber: yup
      .string()
      .required("Thông tin bắt buộc")
      .matches(phoneRegExp, "Số điện thoại không đúng định dạng"),
    email: yup
      .string()
      .email("Email không đúng định dạng")
      .required("Thông tin bắt buộc"),
    course: yup
      .bool()
      .required("Thông tin bắt buộc")
      .oneOf([true], "Thông tin bắt buộc"),
  })
  .required();
const FormRegister = (props) => {
  const [isChecked1, setIsChecked1] = useState(false);
  const handleChanged1 = (event) => {
    setIsChecked1(true);
    setIsChecked2(false);
  };
  const [isChecked2, setIsChecked2] = useState(false);
  const handleChanged2 = (event) => {
    setIsChecked2(true);
    setIsChecked1(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (value) => {
    console.log("FORM: ", value);
    notify();
    reset(defaultValues);
    setIsChecked1(false);
    setIsChecked2(false);
  };

  return (
    <div className="form">
      <div className="form__title">
        <p className="form__title__para">
          CÙNG ỨNG DỤNG ELSA
          <br /> NÓI TIẾNG ANH “THẢ GA”
        </p>
      </div>
      <div className="form__inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <section className="form__inputs__name">
            <label className="form__inputs__name__title">
              <img className="form__inputs__name__title__image" src={name} />
              Họ tên *
            </label>
            <input
              className="form__inputs__name__input"
              {...register("name")}
            />
            <p className="form__inputs__name__error">{errors.name?.message}</p>
          </section>
          <section className="form__inputs__phone">
            <label className="form__inputs__phone__title">
              <img className="form__inputs__phone__title__image" src={phone} />
              Số điện thoại *
            </label>
            <input
              className="form__inputs__phone__input"
              {...register("phonenumber")}
            />
            <p className="form__inputs__phone__error">
              {errors.phonenumber?.message}
            </p>
          </section>
          <section className="form__inputs__email">
            <label className="form__inputs__email__title">
              <img className="form__inputs__email__title__image" src={email} />
              Email *
            </label>
            <input
              className="form__inputs__email__input"
              {...register("email")}
            />
            <p className="form__inputs__email__error">
              {errors.email?.message}
            </p>
          </section>
          <section className="form__inputs__course">
            <div className="form__inputs__course__checkbox">
              <div className="form__inputs__course__checkbox__1">
                <input
                  className="form__inputs__course__checkbox__check"
                  checked={isChecked1}
                  name="course"
                  value={true}
                  type="checkbox"
                  {...register("course")}
                  onChange={handleChanged1}
                />
                <label
                  className="form__inputs__course__checkbox__label"
                  htmlFor="course"
                >
                  Gói học 1 năm
                </label>
              </div>
              <div className="form__inputs__course__checkbox__2">
                <input
                  className="form__inputs__course__checkbox__check"
                  checked={isChecked2}
                  name="course"
                  value={true}
                  type="checkbox"
                  {...register("course")}
                  onChange={handleChanged2}
                />
                <label
                  className="form__inputs__course__checkbox__label"
                  htmlFor="course"
                >
                  Gói trọn đời
                </label>
              </div>
            </div>
            <p className="form__inputs__course__error">
              {errors.course?.message}
            </p>
            {isChecked1 ? (
              <p className="form__inputs__course__price">Giá: 989.000 VND</p>
            ) : (
              ""
            )}
            {isChecked2 ? (
              <p className="form__inputs__course__price">Giá: 1.995.000 VND</p>
            ) : (
              ""
            )}
          </section>

          <button className="form__inputs__button">GỬI ĐĂNG KÝ</button>
        </form>
      </div>
    </div>
  );
};
export default FormRegister;
