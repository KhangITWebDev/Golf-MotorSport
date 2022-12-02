import React, { useState } from "react";
import styles from "./headerMain.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

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
  const [show, setShow] = useState(false);
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.header_menu}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={() => router.push("/academy")}
                >
                  Golf
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  variant="default"
                  id="dropdown-cafe"
                  onClick={commingSoon}
                >
                  Motosport
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-cafe">
                  <i className="fal fa-search"></i>
                </Dropdown.Toggle>
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
