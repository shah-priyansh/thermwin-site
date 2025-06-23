"use client";


export default function Footer() {

    return (
        <footer className={'main-footer wow animate__animated animate__fadeInUp'}>
            <div className={'top-footer overflow-hidden'}>
                <div className={'row'}>
                    <div className={'col-6'}>
                        <a className={'text-primary'} href={'/project'}>See Our Installations</a>
                    </div>
                    <div className={'col-6'}>
                        <a className={'bg-primary text-white'} href={'/contact'}>Request a Free Quote</a>
                    </div>
                </div>
            </div>
            <div className={'middle-footer'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-3 mb-3'}>
                            <div className={'footer-box'}>
                                <h4>Product</h4>
                                <div className={'footer-link mb-4'}>
                                    <a href={'/vran-series'}>Sliding System</a>
                                    <a href={'/arch'}>Openable System</a>
                                    <a href={'/thermwin-rin'}>Thermal System</a>
                                </div>
                                <div className={'section-btn-div'}>
                                    <a href={'/img/thermwin.pdf'} target={'_blank'} className={'btn btn-default'} download><span>Download Brochure</span></a>
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-3 mb-3'}>
                            <div className={'footer-box'}>
                                <h4>Navigation</h4>
                                <div className={'footer-link mb-4'}>
                                    <a href={'/'}> Home</a>
                                    <a href={'/about'}> About Us</a>
                                    <a href={'/project'}> Our Projects</a>
                                    <a href={'/career'}> Career</a>
                                    <a href={'/contact'}> Contact Us</a>
                                    <a href={'#'}> Privacy Policy</a>
                                    <a href={'#'}> Cookies Policy</a>
                                </div>

                            </div>
                        </div>
                        <div className={'col-md-3 mb-3'}>
                            <div className={'footer-box'}>
                                <h4>contact</h4>
                                <div className={'footer-link mb-4'}>
                                    <h5>+91 815 480 4766</h5>
                                    <p>thermwinsystems@gmail.com</p>
                                </div>
                                <div className={'header-social pt-5'}>

                                    <a href={'#'} target={'_blank'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.5413 8.875L11.9043 6.34133H9.63467V4.69715C9.63467 4.00398 9.95172 3.32832 10.9682 3.32832H12V1.17117C12 1.17117 11.0637 1 10.1684 1C8.29936 1 7.07764 2.21352 7.07764 4.41031V6.34133H5V8.875H7.07764V15H9.63467V8.875H11.5413Z"
                                                fill="#1C233A" />
                                        </svg>
                                    </a>
                                    <a href={'#'} target={'_blank'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.00547 4.40635C6.01797 4.40635 4.41484 6.00947 4.41484 7.99697C4.41484 9.98447 6.01797 11.5876 8.00547 11.5876C9.99297 11.5876 11.5961 9.98447 11.5961 7.99697C11.5961 6.00947 9.99297 4.40635 8.00547 4.40635ZM8.00547 10.3313C6.72109 10.3313 5.67109 9.28447 5.67109 7.99697C5.67109 6.70947 6.71797 5.6626 8.00547 5.6626C9.29297 5.6626 10.3398 6.70947 10.3398 7.99697C10.3398 9.28447 9.28984 10.3313 8.00547 10.3313ZM12.5805 4.25947C12.5805 4.7251 12.2055 5.09697 11.743 5.09697C11.2773 5.09697 10.9055 4.72197 10.9055 4.25947C10.9055 3.79697 11.2805 3.42197 11.743 3.42197C12.2055 3.42197 12.5805 3.79697 12.5805 4.25947ZM14.9586 5.10947C14.9055 3.9876 14.6492 2.99385 13.8273 2.1751C13.0086 1.35635 12.0148 1.1001 10.893 1.04385C9.73672 0.978223 6.27109 0.978223 5.11484 1.04385C3.99609 1.09697 3.00234 1.35322 2.18047 2.17197C1.35859 2.99072 1.10547 3.98447 1.04922 5.10635C0.983594 6.2626 0.983594 9.72822 1.04922 10.8845C1.10234 12.0063 1.35859 13.0001 2.18047 13.8188C3.00234 14.6376 3.99297 14.8938 5.11484 14.9501C6.27109 15.0157 9.73672 15.0157 10.893 14.9501C12.0148 14.897 13.0086 14.6407 13.8273 13.8188C14.6461 13.0001 14.9023 12.0063 14.9586 10.8845C15.0242 9.72822 15.0242 6.26572 14.9586 5.10947ZM13.4648 12.1251C13.2211 12.7376 12.7492 13.2095 12.1336 13.4563C11.2117 13.822 9.02422 13.7376 8.00547 13.7376C6.98672 13.7376 4.79609 13.8188 3.87734 13.4563C3.26484 13.2126 2.79297 12.7407 2.54609 12.1251C2.18047 11.2032 2.26484 9.01572 2.26484 7.99697C2.26484 6.97822 2.18359 4.7876 2.54609 3.86885C2.78984 3.25635 3.26172 2.78447 3.87734 2.5376C4.79922 2.17197 6.98672 2.25635 8.00547 2.25635C9.02422 2.25635 11.2148 2.1751 12.1336 2.5376C12.7461 2.78135 13.218 3.25322 13.4648 3.86885C13.8305 4.79072 13.7461 6.97822 13.7461 7.99697C13.7461 9.01572 13.8305 11.2063 13.4648 12.1251Z"
                                                fill="#1C233A" />
                                        </svg>
                                    </a>
                                    <a href={'#'} target={'_blank'}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.13438 15H1.23125V5.65312H4.13438V15ZM2.68125 4.37812C1.75312 4.37812 1 3.60938 1 2.68125C1 2.23535 1.17713 1.80772 1.49243 1.49243C1.80772 1.17713 2.23535 1 2.68125 1C3.12715 1 3.55478 1.17713 3.87007 1.49243C4.18537 1.80772 4.3625 2.23535 4.3625 2.68125C4.3625 3.60938 3.60938 4.37812 2.68125 4.37812ZM14.9969 15H12.1V10.45C12.1 9.36562 12.0781 7.975 10.5906 7.975C9.08125 7.975 8.85 9.15312 8.85 10.3719V15H5.95V5.65312H8.73438V6.92812H8.775C9.1625 6.19375 10.1094 5.41875 11.5219 5.41875C14.4594 5.41875 15 7.35313 15 9.86563V15H14.9969Z"
                                                fill="#1C233A" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className={'col-md-3 mb-3'}>
                            <div className={'footer-box'}>
                                <h4>Location</h4>
                                <div className={'footer-link mb-4'}>
                                    <p>20, Lowerground, Sadanand Industrial Estate, Nr. Parmanand Chowk,
                                        U.M. Road, Udhna, Surat, India.</p>
                                </div>
                                <div className={'footer-logo text-end'}>
                                    <img
                                        className={'img-fluid'}
                                        src="/img/logo.svg"
                                        alt="img" width={'200'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bottom-footer bg-primary'}>
                <div className={'container'}>
                    <small className={'text-white py-4 d-block text-center'}>© 2025 Thermwin System Windows. All copyrights are
                        reserved.</small>
                </div>
            </div>
        </footer>
    )
}
