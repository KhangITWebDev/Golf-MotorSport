import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  getLocalStorage,
  LOCAL_STORAGE,
  setLocalStorage,
} from "../../../utils/handleStorage";
import styles from "./SignIn.module.scss";

function SignIn(props) {
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("This email is not valid")
      .required("Email is required"),
    phone: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const listUser = getLocalStorage(LOCAL_STORAGE.USERS);
  const findIndexEmail = listUser.findIndex((x) => x.email === watch("email"));
  const findPhone = listUser[findIndexEmail]?.phone === watch("phone");
  const onSubmit = (data) => {
    if (findIndexEmail >= 0 && findPhone) {
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "Success",
        html: "Login success! Plase await <span></span>s",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("span");
          timerInterval = setInterval(() => {
            b.textContent = Math.floor(Swal.getTimerLeft() / 1000);
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          setLocalStorage(LOCAL_STORAGE.USER_LOGIN, data);
          router.push("/profile");
        },
      });
      reset({
        email: "",
        phone: "",
      });
    } else {
      Swal.fire({
        title: "Fail",
        icon: "error",
        text: "Plase check your email or phone",
        focusConfirm: false,
        confirmButtonColor: "#0B2B20",
        confirmButtonText: "Ok",
      });
    }
  };
  return (
    <div className={styles.sign_up_page + " " + "container"} id="SignIn">
      <div className="heading">
        <h2>Sign In</h2>
        <div className="line" style={{ width: "100%" }}></div>
      </div>
      <div
        className={
          "m-auto col-8 d-flex justify-content-center" + " " + styles.content
        }
      >
        <div className={"col-6" + " " + styles.image}>
          <Image
            alt="Image"
            src="/images/Academy/SignIn/banner.png"
            layout="fill"
          />
        </div>
        <div className={"col-6" + " " + styles.form}>
          <h5>Form</h5>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email" {...register("email")} />
            {errors?.email && (
              <Alert variant="danger">{errors?.email?.message}</Alert>
            )}
            <input type="text" placeholder="Phone" {...register("phone")} />
            {errors?.phone && (
              <Alert variant="danger">{errors?.phone?.message}</Alert>
            )}
            <div className={styles.list_checkBox}>
              <div className={styles.item}>
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
            </div>
            <div
              className={styles.button + " " + "d-flex justify-content-center"}
            >
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
