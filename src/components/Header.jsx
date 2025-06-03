"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// import {useEffect, useState} from "react";
// import ApiService from "@/services/api.service";
// import {Dropdown, Fade, Form, FormControl} from "react-bootstrap";
// import {useRouter} from "next/navigation";
// import {useAuth} from "@/context/AuthContext";
// import Auth from "@/components/auth";

export default function Header() {

    return (
        <header className={'main-header position-relative wow animate__animated animate__fadeIn'}>
            <div className={'top-header py-3'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'h-mail'}>
                                <a className={'d-inline-flex gap-2 text-white align-items-center'}
                                   href={'tel:9875665856'}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.15312 0.768751C4.9125 0.187501 4.27812 -0.121874 3.67188 0.0437508L0.921875 0.793751C0.378125 0.943751 0 1.4375 0 2C0 9.73125 6.26875 16 14 16C14.5625 16 15.0563 15.6219 15.2063 15.0781L15.9563 12.3281C16.1219 11.7219 15.8125 11.0875 15.2312 10.8469L12.2312 9.59688C11.7219 9.38438 11.1313 9.53125 10.7844 9.95938L9.52188 11.5C7.32188 10.4594 5.54063 8.67813 4.5 6.47813L6.04063 5.21875C6.46875 4.86875 6.61562 4.28125 6.40312 3.77188L5.15312 0.771876V0.768751Z"
                                            fill="white"/>
                                    </svg>
                                    +91 98756 65856
                                </a>
                            </div>
                        </div>
                        <div className={'col-12 col-sm-6'}>
                            <div className={'h-mail text-end'}>
                                <a className={'d-inline-flex gap-2 align-items-center text-white'}
                                   href={'mailto:info@thermwinsystemwindows.com'}>

                                    info@thermwinsystemwindows.com
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z"
                                            fill="white"/>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar.Brand className={'logo animate__animated animate__fadeInLeft'} href="/">
                <img
                    className={'img-fluid'}
                    src="/img/logo.svg"
                    alt="img" width={'100%'}/>
            </Navbar.Brand>

            <Navbar className={'position-relative'} collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="Products" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href={`/`}>
                                    Products 1
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/project">Projects</Nav.Link>
                            <Nav.Link href="/career">Career</Nav.Link>
                            <Nav.Link href="/contact">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>


                    <div className={'mid-head-cart header-social'}>


                        <a href={'/'}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.5413 8.875L11.9043 6.34133H9.63467V4.69715C9.63467 4.00398 9.95172 3.32832 10.9682 3.32832H12V1.17117C12 1.17117 11.0637 1 10.1684 1C8.29936 1 7.07764 2.21352 7.07764 4.41031V6.34133H5V8.875H7.07764V15H9.63467V8.875H11.5413Z"
                                    fill="#1C233A"/>
                            </svg>
                        </a>
                        <a href={'/'}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.00547 4.40635C6.01797 4.40635 4.41484 6.00947 4.41484 7.99697C4.41484 9.98447 6.01797 11.5876 8.00547 11.5876C9.99297 11.5876 11.5961 9.98447 11.5961 7.99697C11.5961 6.00947 9.99297 4.40635 8.00547 4.40635ZM8.00547 10.3313C6.72109 10.3313 5.67109 9.28447 5.67109 7.99697C5.67109 6.70947 6.71797 5.6626 8.00547 5.6626C9.29297 5.6626 10.3398 6.70947 10.3398 7.99697C10.3398 9.28447 9.28984 10.3313 8.00547 10.3313ZM12.5805 4.25947C12.5805 4.7251 12.2055 5.09697 11.743 5.09697C11.2773 5.09697 10.9055 4.72197 10.9055 4.25947C10.9055 3.79697 11.2805 3.42197 11.743 3.42197C12.2055 3.42197 12.5805 3.79697 12.5805 4.25947ZM14.9586 5.10947C14.9055 3.9876 14.6492 2.99385 13.8273 2.1751C13.0086 1.35635 12.0148 1.1001 10.893 1.04385C9.73672 0.978223 6.27109 0.978223 5.11484 1.04385C3.99609 1.09697 3.00234 1.35322 2.18047 2.17197C1.35859 2.99072 1.10547 3.98447 1.04922 5.10635C0.983594 6.2626 0.983594 9.72822 1.04922 10.8845C1.10234 12.0063 1.35859 13.0001 2.18047 13.8188C3.00234 14.6376 3.99297 14.8938 5.11484 14.9501C6.27109 15.0157 9.73672 15.0157 10.893 14.9501C12.0148 14.897 13.0086 14.6407 13.8273 13.8188C14.6461 13.0001 14.9023 12.0063 14.9586 10.8845C15.0242 9.72822 15.0242 6.26572 14.9586 5.10947ZM13.4648 12.1251C13.2211 12.7376 12.7492 13.2095 12.1336 13.4563C11.2117 13.822 9.02422 13.7376 8.00547 13.7376C6.98672 13.7376 4.79609 13.8188 3.87734 13.4563C3.26484 13.2126 2.79297 12.7407 2.54609 12.1251C2.18047 11.2032 2.26484 9.01572 2.26484 7.99697C2.26484 6.97822 2.18359 4.7876 2.54609 3.86885C2.78984 3.25635 3.26172 2.78447 3.87734 2.5376C4.79922 2.17197 6.98672 2.25635 8.00547 2.25635C9.02422 2.25635 11.2148 2.1751 12.1336 2.5376C12.7461 2.78135 13.218 3.25322 13.4648 3.86885C13.8305 4.79072 13.7461 6.97822 13.7461 7.99697C13.7461 9.01572 13.8305 11.2063 13.4648 12.1251Z"
                                    fill="#1C233A"/>
                            </svg>
                        </a>
                        <a href={'/'}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.13438 15H1.23125V5.65312H4.13438V15ZM2.68125 4.37812C1.75312 4.37812 1 3.60938 1 2.68125C1 2.23535 1.17713 1.80772 1.49243 1.49243C1.80772 1.17713 2.23535 1 2.68125 1C3.12715 1 3.55478 1.17713 3.87007 1.49243C4.18537 1.80772 4.3625 2.23535 4.3625 2.68125C4.3625 3.60938 3.60938 4.37812 2.68125 4.37812ZM14.9969 15H12.1V10.45C12.1 9.36562 12.0781 7.975 10.5906 7.975C9.08125 7.975 8.85 9.15312 8.85 10.3719V15H5.95V5.65312H8.73438V6.92812H8.775C9.1625 6.19375 10.1094 5.41875 11.5219 5.41875C14.4594 5.41875 15 7.35313 15 9.86563V15H14.9969Z"
                                    fill="#1C233A"/>
                            </svg>
                        </a>

                    </div>
                </Container>

            </Navbar>

        </header>
    )
}
