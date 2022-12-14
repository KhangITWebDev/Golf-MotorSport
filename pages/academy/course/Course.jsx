import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Alert } from "react-bootstrap";
import { Button, Loader, Modal, Placeholder } from "rsuite";
import {
  CourseData,
  LocationData,
} from "../../../utils/DataDemo/Academy/dataAcademyPage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Course.module.scss";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getLocalStorage, LOCAL_STORAGE } from "../../../utils/handleStorage";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsersData } from "../../../store/redux/DemoReducer/demo.action";

function Course(props) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
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

  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.DemoReducer.usersList) || [];
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  const findIndexEmail = listUser.findIndex((x) => x.email === watch("email"));
  const formatPhone =
    watch("phone")?.length > 0 && watch("phone")?.indexOf("84") === 0
      ? watch("phone")?.replace("84", "0")
      : watch("phone")?.indexOf("+84") === 0
      ? watch("phone")?.replace("+84", "0")
      : watch("phone");
  const findPhone = listUser[findIndexEmail]?.phone === formatPhone;
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
          Cookies.set("user-login", JSON.stringify(data));
          router.push("/pricing");
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
  const userLogin = JSON.parse(Cookies.get(LOCAL_STORAGE.USER_LOGIN) || "{}");
  const handleEntered = () => {
    setTimeout(() => setRows(80), 2000);
  };
  const handleOpen = () => {
    if (userLogin.email && userLogin.phone) {
      router.push("/pricing");
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.course_page}>
      <div className={[styles.banner, styles.full].join(" ")}>
        <Image
          alt="Banner"
          layout="fill"
          src="/images/Academy/Course/banner.png"
        />
        <div className={styles.content}>
          <div
            className="container m-auto d-flex 
          flex-column align-items-center"
          >
            <h2 className="text-center">KHO?? H???C GOLF</h2>
            <button onClick={() => router.push("/academy/sign-up")}>
              ????NG K??
            </button>
          </div>
        </div>
      </div>
      <div className={styles.golf_options + " " + "container"}>
        <div className={styles.header}>
          <h5>H???C GOLF B??I B???N C??NG CHUY??N GIA</h5>
          <p>
            D?? b???n l?? ng?????i m???i b???t ?????u t??m hi???u, hay ng?????i ch??i Golf mu???n n??ng
            cao tr??nh ?????. The Golf House lu??n c?? l??? tr??nh ph?? h???p cho b???n!
          </p>
        </div>
        <div
          className={
            styles.list + " " + "d-flex flex-wrap justify-content-center"
          }
        >
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options1.png"
                layout="fill"
              />
            </div>
          </div>
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options2.png"
                layout="fill"
              />
            </div>
          </div>
          <div className={"col-6 col-md-4" + " " + styles.item}>
            <div className={styles.image}>
              <Image
                alt="Image"
                src="/images/Academy/Course/options3.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <p>
            H???c vi???n The Golf House Vi???t Nam (TGH) ???????c th??nh l???p v??o th??ng 3
            n??m 2022 v???i s??? m???nh mang l???i gi?? tr??? cho nh???ng ng?????i ??am m?? Golf v??
            x??y d???ng c???ng ?????ng Golfer Vi???t Nam. TGH cung c???p ch????ng tr??nh gi???ng
            d???y b??i b???n theo ti??u chu???n PGA, ??a d???ng c??c g??i h???c ph???c v??? nhu c???u
            c???a h???c vi??n theo t???ng giai ??o???n, d?? l?? ng?????i m???i ch??i hay ng?????i
            ch??i golf mu???n n??ng cao k??? n??ng c???a m??nh.Sau kh??a h???c, h???c vi??n t???
            tin b?????c ra s??n khi ???????c trang b??? ?????y ????? c??c y???u t??? v??? k??? thu???t, v??n
            h??a golf v?? lu???t ch??i.Trang thi???t b??? hi???n ?????i ???ng d???ng c??ng ngh???
            ti???n ti???n nh?? h??? th???ng Sky track, m??y ph??n t??ch k??? thu???t Dr.Swing
            ph??n t??ch t???ng ?????ng t??c v???i th??ng s??? ch??nh x??c, ph???c v??? vi???c r??n
            luy???n k??? thu???t trong nh?? v???i s??? h?????ng d???n t???n t??nh c???a hu???n luy???n
            vi??n qu???c t??? gi??u kinh nghi???m gi???ng d???y v?? ch??i GolfTGH h???p t??c v???i
            h??? th???ng s??n golf v?? resort tr???i r???ng tr??n c??? n?????c, cung c???p nh???ng
            bu???i ra s??n th???c t??? v???i nhi???u d???ng ?????a h??nh s??n, n??ng cao th???c chi???n
            v?? s??? t??? tin c???a h???c vi??n. Kh??ng ch??? ????o t???o chuy??n m??n, TGH ch??
            tr???ng ph??t tri???n c???ng ?????ng khi tr??? th??nh ?????i t??c chi???n l?????c c???a c??c
            Hi???p h???i Golf t???i Vi???t Nam, ph???i h???p ????ng cai t??? ch???c c??c Gi???i ?????u
            nh?? HUBA Golf c???a Hi???p h???i Doanh nh??n TP H??? Ch?? Minh, Gi???i Best of
            the Best,...T???i The Golf House, vi???c ki???n t???o m??i tr?????ng gi??p vi???c
            h???c t???p v?? ch??i golf tr??? n??n ????n gi???n v?? hi???u qu??? nh???t lu??n l?? ??u
            ti??n h??ng ?????u c???a ch??ng t??i. TGH t???p trung x??y d???ng chu???i c??c d???ch
            v??? ??a d???ng bao g???m H???c vi???n - Pro shop - Hair, Nail & Spa - Golf 3D
            - VIP Lounge trong c??ng m???t ?????a ??i???m. Gi??p ng?????i h???c v?? ch??i Golf
            t???n d???ng th???i gian d??nh cho m??n th??? thao m??nh y??u th??ch m???t c??ch t???i
            ??u nh???t: v???a n??ng cao k??? n??ng golf, v???a th?? gi??n, v???a giao l??u v???i
            nh???ng ng?????i chung ni???m ??am m??.V???i kh???u hi???u ???Working on a new you???,
            The Golf House Vi???t Nam h??? tr??? h???c vi??n - nh???ng ng?????i y??u Golf tr???
            th??nh phi??n b???n t???t h??n c???a b???n th??n v???i l???i s???ng t??ch c???c v?? n??ng
            ?????ng.
          </p>
        </div>
        <div className="d-flex justify-content-center button">
          <button onClick={() => router.push("/academy/academy-detail")}>
            Detail
          </button>
        </div>
      </div>
      <div className={[styles.information, styles.full].join(" ")}>
        <div className={styles.list}>
          <div className={styles.item}>
            <i className="fal fa-user-alt"></i>
            <h6>Subject</h6>
            <span>Adults, children</span>
          </div>
          <div className={styles.item}>
            <i className="fal fa-clock"></i>
            <h6>Time</h6>
            <span>
              2 sessions / week;
              <br /> 3 hours / session
            </span>
          </div>
          <div className={styles.item}>
            <i className="fal fa-calendar-alt"></i>
            <h6>Sessions</h6>
            <span>
              16 sessions / semester <br /> Total 3 semesters (2 months/term)
            </span>
          </div>
          <div className={styles.item}>
            <i className="far fa-graduation-cap"></i>
            <h6>Students</h6>
            <span>10-15 students/class group</span>
          </div>
        </div>
        <div className="button d-flex justify-content-center">
          <button onClick={() => router.push("/academy/sign-up")}>
            Sign Up
          </button>
          <button onClick={() => router.push("/academy/course/course-detail")}>
            Detail
          </button>
        </div>
      </div>
      <div className={styles.fee}>
        <div className="container">
          <h2 className="text-white text-center fw-bold">TH??NG TIN KHO?? H???C</h2>
          <p className="text-white">
            TGH cung c???p ch????ng tr??nh gi???ng d???y b??i b???n theo ti??u chu???n PGA, ??a
            d???ng c??c g??i h???c ph???c v??? nhu c???u c???a h???c vi??n theo t???ng giai ??o???n,
            d?? l?? ng?????i m???i ch??i hay ng?????i ch??i golf mu???n n??ng cao k??? n??ng c???a
            m??nh. <br /> Sau kh??a h???c, h???c vi??n t??? tin b?????c ra s??n khi ???????c
            trang b??? ?????y ????? c??c y???u t??? v??? k??? thu???t, v??n h??a golf v?? lu???t ch??i.
          </p>
          <div className="d-flex justify-content-center">
            <button onClick={handleOpen}>Nh???n b??o gi??</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            onEntered={handleEntered}
            onExited={() => {
              setRows(0);
            }}
          >
            <Modal.Header>
              <Modal.Title>Login Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {rows ? (
                <>
                  <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors?.email && (
                      <Alert variant="danger">{errors?.email?.message}</Alert>
                    )}
                    <input
                      type="text"
                      placeholder="Phone"
                      {...register("phone")}
                    />
                    {errors?.phone && (
                      <Alert variant="danger">{errors?.phone?.message}</Alert>
                    )}
                  </form>
                  <div className="rs-custom-button d-flex justify-content-end">
                    <button onClick={handleSubmit(onSubmit)}>Sign In</button>
                    <button onClick={handleClose}>Cancle</button>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <Loader size="md" />
                </div>
              )}
            </Modal.Body>
          </Modal>
          <div className={"d-flex flex-wrap" + " " + styles.list}>
            {CourseData.map((item, index) => (
              <div
                key={index}
                className={
                  "col-12 col-lg-6 d-flex flex-wrap-reverse" + " " + styles.item
                }
              >
                <div className={"col-12 col-sm-6" + " " + styles.info}>
                  <hr />
                  <span
                    style={{
                      background:
                        item.cate === "Kho?? ng?????i l???n"
                          ? "#0b2b20"
                          : item.cate === "Kho?? tr??? em"
                          ? "#F8AB0C"
                          : "#C22300",
                    }}
                  >
                    {item.cate}
                  </span>
                  <h3>{item.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className={styles.desc}
                  ></div>
                  <button>????ng k?? ngay</button>
                </div>
                <div className={"col-12 col-sm-6" + " " + styles.image}>
                  <Image alt={item.title} src={item.image} layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.location + " " + "container"}>
        <div className="heading">
          <h2>V??? TR??</h2>
          <div className="line" style={{ width: "100%" }}></div>
        </div>
        <div
          className={
            "d-flex flex-wrap justify-content-between justify-content-md-center" +
            " " +
            styles.list
          }
        >
          {LocationData.map((item, index) => (
            <div
              className={"col-12 col-lg-4 col-md-6" + " " + styles.item}
              key={index}
            >
              <div className={styles.info}>
                <div className={styles.image}>
                  <Image alt="Fee" src={item.image} layout="fill" />
                </div>
                <Link href="/">
                  <a className={styles.title}>{item.title}</a>
                </Link>
                <div
                  className={styles.subTitle}
                  dangerouslySetInnerHTML={{ __html: item.subTitle }}
                ></div>
                <div className="button d-flex justify-content-center">
                  <button>V??? tr??</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.coach + " " + "container"}>
        <div className="heading">
          <h2>?????I NG?? HU???N LUY???N</h2>
          <div className="line" style={{ width: "25%" }}></div>
        </div>
        <div
          className={
            "d-flex flex-wrap flex-column-reverse flex-lg-row" +
            " " +
            styles.top
          }
        >
          <div className={"col-12 col-lg-8" + " " + styles.content}>
            <h3>
              TEAM OF PROFESSIONAL COACHES
              <br />
              <span>LED BY THE HEAD COACH OF VIETNAM NATIONAL GOLF TEAM</span>
            </h3>
            <h4>NGUYEN GIA BAO</h4>
            <h5>Founder of | Head coaches</h5>
            <p>
              + Coach Nguyen Thai Duong is the head coach leading the Vietnam
              National Golf team to attend the SEA Games 2022.
            </p>
            <p>
              + More than 20 years of experience competing in Gold in many
              countries
            </p>
            <p>
              + Achieved countless awards: Southeast Asian Youth Championship
              2005, Australian Open Youth Championship 2007, National Fighting
              Championship 2010...{" "}
            </p>
            <p>
              + As the person who directly built the entire curriculum of based
              on international golf textbooks, it has been optimized to suit the
              physical condition and physique of Vietnamese people.
            </p>
            <p>+ Responsible for the quality of every course.</p>
          </div>
          <div className="col-12 col-lg-4">
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach.png"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div
          className={
            styles.coach_list +
            " " +
            "d-flex flex-wrap justify-content-between justify-content-md-center"
          }
        >
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach1.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 1</span>
              </a>
            </Link>
          </div>
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach2.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 2</span>
              </a>
            </Link>
          </div>
          <div className={styles.item + " " + "col-12 col-lg-4 col-md-6"}>
            <div className={styles.image}>
              <Image
                alt="Coach"
                src="/images/Academy/Course/coach3.png"
                layout="fill"
              />
            </div>
            <Link href="/">
              <a className={styles.name}>
                Name <br /> <span>Coach 3</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.contact + " " + "container"}>
        <div className="heading">
          <h2>LI??N H???</h2>
          <div className="line" style={{ width: "80%" }}></div>
        </div>
        <div className={"col-12 col-md-10 col-lg-6 m-auto" + " " + styles.form}>
          <form action="">
            <input type="text" placeholder="H??? t??n" />
            <input type="text" placeholder="S??? ??i???n tho???i" />
            <input type="text" placeholder="Email" />
            <textarea type="" rows={5} placeholder="Ghi ch??" />
            <div className="button d-flex justify-content-center">
              <button>G???i</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Course;
