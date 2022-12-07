import React, { useState } from "react";
import styles from "./headerAcademy.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

function HeaderAcademy(props) {
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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div>
      <Navbar
        expand="lg"
        id="navbar_menu"
        fixed="top"
        className={styles.header}
      >
        <Container className={styles.header_content}>
          <div
            className={styles.logo}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            <Image alt="logo" src="/images/Logo/Logo11.png" layout="fill" />
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navToggle}
          >
            <i
              className="fal fa-bars"
              color="#fff"
              style={{ fontSize: 28 }}
            ></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.header_menu}>
              <Dropdown>
                <Dropdown.Toggle
                  onClick={() => router.push("/academy")}
                  variant="default"
                  id="dropdown-cafe"
                >
                  Course
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={() => router.push("/booking")}
                >
                  Booking
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={() => router.push("/golf")}
                >
                  News
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown
                show={true}
                onMouseEnter={() => setShow1(!show1)}
                onMouseLeave={() => setShow1(false)}
              >
                <Dropdown.Toggle variant="default" id="dropdown-cafe">
                  <i className="fal fa-search"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  aria-labelledby="dropdown-user"
                  id="dropdown_end"
                >
                  <div className={"d-flex w-100" + " " + styles.box_search}>
                    <input type="text" placeholder="Enter key word" />
                    <button onClick={commingSoon}>
                      <i className="fa-light fa-search"></i>
                    </button>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <Dropdown.Toggle variant="default" id="dropdown-user">
                  <i className="fal fa-user-alt"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  aria-labelledby="dropdown-user"
                  id="dropdown_end"
                >
                  <Dropdown.Item
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/academy/sign-up");
                    }}
                  >
                    Sign Up
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/academy/sign-in");
                    }}
                  >
                    Sign In
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderAcademy;
