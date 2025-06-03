"use client";
import Accordion from 'react-bootstrap/Accordion';
export default function Location() {

    return (
        <div>
            <div className={'page-banner position-relative'}>
                <div className={'page-banner-img wow animate__animated animate__fadeIn'}>
                    <img
                        className={'img-fluid'}
                        src="/img/skyline.jpg"
                        alt="img"/>
                </div>
                <div className={'page-content text-center wow animate__animated animate__fadeInUp'}>
                    <div className={'container'}>
                        <h3><span>Skyline Heights – Luxury Residential Tower</span></h3>
                    </div>
                </div>
            </div>

            <div className={'project-detail-div'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-8'}>
                            <div className={'project-detail-content'}>
                                <p className={'mb-5'}>
                                    Skyline Heights is a premium high-rise residential development in Ahmedabad, known for its contemporary design and energy-efficient architecture. ThermWin was selected as the exclusive partner for aluminium window systems across 18 floors of luxury apartments.
                                </p>

                                <div className={'project-gallery'}>
                                    <div className={'row'}>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/1.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/2.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/3.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/4.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/5.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                        <div className={'col-12 col-sm-6 col-md-6'}>
                                            <div className={'pg-box mb-3'}>
                                                <img
                                                    className={'img-fluid'}
                                                    src="/img/projects/skyline-heights/6.png"
                                                    alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={'col-md-4'}>
                            <div className={'project-location'}>
                                <div className={'pl-box'}>
                                    <h6>Location</h6>
                                    <p>Ahmedabad, Gujarat</p>
                                </div>
                                <div className={'pl-box'}>
                                    <h6>Time</h6>
                                    <p>Completed: March 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
