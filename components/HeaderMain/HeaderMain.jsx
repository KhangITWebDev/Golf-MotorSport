import React from "react";
import styles from "./headerMain.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function HeaderMain(props) {
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
  const router = useRouter();
  return (
    <div className={styles.header}>
      <div className={"d-flex main" + " " + styles.header_content}>
        <div
          className={styles.logo}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <Image alt="logo" src="/images/Logo/Logo11.png" layout="fill" />
        </div>
        <div className={styles.menu_list + " " + "d-flex"}>
          <Link href="/golf/course">
            <a className={styles.link}>Golf</a>
          </Link>
          <Link href="/motorsport">
            <a className={styles.link}>Motorsport</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>
              <i className="fal fa-search"></i>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.link}>
              <i className="fal fa-user"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
