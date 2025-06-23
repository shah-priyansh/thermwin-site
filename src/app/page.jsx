"use client"
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div className={'main-content'}>

      <div className={'home-slider'}>
        <Carousel controls={false}>
          <Carousel.Item>
            <Carousel.Caption>
              <div className={'slider-div position-relative'}>
                <div className={'banner-img'}>
                  {/*<img
                      className={'img-fluid'}
                      src="/img/banner.png"
                      alt="img" width={'100%'}/>*/}
                  <video width="100%" src="/img/banner-1.mp4" playsInline loop muted autoPlay></video>
                </div>
                <div className={'banner-content wow animate__animated animate__fadeInLeft'}>
                  <h1>
                    Precision Aluminums System Windows,<br/>
                    Built for Performance & Elegance
                  </h1>
                  <a href={'/contact'} className={'btn btn-default'}>
                    <span>get a free quotation</span>
                  </a>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>



      <div className={'client-div py-5'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-12'}>
              <p className={'text-center text-primary client-title mb-4 wow animate__animated animate__fadeInDown'}>We've
                worked on 500+ projects with 100+ global clients</p>
              <div className={'client-list'}>
                <div className={'client-box'}>
                  <img
                      className={'img-fluid wow animate__animated animate__zoomIn'}
                      src="/img/client1.png"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'client-box'}>
                  <img
                      className={'img-fluid wow animate__animated animate__zoomIn'}
                      src="/img/client2.png"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'client-box'}>
                  <img
                      className={'img-fluid wow animate__animated animate__zoomIn'}
                      src="/img/client3.png"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'client-box'}>
                  <img
                      className={'img-fluid wow animate__animated animate__zoomIn'}
                      src="/img/client4.png"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'client-box'}>
                  <img
                      className={'img-fluid wow animate__animated animate__zoomIn'}
                      src="/img/client5.png"
                      alt="img" width={'100%'}/>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className={'explore-section py-5'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-12'}>
              <div className={'title-div text-center mb-4'}>
                <h3 className={'mb-3 wow animate__animated animate__fadeInDown uni-bold'}>Explore Aluminums Window Systems</h3>
                <p className={' wow animate__animated animate__fadeInUp'}>From sleek sliding panels to high-performance thermal break systems, ThermWin offers a complete range
                  of aluminium windows designed for style, strength, and sustainability.</p>
              </div>

            </div>

          </div>
          <div className={'explore-list'}>
            <div className={'row'}>
              <div className={'col-md-4'}>
                <div className={'explore-card wow animate__animated animate__fadeInDown'}>
                  <div className={'explore-img'}>
                    <img
                        className={'img-fluid'}
                        src="/img/ws1.jpg"
                        alt="img" width={'100%'}/>
                  </div>
                  <div className={'explore-content'}>
                    <svg width="68" height="60" viewBox="0 0 68 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_66_62)">
                        <path
                            d="M37.7778 3.74972C37.7778 2.58956 37.2465 1.49972 36.3257 0.796592C35.4049 0.0934675 34.2125 -0.164345 33.0792 0.116905L11.841 5.39034C9.32639 6.01144 7.55556 8.26144 7.55556 10.8396V52.4997H3.77778C1.68819 52.4997 0 54.1755 0 56.2497C0 58.3239 1.68819 59.9997 3.77778 59.9997H11.3333H34H37.7778V56.2497V3.74972ZM30.2222 29.9997C30.2222 32.0739 28.959 33.7497 27.3889 33.7497C25.8187 33.7497 24.5556 32.0739 24.5556 29.9997C24.5556 27.9255 25.8187 26.2497 27.3889 26.2497C28.959 26.2497 30.2222 27.9255 30.2222 29.9997ZM41.5556 14.9997H52.8889V56.2497C52.8889 58.3239 54.5771 59.9997 56.6667 59.9997H64.2222C66.3118 59.9997 68 58.3239 68 56.2497C68 54.1755 66.3118 52.4997 64.2222 52.4997H60.4444V14.9997C60.4444 10.863 57.0562 7.49972 52.8889 7.49972H41.5556V14.9997Z"
                            fill="#1C233A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_66_62">
                          <rect width="68" height="60" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>


                    <h4>Openable System Series</h4>
                    <p>
                      The Openable Series offers versatility and ventilation without compromising on performance. With
                      advanced hinge options and elegant finishes, these windows are perfect for spaces where
                      accessibility and airflow matter most.
                    </p>
                    <div className={'tag-list'}>
                      <label><a href={'/aero'}>Aeroview Series</a> </label>
                      <label><a href={'/arch'}>Archview Series</a> </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'col-md-4'}>
                <div className={'explore-card wow animate__animated animate__fadeInUp'}>
                  <div className={'explore-content'}>
                    <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_68_68)">
                        <path
                            d="M54.375 6.125V54.875H5.625V6.125H54.375ZM5.625 0.5H0V6.125V54.875V60.5H5.625H54.375H60V54.875V6.125V0.5H54.375H5.625Z"
                            fill="#1C233A"/>
                        <rect y="0.5" width="30" height="60" fill="#1C233A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_68_68">
                          <rect width="60" height="60" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>

                    <h4>Sliding System</h4>
                    <p>
                      Our Sliding Systems are crafted for modern living — combining space-saving functionality with
                      contemporary aesthetics. Ideal for homes and offices that demand smooth operation, weather
                      resistance, and clean architectural lines.
                    </p>
                    <div className={'tag-list'}>
                      <label><a href={'/vran-series'}> V Ran Series</a></label>
                      <label><a href={'/oran-series'}> O Ran Series</a></label>
                      <label><a href={'/uran-series'}> U Ran Series</a></label>
                      <label><a href={'/lusso-series'}> Lusso Series</a></label>
                      <label><a href={'/eline-series'}> E Line Series</a></label>
                    </div>
                  </div>
                  <div className={'explore-img'}>
                    <img
                        className={'img-fluid'}
                        src="/img/ws2.jpg"
                        alt="img" width={'100%'}/>
                  </div>
                </div>
              </div>
              <div className={'col-md-4'}>
                <div className={'explore-card wow animate__animated animate__fadeInDown'}>
                  <div className={'explore-img'}>
                    <img
                        className={'img-fluid'}
                        src="/img/ws3.jpg"
                        alt="img" width={'100%'}/>
                  </div>
                  <div className={'explore-content'}>
                    <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_66_65)">
                        <path
                            d="M52.5 11.75C52.5 10.7554 52.1049 9.80161 51.4016 9.09835C50.6984 8.39509 49.7446 8 48.75 8C47.7554 8 46.8016 8.39509 46.0984 9.09835C45.3951 9.80161 45 10.7554 45 11.75C45 12.7446 45.3951 13.6984 46.0984 14.4017C46.8016 15.1049 47.7554 15.5 48.75 15.5C49.7446 15.5 50.6984 15.1049 51.4016 14.4017C52.1049 13.6984 52.5 12.7446 52.5 11.75ZM37.5 11.75C37.5 8.76631 38.6853 5.90483 40.795 3.79505C42.9048 1.68526 45.7663 0.5 48.75 0.5C51.7337 0.5 54.5952 1.68526 56.705 3.79505C58.8147 5.90483 60 8.76631 60 11.75C60 14.7337 58.8147 17.5952 56.705 19.705C54.5952 21.8147 51.7337 23 48.75 23C45.7663 23 42.9048 21.8147 40.795 19.705C38.6853 17.5952 37.5 14.7337 37.5 11.75ZM16.875 8C13.7695 8 11.25 10.5195 11.25 13.625V32.9023C11.25 34.9297 10.418 36.6406 9.45703 37.8828C8.22656 39.4766 7.5 41.457 7.5 43.625C7.5 48.8047 11.6953 53 16.875 53C22.0547 53 26.25 48.8047 26.25 43.625C26.25 41.457 25.5234 39.4766 24.293 37.8945C23.332 36.6523 22.5 34.9414 22.5 32.9141V13.625C22.5 10.5195 19.9805 8 16.875 8ZM3.75 13.625C3.75 6.38281 9.62109 0.5 16.875 0.5C24.1289 0.5 30 6.37109 30 13.625V32.8906C30 32.9023 30.0117 32.9258 30.0234 32.9609C30.0469 33.0312 30.1172 33.1484 30.2227 33.2891C32.4375 36.1484 33.75 39.7344 33.75 43.6133C33.75 52.9297 26.1914 60.4883 16.875 60.4883C7.55859 60.4883 0 52.9414 0 43.625C0 39.7344 1.3125 36.1484 3.52734 33.3008C3.63281 33.1602 3.70312 33.043 3.72656 32.9727C3.73828 32.9375 3.75 32.9141 3.75 32.9023V13.625ZM22.5 43.625C22.5 46.7305 19.9805 49.25 16.875 49.25C13.7695 49.25 11.25 46.7305 11.25 43.625C11.25 41.1758 12.8203 39.0898 15 38.3164V32.375C15 31.3438 15.8438 30.5 16.875 30.5C17.9062 30.5 18.75 31.3438 18.75 32.375V38.3164C20.9297 39.0898 22.5 41.1758 22.5 43.625Z"
                            fill="#1C233A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_66_65">
                          <rect width="60" height="60" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>


                    <h4>Thermal Break System Series</h4>
                    <p>
                      Built to withstand harsh temperatures, our Thermal Break Systems feature cutting-edge insulation
                      technology that maintains interior comfort — whether you're facing intense heat or chilling cold.
                      Ideal for eco-conscious and high-performance projects.
                    </p>
                    <div className={'tag-list'}>
                      <label><a href={'/thermwin-rin'}> Thermwin Rin Series</a></label>
                      <label><a href={'/thermwin-minimal'}> Thermwin Minimal Series</a></label>
                      <label><a href={'/thermwin-aero'}> Thermwin Aero Series</a></label>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'learn-section'}>
        <div className={'container'}>
          <div className={'row align-items-center'}>
            <div className={'col-md-6'}>
              <div className={'learn-img position-relative'}>
                <div className={'lt mb-4 wow animate__animated animate__fadeInLeft'}>
                  <img
                      className={'img-fluid'}
                      src="/img/t1.jpg"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'cities wow animate__animated animate__zoomIn'}>
                  <h4>50+</h4>
                  <p>architects in 10+ cities</p>
                </div>
                <div className={'lt ms-auto wow animate__animated animate__fadeInRight'}>
                  <img
                      className={'img-fluid'}
                      src="/img/b1.jpg"
                      alt="img" width={'100%'}/>
                </div>

              </div>
            </div>
            <div className={'col-md-6'}>
              <div className={'title-div mb-4 wow animate__animated animate__fadeInRight'}>
                <h3 className={'mb-3 text-primary'}>Explore Aluminums Window Systems</h3>
                <p className={'mb-3 d-flex gap-2'}>Established in 2023, ThermWin System Windows is a modern aluminium window solutions provider driven
                  by quality, innovation, and customer satisfaction. What began with a single order has quickly evolved
                  into a fast-growing brand, now managing multiple projects with top architects and expanding across
                  India.</p>
                <p className={'mb-3 d-flex gap-2'}>At ThermWin, we don't just build windows — we build trust. Every product is engineered with technical
                  precision and backed by a 10-year guarantee, ensuring long-lasting performance, energy efficiency, and
                  superior aesthetics.</p>
                <p className={'mb-3 d-flex gap-2'}>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.17411 17.5312C3.34375 17.3616 3.42857 17.1607 3.42857 16.9286C3.42857 16.6964 3.34375 16.4955 3.17411 16.3259C3.00446 16.1562 2.80357 16.0714 2.57143 16.0714C2.33929 16.0714 2.13839 16.1562 1.96875 16.3259C1.79911 16.4955 1.71429 16.6964 1.71429 16.9286C1.71429 17.1607 1.79911 17.3616 1.96875 17.5312C2.13839 17.7009 2.33929 17.7857 2.57143 17.7857C2.80357 17.7857 3.00446 17.7009 3.17411 17.5312ZM22.2857 9.21428C22.2857 8.75893 22.1116 8.36161 21.7634 8.02232C21.4152 7.67411 21.0179 7.5 20.5714 7.5H12.8571C12.8571 7.32143 12.9241 7.10714 13.058 6.85714C13.192 6.59821 13.3393 6.35268 13.5 6.12053C13.6607 5.87946 13.808 5.57589 13.942 5.20982C14.0759 4.83482 14.1429 4.45536 14.1429 4.07143C14.1429 3.47321 13.942 3.04018 13.5402 2.77232C13.1473 2.49554 12.6339 2.35714 12 2.35714C11.7857 2.35714 11.3839 2.97768 10.7946 4.21875C10.5804 4.61161 10.4152 4.90178 10.2991 5.08928C9.94196 5.66071 9.44196 6.30803 8.79911 7.03125C8.16518 7.75446 7.71429 8.22768 7.44643 8.45089C6.83036 8.95982 6.20536 9.21428 5.57143 9.21428H5.14286V17.7857H5.57143C6.21429 17.7857 6.95982 17.9286 7.80804 18.2143C8.65625 18.5 9.51786 18.7857 10.3929 19.0714C11.2768 19.3571 12.0804 19.5 12.8036 19.5C14.4911 19.5 15.3348 18.7545 15.3348 17.2634C15.3348 17.0312 15.3125 16.7812 15.2679 16.5134C15.5357 16.3705 15.7455 16.1384 15.8973 15.817C16.058 15.4866 16.1384 15.1562 16.1384 14.8259C16.1384 14.4955 16.058 14.1875 15.8973 13.9018C16.3705 13.4554 16.6071 12.9241 16.6071 12.308C16.6071 12.0848 16.5625 11.8393 16.4732 11.5714C16.3839 11.2946 16.2723 11.0804 16.1384 10.9286H20.5714C21.0357 10.9286 21.4375 10.7589 21.7768 10.4196C22.1161 10.0804 22.2857 9.67857 22.2857 9.21428ZM24 9.20089C24 10.1384 23.6607 10.9464 22.9821 11.625C22.3125 12.3036 21.5089 12.6429 20.5714 12.6429H18.308C18.2723 13.1964 18.1071 13.7277 17.8125 14.2366C17.8393 14.4241 17.8527 14.6161 17.8527 14.8125C17.8527 15.7143 17.5848 16.5089 17.0491 17.1964C17.058 18.4375 16.6786 19.4152 15.9107 20.1295C15.1429 20.8527 14.1295 21.2143 12.8705 21.2143C11.683 21.2143 10.2455 20.9063 8.55804 20.2902C7.09375 19.7634 6.09821 19.5 5.57143 19.5H1.71429C1.24107 19.5 0.834821 19.3348 0.495536 19.0045C0.165179 18.6652 0 18.2589 0 17.7857V9.21428C0 8.74107 0.165179 8.33929 0.495536 8.00893C0.834821 7.66964 1.24107 7.5 1.71429 7.5H5.57143C5.66071 7.5 5.75446 7.48214 5.85268 7.44643C5.95982 7.40178 6.06696 7.33928 6.17411 7.25893C6.28125 7.16964 6.37946 7.08929 6.46875 7.01786C6.56696 6.9375 6.67411 6.83482 6.79018 6.70982C6.91518 6.58482 7.00893 6.49107 7.07143 6.42857C7.13393 6.35714 7.21875 6.25893 7.32589 6.13393C7.43304 6.00893 7.49554 5.93303 7.51339 5.90625C8.09375 5.24553 8.54018 4.66964 8.85268 4.17857C8.96875 3.99107 9.11607 3.71429 9.29464 3.34821C9.47321 2.98214 9.63839 2.66071 9.79018 2.38393C9.94196 2.10714 10.1205 1.82589 10.3259 1.54018C10.5402 1.25446 10.7857 1.03571 11.0625 0.883927C11.3482 0.723213 11.6607 0.642856 12 0.642856C13.1161 0.642856 14.0357 0.941963 14.7589 1.54018C15.4911 2.13839 15.8571 2.98214 15.8571 4.07143C15.8571 4.67857 15.7589 5.25 15.5625 5.78571H20.5714C21.5 5.78571 22.3036 6.125 22.9821 6.80357C23.6607 7.48214 24 8.28125 24 9.20089Z"
                        fill="#1C233A"/>
                  </svg>

                  <b>Quality with Assurance</b> – Built to last, tested for performance
                </p>
                <p className={'mb-3 d-flex gap-2'}>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.17411 17.5312C3.34375 17.3616 3.42857 17.1607 3.42857 16.9286C3.42857 16.6964 3.34375 16.4955 3.17411 16.3259C3.00446 16.1562 2.80357 16.0714 2.57143 16.0714C2.33929 16.0714 2.13839 16.1562 1.96875 16.3259C1.79911 16.4955 1.71429 16.6964 1.71429 16.9286C1.71429 17.1607 1.79911 17.3616 1.96875 17.5312C2.13839 17.7009 2.33929 17.7857 2.57143 17.7857C2.80357 17.7857 3.00446 17.7009 3.17411 17.5312ZM22.2857 9.21428C22.2857 8.75893 22.1116 8.36161 21.7634 8.02232C21.4152 7.67411 21.0179 7.5 20.5714 7.5H12.8571C12.8571 7.32143 12.9241 7.10714 13.058 6.85714C13.192 6.59821 13.3393 6.35268 13.5 6.12053C13.6607 5.87946 13.808 5.57589 13.942 5.20982C14.0759 4.83482 14.1429 4.45536 14.1429 4.07143C14.1429 3.47321 13.942 3.04018 13.5402 2.77232C13.1473 2.49554 12.6339 2.35714 12 2.35714C11.7857 2.35714 11.3839 2.97768 10.7946 4.21875C10.5804 4.61161 10.4152 4.90178 10.2991 5.08928C9.94196 5.66071 9.44196 6.30803 8.79911 7.03125C8.16518 7.75446 7.71429 8.22768 7.44643 8.45089C6.83036 8.95982 6.20536 9.21428 5.57143 9.21428H5.14286V17.7857H5.57143C6.21429 17.7857 6.95982 17.9286 7.80804 18.2143C8.65625 18.5 9.51786 18.7857 10.3929 19.0714C11.2768 19.3571 12.0804 19.5 12.8036 19.5C14.4911 19.5 15.3348 18.7545 15.3348 17.2634C15.3348 17.0312 15.3125 16.7812 15.2679 16.5134C15.5357 16.3705 15.7455 16.1384 15.8973 15.817C16.058 15.4866 16.1384 15.1562 16.1384 14.8259C16.1384 14.4955 16.058 14.1875 15.8973 13.9018C16.3705 13.4554 16.6071 12.9241 16.6071 12.308C16.6071 12.0848 16.5625 11.8393 16.4732 11.5714C16.3839 11.2946 16.2723 11.0804 16.1384 10.9286H20.5714C21.0357 10.9286 21.4375 10.7589 21.7768 10.4196C22.1161 10.0804 22.2857 9.67857 22.2857 9.21428ZM24 9.20089C24 10.1384 23.6607 10.9464 22.9821 11.625C22.3125 12.3036 21.5089 12.6429 20.5714 12.6429H18.308C18.2723 13.1964 18.1071 13.7277 17.8125 14.2366C17.8393 14.4241 17.8527 14.6161 17.8527 14.8125C17.8527 15.7143 17.5848 16.5089 17.0491 17.1964C17.058 18.4375 16.6786 19.4152 15.9107 20.1295C15.1429 20.8527 14.1295 21.2143 12.8705 21.2143C11.683 21.2143 10.2455 20.9063 8.55804 20.2902C7.09375 19.7634 6.09821 19.5 5.57143 19.5H1.71429C1.24107 19.5 0.834821 19.3348 0.495536 19.0045C0.165179 18.6652 0 18.2589 0 17.7857V9.21428C0 8.74107 0.165179 8.33929 0.495536 8.00893C0.834821 7.66964 1.24107 7.5 1.71429 7.5H5.57143C5.66071 7.5 5.75446 7.48214 5.85268 7.44643C5.95982 7.40178 6.06696 7.33928 6.17411 7.25893C6.28125 7.16964 6.37946 7.08929 6.46875 7.01786C6.56696 6.9375 6.67411 6.83482 6.79018 6.70982C6.91518 6.58482 7.00893 6.49107 7.07143 6.42857C7.13393 6.35714 7.21875 6.25893 7.32589 6.13393C7.43304 6.00893 7.49554 5.93303 7.51339 5.90625C8.09375 5.24553 8.54018 4.66964 8.85268 4.17857C8.96875 3.99107 9.11607 3.71429 9.29464 3.34821C9.47321 2.98214 9.63839 2.66071 9.79018 2.38393C9.94196 2.10714 10.1205 1.82589 10.3259 1.54018C10.5402 1.25446 10.7857 1.03571 11.0625 0.883927C11.3482 0.723213 11.6607 0.642856 12 0.642856C13.1161 0.642856 14.0357 0.941963 14.7589 1.54018C15.4911 2.13839 15.8571 2.98214 15.8571 4.07143C15.8571 4.67857 15.7589 5.25 15.5625 5.78571H20.5714C21.5 5.78571 22.3036 6.125 22.9821 6.80357C23.6607 7.48214 24 8.28125 24 9.20089Z"
                        fill="#1C233A"/>
                  </svg>

                  <b>Innovation-First Approach </b> – Advanced machinery & customized solutions
                </p>
                <p className={'mb-3 d-flex gap-2'}>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.17411 17.5312C3.34375 17.3616 3.42857 17.1607 3.42857 16.9286C3.42857 16.6964 3.34375 16.4955 3.17411 16.3259C3.00446 16.1562 2.80357 16.0714 2.57143 16.0714C2.33929 16.0714 2.13839 16.1562 1.96875 16.3259C1.79911 16.4955 1.71429 16.6964 1.71429 16.9286C1.71429 17.1607 1.79911 17.3616 1.96875 17.5312C2.13839 17.7009 2.33929 17.7857 2.57143 17.7857C2.80357 17.7857 3.00446 17.7009 3.17411 17.5312ZM22.2857 9.21428C22.2857 8.75893 22.1116 8.36161 21.7634 8.02232C21.4152 7.67411 21.0179 7.5 20.5714 7.5H12.8571C12.8571 7.32143 12.9241 7.10714 13.058 6.85714C13.192 6.59821 13.3393 6.35268 13.5 6.12053C13.6607 5.87946 13.808 5.57589 13.942 5.20982C14.0759 4.83482 14.1429 4.45536 14.1429 4.07143C14.1429 3.47321 13.942 3.04018 13.5402 2.77232C13.1473 2.49554 12.6339 2.35714 12 2.35714C11.7857 2.35714 11.3839 2.97768 10.7946 4.21875C10.5804 4.61161 10.4152 4.90178 10.2991 5.08928C9.94196 5.66071 9.44196 6.30803 8.79911 7.03125C8.16518 7.75446 7.71429 8.22768 7.44643 8.45089C6.83036 8.95982 6.20536 9.21428 5.57143 9.21428H5.14286V17.7857H5.57143C6.21429 17.7857 6.95982 17.9286 7.80804 18.2143C8.65625 18.5 9.51786 18.7857 10.3929 19.0714C11.2768 19.3571 12.0804 19.5 12.8036 19.5C14.4911 19.5 15.3348 18.7545 15.3348 17.2634C15.3348 17.0312 15.3125 16.7812 15.2679 16.5134C15.5357 16.3705 15.7455 16.1384 15.8973 15.817C16.058 15.4866 16.1384 15.1562 16.1384 14.8259C16.1384 14.4955 16.058 14.1875 15.8973 13.9018C16.3705 13.4554 16.6071 12.9241 16.6071 12.308C16.6071 12.0848 16.5625 11.8393 16.4732 11.5714C16.3839 11.2946 16.2723 11.0804 16.1384 10.9286H20.5714C21.0357 10.9286 21.4375 10.7589 21.7768 10.4196C22.1161 10.0804 22.2857 9.67857 22.2857 9.21428ZM24 9.20089C24 10.1384 23.6607 10.9464 22.9821 11.625C22.3125 12.3036 21.5089 12.6429 20.5714 12.6429H18.308C18.2723 13.1964 18.1071 13.7277 17.8125 14.2366C17.8393 14.4241 17.8527 14.6161 17.8527 14.8125C17.8527 15.7143 17.5848 16.5089 17.0491 17.1964C17.058 18.4375 16.6786 19.4152 15.9107 20.1295C15.1429 20.8527 14.1295 21.2143 12.8705 21.2143C11.683 21.2143 10.2455 20.9063 8.55804 20.2902C7.09375 19.7634 6.09821 19.5 5.57143 19.5H1.71429C1.24107 19.5 0.834821 19.3348 0.495536 19.0045C0.165179 18.6652 0 18.2589 0 17.7857V9.21428C0 8.74107 0.165179 8.33929 0.495536 8.00893C0.834821 7.66964 1.24107 7.5 1.71429 7.5H5.57143C5.66071 7.5 5.75446 7.48214 5.85268 7.44643C5.95982 7.40178 6.06696 7.33928 6.17411 7.25893C6.28125 7.16964 6.37946 7.08929 6.46875 7.01786C6.56696 6.9375 6.67411 6.83482 6.79018 6.70982C6.91518 6.58482 7.00893 6.49107 7.07143 6.42857C7.13393 6.35714 7.21875 6.25893 7.32589 6.13393C7.43304 6.00893 7.49554 5.93303 7.51339 5.90625C8.09375 5.24553 8.54018 4.66964 8.85268 4.17857C8.96875 3.99107 9.11607 3.71429 9.29464 3.34821C9.47321 2.98214 9.63839 2.66071 9.79018 2.38393C9.94196 2.10714 10.1205 1.82589 10.3259 1.54018C10.5402 1.25446 10.7857 1.03571 11.0625 0.883927C11.3482 0.723213 11.6607 0.642856 12 0.642856C13.1161 0.642856 14.0357 0.941963 14.7589 1.54018C15.4911 2.13839 15.8571 2.98214 15.8571 4.07143C15.8571 4.67857 15.7589 5.25 15.5625 5.78571H20.5714C21.5 5.78571 22.3036 6.125 22.9821 6.80357C23.6607 7.48214 24 8.28125 24 9.20089Z"
                        fill="#1C233A"/>
                  </svg>

                  <b>Customer Commitment</b> – Personalized service with measurable satisfaction
                </p>

                <div className={'section-btn-div'}>
                  <a href={'/about'} className={'btn btn-default'}><span>Learn about Us</span></a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'project-section'}>
        <div className={'container'}>
          <div className={'title-div text-center mb-4'}>
            <h3 className={'mb-3 wow animate__animated animate__fadeInDown'}>ThermWin Projects Showcase</h3>
            <p className={' wow animate__animated animate__fadeInUp'}>With collaborations alongside top architects and developers, ThermWin delivers window solutions that blend aesthetics with innovation — tailored for each unique vision.</p>
          </div>
          <div className={'row'}>
            <div className={'col-md-4 mb-3 wow animate__animated animate__fadeInUp'}>
              <div className={'project-card position-relative mt-0 mt-sm-0 mt-md-5'}>
                <div className={'project-img'}>
                  <img
                      className={'img-fluid'}
                      src="/img/project1.jpg"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'project-content'}>
                  <h4>Silent Zone</h4>
                  <p>Sleek and minimal windows designed to complement a contemporary villa. Delivered with precision-fit
                    frames and sound-insulated glass.</p>
                </div>
              </div>
            </div>
            <div className={'col-md-4 mb-3 wow animate__animated animate__fadeInUp'}>
              <div className={'project-card position-relative'}>
                <div className={'project-img'}>
                  <img
                      className={'img-fluid'}
                      src="/img/project2.jpg"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'project-content'}>
                  <h4>Anupam Kunj Villa</h4>
                  <p>High-performance thermal insulation windows installed across 3 floors. Designed for energy efficiency and modern aesthetics.</p>
                </div>
              </div>
            </div>
            <div className={'col-md-4 mb-3 wow animate__animated animate__fadeInUp'}>
              <div className={'project-card position-relative mt-0 mt-sm-0 mt-md-5'}>
                <div className={'project-img'}>
                  <img
                      className={'img-fluid'}
                      src="/img/project3.jpg"
                      alt="img" width={'100%'}/>
                </div>
                <div className={'project-content'}>
                  <h4>Royal Villa</h4>
                  <p>Smooth-sliding, low-maintenance window systems tailored for high-rise living. Installed with on-site measurement and client-approved finish.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={'section-btn-div text-center mt-3 wow animate__animated animate__fadeInUp'}>
            <a href={'/project'} className={'btn btn-default'}><span>View all projects</span></a>
          </div>
        </div>
      </div>
      <div className={'our-work-section'}>
        <div className={'container'}>
          <div className={'title-div text-center mb-4'}>
            <h3 className={'mb-3 wow animate__animated animate__fadeInDown'}>Our Work Process</h3>
            <p className={' wow animate__animated animate__fadeInUp'}>At ThermWin, we simplify your journey from initial idea to flawless installation. Our proven 4-step
              process ensures precision, customization, and quality at every stage.</p>
          </div>

          <div className={'row'}>
            <div className={'col-md-3 mb-3'}>
              <div className={'work-card wow animate__animated animate__zoomIn'}>
                <div className={'shape'}></div>
                <h1 className={'text-end'}>1</h1>
                <div className={'work-content'}>
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_68_359)">
                      <path
                          d="M26.211 0.3125L48.711 12.8125C49.9141 13.4844 50.3516 15.0078 49.6797 16.2109C49.0079 17.4141 47.4844 17.8516 46.2813 17.1797L25 5.35938L3.71098 17.1875C2.50785 17.8594 0.984416 17.4219 0.312541 16.2188C-0.359334 15.0156 0.0781657 13.4922 1.28129 12.8203L23.7891 0.3125C24.5469 -0.109375 25.461 -0.109375 26.2188 0.3125H26.211ZM25 12.5C25.8288 12.5 26.6237 12.8292 27.2097 13.4153C27.7958 14.0013 28.125 14.7962 28.125 15.625C28.125 16.4538 27.7958 17.2487 27.2097 17.8347C26.6237 18.4208 25.8288 18.75 25 18.75C24.1712 18.75 23.3764 18.4208 22.7903 17.8347C22.2043 17.2487 21.875 16.4538 21.875 15.625C21.875 14.7962 22.2043 14.0013 22.7903 13.4153C23.3764 12.8292 24.1712 12.5 25 12.5ZM11.25 20C12.0788 20 12.8737 20.3292 13.4597 20.9153C14.0458 21.5013 14.375 22.2962 14.375 23.125C14.375 23.9538 14.0458 24.7487 13.4597 25.3347C12.8737 25.9208 12.0788 26.25 11.25 26.25C10.4212 26.25 9.62638 25.9208 9.04033 25.3347C8.45428 24.7487 8.12504 23.9538 8.12504 23.125C8.12504 22.2962 8.45428 21.5013 9.04033 20.9153C9.62638 20.3292 10.4212 20 11.25 20ZM35.625 23.125C35.625 22.2962 35.9543 21.5013 36.5403 20.9153C37.1264 20.3292 37.9212 20 38.75 20C39.5788 20 40.3737 20.3292 40.9598 20.9153C41.5458 21.5013 41.875 22.2962 41.875 23.125C41.875 23.9538 41.5458 24.7487 40.9598 25.3347C40.3737 25.9208 39.5788 26.25 38.75 26.25C37.9212 26.25 37.1264 25.9208 36.5403 25.3347C35.9543 24.7487 35.625 23.9538 35.625 23.125ZM17.7266 38.3906L15.625 34.4922V37.5C15.625 38.8828 14.5079 40 13.125 40H9.37504C7.99223 40 6.87504 38.8828 6.87504 37.5V34.4922L4.77348 38.3906C4.28129 39.3047 3.14848 39.6406 2.23442 39.1562C1.32035 38.6719 0.984416 37.5312 1.46879 36.6172L4.42973 31.125C5.62504 28.8984 7.95317 27.5078 10.4844 27.5078H12.0079C13.2813 27.5078 14.5 27.8594 15.5547 28.4922L18.1797 23.625C19.375 21.3984 21.7032 20.0078 24.2344 20.0078H25.7579C28.2891 20.0078 30.6094 21.3984 31.8125 23.625L34.4375 28.4922C35.4922 27.8594 36.711 27.5078 37.9844 27.5078H39.5079C42.0391 27.5078 44.3594 28.8984 45.5625 31.125L48.5235 36.6172C49.0157 37.5312 48.6719 38.6641 47.7579 39.1562C46.8438 39.6484 45.711 39.3047 45.2188 38.3906L43.125 34.4922V37.5C43.125 38.8828 42.0079 40 40.625 40H36.875C35.4922 40 34.375 38.8828 34.375 37.5V34.4922L32.2735 38.3906C31.7813 39.3047 30.6485 39.6406 29.7344 39.1562C28.8204 38.6719 28.4844 37.5312 28.9688 36.6172L31.8047 31.3438C31.6719 31.2109 31.5547 31.0625 31.4688 30.8906L29.375 26.9922V31.25C29.375 32.6328 28.2579 33.75 26.875 33.75H23.125C21.7422 33.75 20.625 32.6328 20.625 31.25V26.9922L18.5235 30.8906C18.4297 31.0625 18.3204 31.2109 18.1875 31.3438L21.0235 36.6172C21.5157 37.5312 21.1719 38.6641 20.2579 39.1562C19.3438 39.6484 18.211 39.3047 17.7188 38.3906H17.7266Z"
                          fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_68_359">
                        <rect width="50" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <h4>Site Visit & Consultation</h4>
                  <p>We begin with a detailed site inspection and client consultation to understand your requirements,
                    style preferences, and space constraints.</p>
                </div>
              </div>
            </div>
            <div className={'col-md-3 mb-3'}>
              <div className={'work-card wow animate__animated animate__zoomIn'}>
                <div className={'shape'}></div>
                <h1 className={'text-end'}>2</h1>
                <div className={'work-content'}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_68_389)">
                      <path
                          d="M0.015625 36.6328C0.210938 38.5234 1.80469 40 3.75 40H11.25H36.25C38.3203 40 40 38.3203 40 36.25V28.75C40 26.6797 38.3203 25 36.25 25H32.5V31.25C32.5 31.9375 31.9375 32.5 31.25 32.5C30.5625 32.5 30 31.9375 30 31.25V25H25V31.25C25 31.9375 24.4375 32.5 23.75 32.5C23.0625 32.5 22.5 31.9375 22.5 31.25V25H17.5V31.25C17.5 31.9375 16.9375 32.5 16.25 32.5C15.5625 32.5 15 31.9375 15 31.25V25H8.75C8.0625 25 7.5 24.4375 7.5 23.75C7.5 23.0625 8.0625 22.5 8.75 22.5H15V17.5H8.75C8.0625 17.5 7.5 16.9375 7.5 16.25C7.5 15.5625 8.0625 15 8.75 15H15V10H8.75C8.0625 10 7.5 9.4375 7.5 8.75C7.5 8.0625 8.0625 7.5 8.75 7.5H15V3.75C15 1.67969 13.3203 0 11.25 0H3.75C1.67969 0 0 1.67969 0 3.75V28.75V36.25C0 36.3828 0.0078125 36.5078 0.015625 36.6328Z"
                          fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_68_389">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <h4>Measurement & Quotation</h4>
                  <p>Using advanced laser tools, we take inch-perfect measurements and generate an instant,
                    software-based quotation tailored to your project.</p>
                </div>
              </div>
            </div>
            <div className={'col-md-3 mb-3'}>
              <div className={'work-card wow animate__animated animate__zoomIn'}>
                <div className={'shape'}></div>
                <h1 className={'text-end'}>3</h1>
                <div className={'work-content'}>
                  <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.60151 3.28926C4.83588 2.8127 5.35151 2.53926 5.87494 2.60957L24.9999 5.0002L44.1249 2.60957C44.6484 2.54707 45.164 2.82051 45.3984 3.28926L48.6562 9.80489C49.3593 11.2033 48.6093 12.8986 47.1093 13.3283L34.3437 16.9768C33.2578 17.2893 32.0937 16.8283 31.5156 15.8596L24.9999 5.0002L18.4843 15.8596C17.9062 16.8283 16.7421 17.2893 15.6562 16.9768L2.89838 13.3283C1.39057 12.8986 0.648382 11.2033 1.35151 9.80489L4.60151 3.28926ZM25.0859 10.0002L29.3749 17.1408C30.539 19.0783 32.8593 20.0002 35.039 19.3752L44.9999 16.5315V29.5783C44.9999 31.2971 43.8281 32.7971 42.1562 33.219L26.2109 37.2033C25.414 37.4064 24.5781 37.4064 23.789 37.2033L7.84369 33.219C6.17182 32.7893 4.99994 31.2893 4.99994 29.5705V16.5236L14.9687 19.3752C17.1406 20.0002 19.4687 19.0783 20.6328 17.1408L24.914 10.0002H25.0859Z"
                        fill="white"/>
                  </svg>

                  <h4>Sample Kit & Customization</h4>
                  <p>We provide a physical sample kit for material verification and finalize your custom specifications
                    before moving to production.</p>
                </div>
              </div>
            </div>
            <div className={'col-md-3 mb-3'}>
              <div className={'work-card wow animate__animated animate__zoomIn'}>
                <div className={'shape'}></div>
                <h1 className={'text-end'}>4</h1>
                <div className={'work-content'}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_68_395)">
                      <path
                          d="M6.14064 0.390588C5.39845 -0.187537 4.34377 -0.117225 3.67189 0.546838L0.546892 3.67184C-0.117171 4.3359 -0.187483 5.39059 0.382829 6.14059L6.63283 14.2656C6.98439 14.7265 7.53908 15 8.1172 15H12.3438L20.8594 23.5156C19.711 25.7812 20.0781 28.625 21.9766 30.5156L30.7266 39.2656C31.7031 40.2421 33.2891 40.2421 34.2656 39.2656L39.2656 34.2656C40.2422 33.289 40.2422 31.7031 39.2656 30.7265L30.5156 21.9765C28.625 20.0859 25.7813 19.7109 23.5156 20.8593L15 12.3437V8.11715C15 7.53121 14.7266 6.98434 14.2656 6.63278L6.14064 0.390588ZM1.5547 30.9453C0.562517 31.9375 1.66344e-05 33.289 1.66344e-05 34.6953C1.66344e-05 37.625 2.37502 40 5.3047 40C6.71095 40 8.06252 39.4375 9.0547 38.4453L18.2578 29.2421C17.6485 27.6093 17.5547 25.8359 17.9766 24.1562L13.1563 19.3359L1.5547 30.9453ZM40 11.25C40 10.4297 39.9141 9.63278 39.75 8.86715C39.5625 7.99215 38.4922 7.76559 37.8594 8.3984L32.8672 13.3906C32.6328 13.625 32.3125 13.7578 31.9844 13.7578L27.5 13.75C26.8125 13.75 26.25 13.1875 26.25 12.5V8.01559C26.25 7.68746 26.3828 7.36715 26.6172 7.13278L31.6094 2.14059C32.2422 1.50778 32.0156 0.437463 31.1406 0.249963C30.3672 0.0859001 29.5703 -3.7411e-05 28.75 -3.7411e-05C22.5391 -3.7411e-05 17.5 5.03903 17.5 11.25V11.3125L24.1641 17.9765C26.9766 17.2656 30.086 18.0156 32.2891 20.2187L33.5156 21.4453C37.3438 19.6484 40 15.7578 40 11.25ZM4.37502 33.75C4.37502 33.2527 4.57256 32.7758 4.92419 32.4241C5.27582 32.0725 5.75274 31.875 6.25002 31.875C6.7473 31.875 7.22421 32.0725 7.57584 32.4241C7.92747 32.7758 8.12502 33.2527 8.12502 33.75C8.12502 34.2472 7.92747 34.7242 7.57584 35.0758C7.22421 35.4274 6.7473 35.625 6.25002 35.625C5.75274 35.625 5.27582 35.4274 4.92419 35.0758C4.57256 34.7242 4.37502 34.2472 4.37502 33.75Z"
                          fill="white"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_68_395">
                        <rect width="40" height="40" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <h4>Manufacturing & Installation</h4>
                  <p>Your windows are manufactured with high-precision machinery and installed by our expert team —
                    backed by a 10-year guarantee.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className={'client-say-section'}>
        <div className={'container-fluid'}>
          <div className={'title-div text-center mb-4'}>
            <h3 className={'mb-3 wow animate__animated animate__fadeInDown'}>What Our Clients Say</h3>
            <p className={' wow animate__animated animate__fadeInUp'}>"The energy-efficient windows transformed our home's comfort and style. The 10-year guarantee gave us total peace of mind. Great service and excellent craftsmanship."</p>
          </div>
          <div className={'row'}>
            <div className={'col-md-4'}>
              <div className={'client-say position-relative wow animate__animated animate__zoomIn'}>
                <p className={'mb-3'}>Exceptional quality and flawless installation! ThermWin's team made the entire
                  process smooth — from precise measurement to the final fit. Highly recommend for any architectural
                  project.</p>
                <div className={'cs-bt pe-5'}>
                  <div className={'rate mb-2'}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                  </div>
                  <h6>Hema Dudhwala, Surat</h6>
                </div>

                <div className={'quote-icon'}>
                  <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.9575 0L24.9575 18.4775C24.9575 32.7375 15.63 42.4025 2.5 45L0.0125 39.6225C6.0925 37.33 10 30.5275 10 25H0L0 0L24.9575 0ZM60 0V18.4775C60 32.7375 50.63 42.405 37.5 45L35.01 39.6225C41.0925 37.33 45 30.5275 45 25L35.0425 25V0L60 0Z"
                        fill="#1C233A"/>
                  </svg>

                </div>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'client-say position-relative wow animate__animated animate__zoomIn'}>
                <p className={'mb-3'}>ThermWin’s customized solutions matched our design vision, delivering style and function. Their consultation and on-site quoting saved us time and hassle, making the experience seamless and professional.</p>
                <div className={'cs-bt pe-5'}>
                  <div className={'rate mb-2'}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                  </div>
                  <h6>Manish Chevali, Mumbai</h6>
                </div>

                <div className={'quote-icon'}>
                  <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.9575 0L24.9575 18.4775C24.9575 32.7375 15.63 42.4025 2.5 45L0.0125 39.6225C6.0925 37.33 10 30.5275 10 25H0L0 0L24.9575 0ZM60 0V18.4775C60 32.7375 50.63 42.405 37.5 45L35.01 39.6225C41.0925 37.33 45 30.5275 45 25L35.0425 25V0L60 0Z"
                        fill="#1C233A"/>
                  </svg>

                </div>
              </div>
            </div>
            <div className={'col-md-4'}>
              <div className={'client-say position-relative wow animate__animated animate__zoomIn'}>
                <p className={'mb-3'}>The team at ThermWin was super helpful and professional. They made sure the design matched what we wanted, and the on-site quote saved us a lot of time.</p>
                <div className={'cs-bt pe-5'}>
                  <div className={'rate mb-2'}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M8.87046 0.562437C8.70987 0.218726 8.37051 0 7.99782 0C7.62514 0 7.28881 0.218726 7.12519 0.562437L5.17691 4.69635L0.825864 5.35878C0.462267 5.41502 0.159269 5.67749 0.04716 6.03682C-0.0649493 6.39616 0.02595 6.79299 0.286528 7.05858L3.44377 10.2801L2.69839 14.8327C2.63779 15.2077 2.78929 15.5889 3.08926 15.8107C3.38923 16.0326 3.78615 16.0607 4.11339 15.8826L8.00085 13.7422L11.8883 15.8826C12.2156 16.0607 12.6125 16.0357 12.9124 15.8107C13.2124 15.5858 13.3639 15.2077 13.3033 14.8327L12.5549 10.2801L15.7121 7.05858C15.9727 6.79299 16.0667 6.39616 15.9515 6.03682C15.8364 5.67749 15.5364 5.41502 15.1728 5.35878L10.8187 4.69635L8.87046 0.562437Z"
                          fill="#3A6351"/>
                    </svg>
                  </div>
                  <h6>Jay Shah, Surat
                  </h6>
                </div>

                <div className={'quote-icon'}>
                  <svg width="60" height="45" viewBox="0 0 60 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.9575 0L24.9575 18.4775C24.9575 32.7375 15.63 42.4025 2.5 45L0.0125 39.6225C6.0925 37.33 10 30.5275 10 25H0L0 0L24.9575 0ZM60 0V18.4775C60 32.7375 50.63 42.405 37.5 45L35.01 39.6225C41.0925 37.33 45 30.5275 45 25L35.0425 25V0L60 0Z"
                        fill="#1C233A"/>
                  </svg>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
