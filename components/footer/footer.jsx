import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./footer.module.scss";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={"containers"}>
        <div
          className={styles.logo_list + " " + "d-flex justify-content-between"}
        >
          <div className={styles.logo}>
            <Image
              alt="logo"
              src="/images/Logo/Logo11.png"
              width={200}
              height={136}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="logo"
              src="/images/Logo/Logo12.png"
              width={200}
              height={136}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="logo"
              src="/images/Logo/Logo13.png"
              width={200}
              height={136}
            />
          </div>
          <div className={styles.logo}>
            <Image
              alt="logo"
              src="/images/Logo/Logo11.png"
              width={200}
              height={136}
            />
          </div>
        </div>
        <div
          className={styles.menu_list + " " + "d-flex justify-content-between"}
        >
          <Link href="/">
            <a className={styles.link}>Terms of Service</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Privacy Policy</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Accessibility Statement</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Cookie Choices</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Tournament Tickets</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Careers</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Contact Us</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Sitemap</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Media</a>
          </Link>
        </div>
        <p className={styles.copy_right}>
          © 2022 PGA TOUR, Inc | All Rights Reserved
        </p>
        <p className={styles.footer_desc}>
          PGA TOUR, PGA TOUR Champions, and the Swinging Golfer design are
          registered trademarks. The Korn Ferry trademark is also a registered
          trademark, and is used in the Korn Ferry Tour logo with permission.
        </p>
        <div
          className={
            styles.social + " " + "d-flex flex-column align-items-center"
          }
        >
          <h5 className={styles.heading}>CONNECT WITH THE PGA TOUR ON</h5>
          <div className={styles.social_list}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
