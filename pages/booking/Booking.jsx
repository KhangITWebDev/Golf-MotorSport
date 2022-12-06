import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Booking.module.scss";
import $ from "jquery";
import moment from "moment/moment";
import { convertDate } from "../../utils/function";
import Swal from "sweetalert2";

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
  const [address, setAddreess] = useState(
    "85-87 Nguyen Co Thach, An Loi Đong, Q.2, TPHCM"
  );
  const [startDate, setStartDate] = useState(new Date());
  const selectedDate = convertDate(startDate).getDateWithMonthFull;
  const [selectedTime, setSelectedTime] = useState(0);
  const [step, setStep] = useState(1);
  const ApplyBooking = () => {
    Swal.fire({
      title: "<strong>Check Your Booking</strong>",
      icon: "info",
      html: `<p>
      You have booked for ${ListTime[selectedTime].label}
      on ${convertDate(startDate).dateWithWeek} at ${address}<br />
      </p>`,
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonColor: "#AA2626",
      confirmButtonColor: "#0B2B20",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> Cancle',
      cancelButtonAriaLabel: "Thumbs down",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sucess!", "Your booked successful", "success");
      }
    });
  };
  return (
    <div className={styles.booking_page} id="Booking">
      {step === 1 && (
        <div className="d-flex col-12">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <div className={styles.content}>
              <h1>BOOKING</h1>
              <p>
                Are you looking for a quality and professional golf learning
                place?The GOLF course at LIO Golf Academy will help you with
                that!!
              </p>
              <div
                className={
                  "d-flex w-100 justify-content-between" + " " + styles.form
                }
              >
                <input
                  type="text"
                  placeholder="Enter the address you want to book"
                  className="w-100"
                  value={address}
                  onChange={(e) => setAddreess(e.target.value)}
                />
                <button>
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </button>
              </div>
              <button className={styles.button} onClick={() => setStep(2)}>
                Search
              </button>
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
      {step === 2 && (
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
                  <button onClick={ApplyBooking}>CONTINUE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
