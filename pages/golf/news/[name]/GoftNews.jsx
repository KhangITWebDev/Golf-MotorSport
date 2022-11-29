import React from "react";
import styles from "./GoftNews.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

function GoftNews(props) {
  const router = useRouter();
  return (
    <div className={styles.goft_news}>
      <div className={styles.banner}>
        <Image
          alt="Banner Bottom"
          src="/images/Home/GoftTour/bannerbottom.png"
          layout="fill"
        />
      </div>
      <div className={styles.goft_news_detail}>
        <div
          className={
            styles.box_title +
            " " +
            "d-flex justify-content-between align-items-center"
          }
        >
          <div className={styles.left}>
            <h4>2022-23 Rookie Ranking</h4>
            <div className="d-flex flex-column">
              <span>
                October 30, 2022 <br /> By Rob Bolton , PGATOUR.COM
              </span>
            </div>
          </div>
          <div className={styles.right}>
            <Image
              alt="Image"
              src="/images/Golf/News/img1.png"
              width={300}
              height={231}
            />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.picture}>
              <Image
                alt="Image"
                src="/images/Golf/News/img_info.png"
                layout="fill"
              />
            </div>
            <p>
              Thomas Detry finished runner-up in Bermuda, the best finish by any
              rookie this season. (Andy Lyons/Getty Images)
            </p>
            <div>
              <p>
                The Rookie Ranking for the 2022-23 PGA TOUR season has been
                transitioned into a thread on my Twitter account. Every
                tournament’s mini-recap will be accompanied by a table of my
                subjective ranking of all 28 rookies. <br />
                Also, as I did with Rookie Watch during the super season of
                2020-21, I’m also tracking notable non-members in a separate
                thread on Twitter. <br />
                My latest tweets are visible below. If you click or tap on
                either, it will take you directly to his original. <br />
                The Rookie Ranking for the 2022-23 PGA TOUR season has been
                transitioned into a thread on my Twitter account. Every
                tournament’s mini-recap will be accompanied by a table of my
                subjective ranking of all 28 rookies. <br />
                Also, as I did with Rookie Watch during the super season of
                2020-21, I’m also tracking notable non-members in a separate
                thread on Twitter. <br />
                My latest tweets are visible below. If you click or tap on
                either, it will take you directly to his original. <br />
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.related}></div>
            <div className={styles.banner}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoftNews;
