import React from "react";
import styles from "./headerGoft.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function HeaderGoft(props) {
  const router = useRouter();
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
          <Link href="/golf">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/golf/news">
            <a className={[styles.link, styles.dropdown].join(" ")}>
              <span>News</span>
              <i className="far fa-chevron-down"></i>
              <ul className={styles.dropdown_menu}>
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/")}
                >
                  Car Racing
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  Racers
                </li>
                <li className={styles.dropdown_item_3}>Item 3</li>
              </ul>
            </a>
          </Link>
          <Link href="/golf/tour">
            <a
              className={[styles.link, styles.dropdown].join(" ")}
              // onClick={(e) => e.preventDefault()}
            >
              <span>Tour</span>
              <i className="far fa-chevron-down"></i>
              <ul className={styles.dropdown_menu}>
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/")}
                >
                  Car Racing
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  Racers
                </li>
                <li className={styles.dropdown_item_3}>Item 3</li>
              </ul>
            </a>
          </Link>
          <Link href="/">
            <a
              className={[styles.link, styles.dropdown].join(" ")}
              onClick={(e) => e.preventDefault()}
            >
              <span>Video</span>
              <i className="far fa-chevron-down"></i>
              <ul className={styles.dropdown_menu}>
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/")}
                >
                  Car Racing
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  Racers
                </li>
                <li className={styles.dropdown_item_3}>Item 3</li>
              </ul>
            </a>
          </Link>
          <Link href="/academy/course">
            <a className={[styles.link, styles.dropdown].join(" ")}>
              <span>Academy</span>
              <i className="far fa-chevron-down"></i>
              <ul className={styles.dropdown_menu}>
                <li
                  className={styles.dropdown_item_1}
                  onClick={() => router.push("/")}
                >
                  Car Racing
                </li>
                <li
                  className={styles.dropdown_item_2}
                  onClick={() => router.push("/motorsport/racers")}
                >
                  Racers
                </li>
                <li className={styles.dropdown_item_3}>Item 3</li>
              </ul>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.link}>
              <i className={" " + "fal fa-search"}></i>
            </a>
          </Link>
          <Link href="/">
            <a className={styles.link}>
              <i className={"fal fa-user"}></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderGoft;
