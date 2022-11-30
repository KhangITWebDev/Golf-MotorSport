import React from "react";
import styles from "./headerAcademy.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

function HeaderAcademy(props) {
  const router = useRouter();
  const commingSoon = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Comming Soon",
      text: "We are comming soon",
      icon: "warning",
      showCancelButton: false,
      confirmButtonText: "OK",
    });
  };
  return (
    <div className={styles.header}>
      <div className={"main d-flex" + " " + styles.header_content}>
        <div
          className={styles.logo}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image alt="logo" src="/images/Logo/Logo11.png" layout="fill" />
        </div>
        <div className={styles.menu_list + " " + "d-flex"}>
          <Link href="/golf/course">
            <a className={styles.link}>COURSE</a>
          </Link>
          <Link href="/goft/booking">
            <a onClick={commingSoon} className={styles.link}>
              BOOKING
            </a>
          </Link>
          <Link href="/golf">
            <a className={styles.link}>NEWS</a>
          </Link>
          <Link href="/">
            <a className={styles.link} onClick={commingSoon}>
              <i className="fal fa-search"></i>
            </a>
          </Link>
          {/* <Link href="/">
            <a
              className={[styles.link, styles.dropdown].join(" ")}
              onClick={(e) => e.preventDefault()}
            >
              <span>
                <i className="fal fa-user-alt"></i>
              </span>
              <ul
                className={[styles.dropdown_menu, styles.dropdown_user].join(
                  " "
                )}
              >
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/")}
                >
                  <span>Hello,</span>
                  <span>vinhnguyen@fostech.vn</span>
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  MANAGE PROFILE
                </li>
                <li
                  className={styles.dropdown_item_3}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  NOTIFICATION SETTINGS
                </li>
                <li
                  className={styles.dropdown_item_4}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  FAVORITE PLAYERS
                </li>
                <li
                  className={styles.dropdown_item_5}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  CHANGE PASSWORD
                </li>
                <li
                  className={styles.dropdown_item_6}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  LOGOUT
                </li>
              </ul>
            </a>
          </Link> */}
          <Link href="/">
            <a
              className={[styles.link, styles.dropdown].join(" ")}
              onClick={(e) => e.preventDefault()}
            >
              <span>
                <i className="fal fa-user-alt"></i>
              </span>
              <ul
                className={[styles.dropdown_menu, styles.dropdown_user].join(
                  " "
                )}
              >
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/golf/sign-up")}
                >
                  Sign Up
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/golf/sign-in")}
                >
                  Sign In
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderAcademy;
