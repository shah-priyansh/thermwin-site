"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Location() {
    const pathname = usePathname()

    return (
        <div className={'main-content'}>
            <header className={'main-header'}>
                <div className={'top-header py-2'}>
                    <div className={'container'}>
                        <div className={'row align-items-center'}>
                            <div className={'col-md-4'}>
                                <div className={'ct d-inline-flex gap-3 bg-white'}>
                                    <div className={'icn'}>
                                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.8823 18.1935C31.8823 10.4624 25.5717 4.17647 17.7647 4.17647C9.9576 4.17647 3.64701 10.4624 3.64701 18.1935C3.64701 20.2935 3.90642 21.6435 4.22583 22.6335C4.44113 23.29 4.95466 22.6424 5.20878 22.4041C6.04255 21.6222 7.14722 21.1945 8.29012 21.211C9.43302 21.2274 10.5249 21.6868 11.3358 22.4924C13.8435 24.9841 16.157 28.4394 12.9611 31.6159C11.2458 33.3206 8.66231 34.03 6.69642 32.1947C4.15878 29.8229 1.95466 27.0629 0.869364 23.7241C0.4176 22.3229 0.117599 20.5953 0.117599 18.1918C0.117599 8.49118 8.02878 0.64706 17.7647 0.64706C27.5005 0.64706 35.4117 8.49118 35.4117 18.1935C35.4117 20.5971 35.1135 22.3247 34.66 23.7224C33.5747 27.0629 31.3705 29.8229 28.8329 32.1929C26.867 34.03 24.2835 33.3224 22.5682 31.6159C19.3741 28.4394 21.6858 24.9841 24.1917 22.4924C25.0027 21.6863 26.095 21.2266 27.2383 21.2101C28.3816 21.1936 29.4867 21.6217 30.3205 22.4041C30.8094 22.8629 31.0511 23.41 31.3035 22.6335C31.6229 21.6453 31.8823 20.2918 31.8823 18.1935Z" fill="#DF002F" />
                                        </svg>
                                    </div>
                                    <div className={'ct-dtl'}>
                                        <p>For support</p>
                                        <h6>817-393-3335</h6>
                                    </div>
                                </div>
                            </div>

                            <div className={'col-md-4'}>
                                <div className={'logo text-center'}>
                                    <img
                                        className={'img-fluid'}
                                        src="/img/logo.png"
                                        alt="logo" />
                                </div>
                            </div>
                            <div className={'col-md-4'}>
                                <div className={'social d-flex gap-2 justify-content-end'}>
                                    <a href={'#'}>
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.4849 3.91177H13.1026C8.02641 3.91177 3.91138 8.0268 3.91138 13.1029V31.4853C3.91138 36.5614 8.02641 40.6765 13.1026 40.6765H31.4849C36.5611 40.6765 40.6761 36.5614 40.6761 31.4853V13.1029C40.6761 8.0268 36.5611 3.91177 31.4849 3.91177Z" stroke="#1B1A1A" strokeWidth="2.11765" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M29.6467 21.136C29.8736 22.6659 29.6123 24.2283 28.9 25.6011C28.1877 26.9739 27.0606 28.0871 25.6791 28.7825C24.2977 29.4778 22.7321 29.7198 21.2052 29.4741C19.6782 29.2284 18.2676 28.5075 17.174 27.4139C16.0804 26.3203 15.3595 24.9097 15.1138 23.3827C14.8681 21.8558 15.1101 20.2902 15.8054 18.9088C16.5008 17.5273 17.614 16.4002 18.9868 15.6879C20.3596 14.9756 21.922 14.7143 23.4519 14.9412C25.0124 15.1726 26.4571 15.8997 27.5726 17.0153C28.6882 18.1308 29.4153 19.5755 29.6467 21.136Z" stroke="#1B1A1A" strokeWidth="2.11765" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M32.4042 12.1838H32.4226" stroke="#1B1A1A" strokeWidth="2.11765" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                    <a href={'#'}>
                                        <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.9121 3.91177H28.3974C25.9598 3.91177 23.6219 4.88012 21.8983 6.6038C20.1746 8.32748 19.2062 10.6653 19.2062 13.1029V18.6177H13.6915V25.9706H19.2062V40.6765H26.5592V25.9706H32.0739L33.9121 18.6177H26.5592V13.1029C26.5592 12.6154 26.7528 12.1479 27.0976 11.8031C27.4423 11.4584 27.9099 11.2647 28.3974 11.2647H33.9121V3.91177Z" stroke="#1B1A1A" strokeWidth="2.11765" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'menu-header'}>
                    <div className={'container'}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/" passHref>
                                                <div className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                                                    Home
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/gallery" passHref>
                                                <div className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`}>
                                                    Gallery
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/location" passHref>
                                                <div className={`nav-link ${pathname === '/location' ? 'active' : ''}`}>
                                                    Location
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact" passHref>
                                                <div className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                                                    Contact
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <div className={'page-banner'}>
                <div className={'page-banner-img'}>
                    <img
                        className={'img-fluid'}
                        src="/img/location-bg.png"
                        alt="logo" />
                </div>
                <div className={'page-content text-center'}>
                    <h3>COME SEE US!</h3>
                    <p>
                        Feel free to swing by, peek in our fun windows and, even better, swing inside and explore our wide variety of incredible  and unique gifts for all ages.
                    </p>
                </div>
            </div>

            <div className={'map-div pt-5'}>
                <div className={'map-title-div'}>
                    <h4>
                        <span>2122 Rufe Snow Drive, Suite 104 in Keller, 76248</span>
                        <div>
                            <svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9093 43.1927C24.4753 43.1927 24.0591 43.0203 23.7522 42.7134C23.4454 42.4066 23.2729 41.9903 23.2729 41.5564V35.0109C23.2729 34.7416 23.3393 34.4764 23.4664 34.2389C23.5934 34.0014 23.7771 33.7989 24.0011 33.6494L28.9102 30.3767C29.1791 30.1973 29.4951 30.1016 29.8184 30.1016C30.1417 30.1016 30.4577 30.1973 30.7266 30.3767L35.6357 33.6494C35.8597 33.7989 36.0434 34.0014 36.1704 34.2389C36.2975 34.4764 36.3639 34.7416 36.3639 35.0109V41.5564C36.3639 41.9903 36.1915 42.4066 35.8846 42.7134C35.5777 43.0203 35.1615 43.1927 34.7275 43.1927H24.9093Z" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M29.818 23.5561C29.818 20.0842 28.4388 16.7545 25.9838 14.2994C23.5288 11.8444 20.1991 10.4652 16.7271 10.4652C13.2552 10.4652 9.92549 11.8444 7.47047 14.2994C5.01545 16.7545 3.63623 20.0842 3.63623 23.5561C3.63623 31.7265 12.7 40.2356 15.7437 42.8636C16.0274 43.0763 16.3725 43.1912 16.7271 43.1908" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M29.8184 43.1925V38.2834" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.7275 28.4652C19.4387 28.4652 21.6365 26.2673 21.6365 23.5561C21.6365 20.8449 19.4387 18.647 16.7275 18.647C14.0162 18.647 11.8184 20.8449 11.8184 23.5561C11.8184 26.2673 14.0162 28.4652 16.7275 28.4652Z" stroke="white" strokeWidth="3.27273" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </h4>
                </div>
                <div className={'map-box'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26801.057239132464!2d-97.240045!3d32.894674!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd7bf1defffff%3A0xf9ddaa1cb9fe68d9!2s2122%20Rufe%20Snow%20Dr%20%23104%2C%20Keller%2C%20TX%2076248!5e0!3m2!1sen!2sus!4v1742554057122!5m2!1sen!2sus"
                        width="100%" height="500" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className={'testimonial-div'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-12'}>
                            <div className={'testimonial-box d-flex justify-content-center gap-3 flex-column align-items-center'}>
                                <div className={'rating-star d-flex gap-2'}>
                                    <svg className={'active'} width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50002 14.2752L5.35002 16.7752C5.16669 16.8919 4.97502 16.9419 4.77502 16.9252C4.57502 16.9085 4.40002 16.8419 4.25002 16.7252C4.10002 16.6085 3.98336 16.4629 3.90002 16.2882C3.81669 16.1135 3.80002 15.9175 3.85002 15.7002L4.95002 10.9752L1.27502 7.8002C1.10836 7.6502 1.00436 7.4792 0.963024 7.2872C0.92169 7.0952 0.934024 6.90786 1.00002 6.7252C1.06602 6.54253 1.16602 6.39253 1.30002 6.2752C1.43402 6.15786 1.61736 6.08286 1.85002 6.0502L6.70002 5.6252L8.57502 1.1752C8.65836 0.975195 8.78769 0.825195 8.96302 0.725195C9.13836 0.625195 9.31736 0.575195 9.50002 0.575195C9.68269 0.575195 9.86169 0.625195 10.037 0.725195C10.2124 0.825195 10.3417 0.975195 10.425 1.1752L12.3 5.6252L17.15 6.0502C17.3834 6.08353 17.5667 6.15853 17.7 6.2752C17.8334 6.39186 17.9334 6.54186 18 6.7252C18.0667 6.90853 18.0794 7.0962 18.038 7.2882C17.9967 7.4802 17.8924 7.65086 17.725 7.8002L14.05 10.9752L15.15 15.7002C15.2 15.9169 15.1834 16.1129 15.1 16.2882C15.0167 16.4635 14.9 16.6092 14.75 16.7252C14.6 16.8412 14.425 16.9079 14.225 16.9252C14.025 16.9425 13.8334 16.8925 13.65 16.7752L9.50002 14.2752Z" fill="white" />
                                    </svg>
                                    <svg className={'active'} width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50002 14.2752L5.35002 16.7752C5.16669 16.8919 4.97502 16.9419 4.77502 16.9252C4.57502 16.9085 4.40002 16.8419 4.25002 16.7252C4.10002 16.6085 3.98336 16.4629 3.90002 16.2882C3.81669 16.1135 3.80002 15.9175 3.85002 15.7002L4.95002 10.9752L1.27502 7.8002C1.10836 7.6502 1.00436 7.4792 0.963024 7.2872C0.92169 7.0952 0.934024 6.90786 1.00002 6.7252C1.06602 6.54253 1.16602 6.39253 1.30002 6.2752C1.43402 6.15786 1.61736 6.08286 1.85002 6.0502L6.70002 5.6252L8.57502 1.1752C8.65836 0.975195 8.78769 0.825195 8.96302 0.725195C9.13836 0.625195 9.31736 0.575195 9.50002 0.575195C9.68269 0.575195 9.86169 0.625195 10.037 0.725195C10.2124 0.825195 10.3417 0.975195 10.425 1.1752L12.3 5.6252L17.15 6.0502C17.3834 6.08353 17.5667 6.15853 17.7 6.2752C17.8334 6.39186 17.9334 6.54186 18 6.7252C18.0667 6.90853 18.0794 7.0962 18.038 7.2882C17.9967 7.4802 17.8924 7.65086 17.725 7.8002L14.05 10.9752L15.15 15.7002C15.2 15.9169 15.1834 16.1129 15.1 16.2882C15.0167 16.4635 14.9 16.6092 14.75 16.7252C14.6 16.8412 14.425 16.9079 14.225 16.9252C14.025 16.9425 13.8334 16.8925 13.65 16.7752L9.50002 14.2752Z" fill="white" />
                                    </svg>
                                    <svg className={'active'} width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50002 14.2752L5.35002 16.7752C5.16669 16.8919 4.97502 16.9419 4.77502 16.9252C4.57502 16.9085 4.40002 16.8419 4.25002 16.7252C4.10002 16.6085 3.98336 16.4629 3.90002 16.2882C3.81669 16.1135 3.80002 15.9175 3.85002 15.7002L4.95002 10.9752L1.27502 7.8002C1.10836 7.6502 1.00436 7.4792 0.963024 7.2872C0.92169 7.0952 0.934024 6.90786 1.00002 6.7252C1.06602 6.54253 1.16602 6.39253 1.30002 6.2752C1.43402 6.15786 1.61736 6.08286 1.85002 6.0502L6.70002 5.6252L8.57502 1.1752C8.65836 0.975195 8.78769 0.825195 8.96302 0.725195C9.13836 0.625195 9.31736 0.575195 9.50002 0.575195C9.68269 0.575195 9.86169 0.625195 10.037 0.725195C10.2124 0.825195 10.3417 0.975195 10.425 1.1752L12.3 5.6252L17.15 6.0502C17.3834 6.08353 17.5667 6.15853 17.7 6.2752C17.8334 6.39186 17.9334 6.54186 18 6.7252C18.0667 6.90853 18.0794 7.0962 18.038 7.2882C17.9967 7.4802 17.8924 7.65086 17.725 7.8002L14.05 10.9752L15.15 15.7002C15.2 15.9169 15.1834 16.1129 15.1 16.2882C15.0167 16.4635 14.9 16.6092 14.75 16.7252C14.6 16.8412 14.425 16.9079 14.225 16.9252C14.025 16.9425 13.8334 16.8925 13.65 16.7752L9.50002 14.2752Z" fill="white" />
                                    </svg>
                                    <svg className={'active'} width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50002 14.2752L5.35002 16.7752C5.16669 16.8919 4.97502 16.9419 4.77502 16.9252C4.57502 16.9085 4.40002 16.8419 4.25002 16.7252C4.10002 16.6085 3.98336 16.4629 3.90002 16.2882C3.81669 16.1135 3.80002 15.9175 3.85002 15.7002L4.95002 10.9752L1.27502 7.8002C1.10836 7.6502 1.00436 7.4792 0.963024 7.2872C0.92169 7.0952 0.934024 6.90786 1.00002 6.7252C1.06602 6.54253 1.16602 6.39253 1.30002 6.2752C1.43402 6.15786 1.61736 6.08286 1.85002 6.0502L6.70002 5.6252L8.57502 1.1752C8.65836 0.975195 8.78769 0.825195 8.96302 0.725195C9.13836 0.625195 9.31736 0.575195 9.50002 0.575195C9.68269 0.575195 9.86169 0.625195 10.037 0.725195C10.2124 0.825195 10.3417 0.975195 10.425 1.1752L12.3 5.6252L17.15 6.0502C17.3834 6.08353 17.5667 6.15853 17.7 6.2752C17.8334 6.39186 17.9334 6.54186 18 6.7252C18.0667 6.90853 18.0794 7.0962 18.038 7.2882C17.9967 7.4802 17.8924 7.65086 17.725 7.8002L14.05 10.9752L15.15 15.7002C15.2 15.9169 15.1834 16.1129 15.1 16.2882C15.0167 16.4635 14.9 16.6092 14.75 16.7252C14.6 16.8412 14.425 16.9079 14.225 16.9252C14.025 16.9425 13.8334 16.8925 13.65 16.7752L9.50002 14.2752Z" fill="white" />
                                    </svg>
                                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.50002 14.2752L5.35002 16.7752C5.16669 16.8919 4.97502 16.9419 4.77502 16.9252C4.57502 16.9085 4.40002 16.8419 4.25002 16.7252C4.10002 16.6085 3.98336 16.4629 3.90002 16.2882C3.81669 16.1135 3.80002 15.9175 3.85002 15.7002L4.95002 10.9752L1.27502 7.8002C1.10836 7.6502 1.00436 7.4792 0.963024 7.2872C0.92169 7.0952 0.934024 6.90786 1.00002 6.7252C1.06602 6.54253 1.16602 6.39253 1.30002 6.2752C1.43402 6.15786 1.61736 6.08286 1.85002 6.0502L6.70002 5.6252L8.57502 1.1752C8.65836 0.975195 8.78769 0.825195 8.96302 0.725195C9.13836 0.625195 9.31736 0.575195 9.50002 0.575195C9.68269 0.575195 9.86169 0.625195 10.037 0.725195C10.2124 0.825195 10.3417 0.975195 10.425 1.1752L12.3 5.6252L17.15 6.0502C17.3834 6.08353 17.5667 6.15853 17.7 6.2752C17.8334 6.39186 17.9334 6.54186 18 6.7252C18.0667 6.90853 18.0794 7.0962 18.038 7.2882C17.9967 7.4802 17.8924 7.65086 17.725 7.8002L14.05 10.9752L15.15 15.7002C15.2 15.9169 15.1834 16.1129 15.1 16.2882C15.0167 16.4635 14.9 16.6092 14.75 16.7252C14.6 16.8412 14.425 16.9079 14.225 16.9252C14.025 16.9425 13.8334 16.8925 13.65 16.7752L9.50002 14.2752Z" fill="white" />
                                    </svg>
                                </div>
                                <h5 className={'text-white text-center'}>
                                    I love how personal the service is at Griff’s Gifts. The free gift wrapping was such a nice touch, and the staff even helped me pick out the perfect greeting card. It’s rare to find a shop that feels this welcoming.
                                </h5>
                                <div className={'user-div text-center'}>
                                    <div className={'usr-img'}>
                                        <img
                                            className={'img-fluid'}
                                            src="/img/user.png"
                                            alt="img" />
                                    </div>
                                    <p className={'blue-c'}>Lisa P.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'client-listing-div py-3'}>
                <div className={'container-fluid'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s1.png"
                                    alt="client" />
                            </div>
                        </div>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s2.png"
                                    alt="client" />
                            </div>
                        </div>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s3.png"
                                    alt="client" />
                            </div>
                        </div>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s1.png"
                                    alt="client" />
                            </div>
                        </div>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s2.png"
                                    alt="client" />
                            </div>
                        </div>
                        <div className={'col-6 col-sm-4 col-md-2'}>
                            <div className={'client-div'}>
                                <img
                                    className={'img-fluid'}
                                    src="/img/s3.png"
                                    alt="client" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'subscribe-div py-5'}>
                <div className={'container'}>
                    <div className={'div-title text-center'}>
                        <h1><span className={'bg-white'}>Want to join <span className={'blue-c'}> Our Mailing List?</span></span></h1>
                        <p className={'text-muted mb-5'}>
                            Sign up to our newsletter to stay up to date and be among the first to know when our official Grand Opening will occur.
                        </p>
                    </div>
                    <div className={'input-group'}>
                        <input type={'text'} className={'form-control'} placeholder={'Your email address '} />
                        <button className={'btn btn-primary'}>Subscribe</button>
                    </div>
                </div>
            </div>

            <footer className={'main-footer'}>
                <div className={'py-5'}>
                    <div className={'container'}>
                        <div className={'row row-gap-2'}>
                            <div className={'col-md-3'}>
                                <div className={'footer-div'}>
                                    <h5>Griff’s Gifts</h5>
                                    <p>
                                        Griff's Gifts is a Keller family owned and operated store.
                                    </p>
                                    <div className={'footer-social'}>
                                        <a href={'#'}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5102 2.979H9.48934C5.89374 2.979 2.97893 5.89382 2.97893 9.48942V22.5103C2.97893 26.1059 5.89374 29.0207 9.48934 29.0207H22.5102C26.1058 29.0207 29.0206 26.1059 29.0206 22.5103V9.48942C29.0206 5.89382 26.1058 2.979 22.5102 2.979Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.2081 15.1802C21.3688 16.2639 21.1837 17.3706 20.6792 18.343C20.1746 19.3154 19.3763 20.1039 18.3978 20.5964C17.4192 21.089 16.3103 21.2604 15.2287 21.0864C14.1471 20.9123 13.1479 20.4017 12.3733 19.627C11.5987 18.8524 11.088 17.8532 10.914 16.7716C10.7399 15.69 10.9114 14.5811 11.4039 13.6026C11.8964 12.624 12.6849 11.8257 13.6573 11.3211C14.6297 10.8166 15.7365 10.6315 16.8201 10.7922C17.9255 10.9561 18.9488 11.4712 19.739 12.2613C20.5292 13.0515 21.0442 14.0748 21.2081 15.1802Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M23.1613 8.83887H23.1744" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                        <a href={'#'}>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.8126 2.979H19.9063C18.1797 2.979 16.5237 3.66492 15.3028 4.88586C14.0818 6.1068 13.3959 7.76275 13.3959 9.48942V13.3957H9.48965V18.604H13.3959V29.0207H18.6042V18.604H22.5105L23.8126 13.3957H18.6042V9.48942C18.6042 9.14409 18.7414 8.8129 18.9856 8.56871C19.2298 8.32452 19.561 8.18734 19.9063 8.18734H23.8126V2.979Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-md-3'}>
                                <div className={'footer-div'}>
                                    <h5>Quick LINKS</h5>
                                    <div className={'page-link-div'}>
                                        <a href={'#'}>Home</a>
                                        <a href={'#'}>Gallery</a>
                                        <a href={'#'}>Location</a>
                                        <a href={'#'}>Contact Us</a>
                                    </div>

                                </div>
                            </div>
                            <div className={'col-md-3'}>
                                <div className={'footer-div'}>
                                    <h5>Contact</h5>
                                    <div className={'contact-box'}>
                                        <div>
                                            <svg width="24" height="33" viewBox="0 0 24 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 26.0001C14.7348 26.0001 14.4804 25.8948 14.2929 25.7073C14.1054 25.5197 14 25.2654 14 25.0001V21.0001C14 20.8356 14.0406 20.6735 14.1182 20.5284C14.1958 20.3832 14.3081 20.2595 14.445 20.1681L17.445 18.1681C17.6093 18.0585 17.8025 18 18 18C18.1975 18 18.3907 18.0585 18.555 18.1681L21.555 20.1681C21.6919 20.2595 21.8042 20.3832 21.8818 20.5284C21.9594 20.6735 22 20.8356 22 21.0001V25.0001C22 25.2654 21.8946 25.5197 21.7071 25.7073C21.5196 25.8948 21.2652 26.0001 21 26.0001H15Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18 14C18 11.8783 17.1571 9.84344 15.6569 8.34315C14.1566 6.84285 12.1217 6 10 6C7.87827 6 5.84344 6.84285 4.34315 8.34315C2.84285 9.84344 2 11.8783 2 14C2 18.993 7.539 24.193 9.399 25.799C9.57237 25.929 9.78329 25.9992 10 25.999" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M18 26V23" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10 17C11.6569 17 13 15.6569 13 14C13 12.3431 11.6569 11 10 11C8.34315 11 7 12.3431 7 14C7 15.6569 8.34315 17 10 17Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>
                                                2122 Rufe Snow Drive Suite 104 Keller, TX 76248, US
                                            </p>
                                        </div>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 16.9201V19.9201C22.0011 20.1986 21.9441 20.4743 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.9201C16.7428 21.5857 13.787 20.5342 11.19 18.8501C8.77382 17.3148 6.72533 15.2663 5.18999 12.8501C3.49997 10.2413 2.44824 7.27109 2.11999 4.1801C2.095 3.90356 2.12787 3.62486 2.21649 3.36172C2.30512 3.09859 2.44756 2.85679 2.63476 2.65172C2.82196 2.44665 3.0498 2.28281 3.30379 2.17062C3.55777 2.05843 3.83233 2.00036 4.10999 2.0001H7.10999C7.5953 1.99532 8.06579 2.16718 8.43376 2.48363C8.80173 2.80008 9.04207 3.23954 9.10999 3.7201C9.23662 4.68016 9.47144 5.62282 9.80999 6.5301C9.94454 6.88802 9.97366 7.27701 9.8939 7.65098C9.81415 8.02494 9.62886 8.36821 9.35999 8.6401L8.08999 9.9101C9.51355 12.4136 11.5864 14.4865 14.09 15.9101L15.36 14.6401C15.6319 14.3712 15.9751 14.1859 16.3491 14.1062C16.7231 14.0264 17.1121 14.0556 17.47 14.1901C18.3773 14.5286 19.3199 14.7635 20.28 14.8901C20.7658 14.9586 21.2094 15.2033 21.5265 15.5776C21.8437 15.9519 22.0122 16.4297 22 16.9201Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.05 2C16.0882 2.21477 17.9922 3.1188 19.4469 4.56258C20.9015 6.00636 21.8199 7.90341 22.05 9.94" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.05 6C15.0335 6.19394 15.936 6.67903 16.6404 7.39231C17.3447 8.10559 17.8184 9.01413 18 10" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>

                                            <p>
                                                817-393-3335
                                            </p>
                                        </div>
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M22 7L13.03 12.7C12.7213 12.8934 12.3643 12.996 12 12.996C11.6357 12.996 11.2787 12.8934 10.97 12.7L2 7" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>
                                                sean@griffsgiftshop.com
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={'col-md-3'}>
                                <div className={'footer-div'}>
                                    <h5>Business Hours</h5>
                                    <div className={'row'}>
                                        <div className={'col-4'}>
                                            <h6>Mon - Fri</h6>
                                        </div>
                                        <div className={'col-8'}>
                                            <p>(11:00am – 07:00pm)</p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-4'}>
                                            <h6>Saturday</h6>
                                        </div>
                                        <div className={'col-8'}>
                                            <p>(11:00am – 07:00pm)</p>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-4'}>
                                            <h6>Sunday</h6>
                                        </div>
                                        <div className={'col-8'}>
                                            <p> (Closed)</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'copyright-div'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-md-6'}>
                                <p>
                                    © Copyright - DogFence Ltd, a company registered in England number 08724449.
                                </p>
                            </div>
                            <div className={'col-md-6'}>
                                <div className={'d-flex gap-2 flex-wrap justify-content-end'}>
                                    <a href={'#'}>Customer Service</a>
                                    <a href={'#'}>Terms and Conditions</a>
                                    <a href={'#'}>Key Risks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
}
