import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Booking.module.scss";
import $ from "jquery";
import moment from "moment/moment";
import { convertDate } from "../../utils/function";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Alert } from "react-bootstrap";
import { Steps } from "rsuite";
import { useRouter } from "next/router";

const PHONE_REGEX = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(10, "Phone must be at more 9 characters")
    .max(12, "Phone must be at least 12 characters")
    .matches(PHONE_REGEX, "This phone is not valid"),
  email: yup
    .string()
    .email("This email is not valid")
    .required("Email is required"),
});

const ListTime = [
  {
    value: 1,
    label: "15:00",
  },
  {
    value: 2,
    label: "16:00",
  },
  {
    value: 3,
    label: "17:00",
  },
  {
    value: 4,
    label: "18:00",
  },
];

function Booking(props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
    reset: reset2,
    formState: { errors: errors2 },
  } = useForm();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const selectedDate = convertDate(startDate).getDateWithMonthFull;
  const [selectedTime, setSelectedTime] = useState(0);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("success");
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
  };
  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  const onSubmit = (data) => {
    onNext();
  };
  const onSubmit2 = (data) => {
    onNext();
  };
  return (
    <div className={styles.booking_page} id="Booking">
      <div className="container">
        <Steps current={step} currentStatus={status}>
          <Steps.Item title={step === 0 ? "Address" : "Success"} />
          <Steps.Item title={step <= 1 ? "Date & Time" : "Success"} />
          <Steps.Item title={step <= 2 ? "Confirmation" : "Success"} />
          <Steps.Item title={step <= 3 ? "Check Information" : "Sucess"} />
        </Steps>
      </div>
      {step === 0 && (
        <div className="d-flex col-12">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <div className={styles.content}>
              <h1>BOOKING</h1>
              <p>
                Are you looking for a quality and professional golf learning
                place?The GOLF course at LIO Golf Academy will help you with
                that!!
              </p>
              <form onSubmit={handleSubmit2(onSubmit2)}>
                <div className={styles.form}>
                  <div
                    className={
                      "d-flex w-100 justify-content-between" +
                      " " +
                      styles.input
                    }
                  >
                    <input
                      type="text"
                      placeholder="Enter the address you want to book"
                      className="w-100"
                      {...register2("address", { required: true })}
                    />
                    <button>
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                    </button>
                  </div>
                  {errors2?.address && (
                    <Alert variant="danger">
                      Plase enter address you want booking
                    </Alert>
                  )}
                </div>
                <button className={styles.button}>Search</button>
              </form>
            </div>
          </div>
          <div className={"col-6" + " " + styles.banner}>
            <Image
              alt="Booking banner"
              src="/images/Booking/bookingbanner.png"
              layout="fill"
            />
          </div>
        </div>
      )}
      {step === 1 && (
        <div className="container">
          <div className={styles.time}>
            <div className="heading">
              <h2>Time</h2>
              <div className="line" style={{ width: "100%" }}></div>
            </div>
            <div className={"d-flex" + " " + styles.time_content}>
              <div className={"col-8" + " " + styles.calendar}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  monthsShown={2}
                  minDate={moment().toDate()}
                  shouldCloseOnSelect={false}
                  open={true}
                />
              </div>
              <div className="col-4">
                <div className={styles.header + " " + "text-center"}>
                  {selectedDate}
                </div>
                <div className={"col-6 m-auto" + " " + styles.select_time}>
                  {ListTime.map((item, index) => (
                    <div
                      key={index}
                      className={styles.item}
                      onClick={() => setSelectedTime(index)}
                      style={{
                        borderColor: selectedTime === index && "#F8AB0C",
                      }}
                    >
                      <i className="fa-light fa-clock"></i>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="button d-flex justify-content-center">
                  <button onClick={() => setStep(3)}>CONTINUE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="container">
          <div className={styles.confirm}>
            <div className="heading">
              <h2>CONFIRMATION</h2>
              <div className="line" style={{ width: "60%" }}></div>
            </div>
            <div className="col-8 m-auto">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" {...register("name")} />
                {errors?.name && (
                  <Alert variant="danger">{errors?.name?.message}</Alert>
                )}
                <input type="text" placeholder="Phone" {...register("phone")} />

                {errors?.phone && (
                  <Alert variant="danger">{errors?.phone?.message}</Alert>
                )}
                <input type="text" placeholder="Email" {...register("email")} />
                {errors?.email && (
                  <Alert variant="danger">{errors?.email?.message}</Alert>
                )}
                <div className="button d-flex justify-content-center">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="container m-auto">
          <div className={styles.info}>
            <div className="heading">
              <h2>INFOMATION BOOKING</h2>
              <div className="line" style={{ width: "40%" }}></div>
            </div>
            <div className={styles.content + " " + "w-100"}>
              <div className={styles.header}>
                <h5 className="text-center">YOUR BOOKING HAS BEEN CONFIRMED</h5>
              </div>
              <div className={styles.info}>
                <div className="d-flex align-items-start col-10 m-auto">
                  <div
                    className={
                      "col-3 d-flex flex-column justify-content-start" +
                      " " +
                      styles.left
                    }
                  >
                    <h6>Your Sooking:</h6>
                    <h6>Attendees:</h6>
                    <h6>When:</h6>
                    <h6>Timezone:</h6>
                    <h6>Location:</h6>
                    <h6>Description:</h6>
                  </div>
                  <div
                    className={
                      "col-9 d-flex flex-column justify-content-start" +
                      " " +
                      styles.right
                    }
                  >
                    <h6>LIO Academy</h6>
                    <h6>{watch("name")}</h6>
                    <h6>
                      {`${convertDate(startDate).w}, ${
                        ListTime[selectedTime].label
                      }, ${convertDate(startDate).getDateMonthYear}`}
                    </h6>
                    <h6>Vietnam</h6>
                    <h6>{watch2("address")}</h6>
                    <h6>
                      Name: {watch("name")} <br />
                      Phone: {watch("phone")} <br />
                      Email: {watch("email")}
                    </h6>
                  </div>
                </div>
                <div className="button d-flex justify-content-center">
                  <button onClick={() => setStep(step + 1)}>
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div
          className={
            "container d-flex justify-content-center" +
            " " +
            styles.booking_tool
          }
        >
          <div className={styles.btn_continute}>
            <button onClick={() => router.push("/academy")}>
              <i className="fa-light fa-arrow-left"></i> Back to course
            </button>
          </div>
          <div className={styles.btn_check_order}>
            <button>
              Check Booking Order <i className="fa-light fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
