"use client";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default function Location() {

    return (
        <div>
            <div className={'page-banner position-relative'}>
                <div className={'page-banner-img wow animate__animated animate__fadeIn'}>
                    <img
                        className={'img-fluid'}
                        src="/img/thermwin-projects.jpg"
                        alt="logo"/>
                </div>
                <div className={'page-content text-center wow animate__animated animate__fadeInUp'}>
                    <div className={'container'}>
                        <h3><span>ThermWin Projects</span></h3>
                    </div>
                </div>
            </div>

            <div className={'project-list-div'}>
                <div className='container'>
                    <div className={'pl-body'}>
                        <div className={'project-section'}>
                            <div className={'container'}>
                                <div className={'wow animate__animated animate__fadeInDown'}>
                                <Tabs
                                    defaultActiveKey="All"
                                    id="fill-tab-example"
                                    className="mb-3"
                                    fill
                                >
                                    <Tab eventKey="All" title="All">
                                        <div className={'row'}>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project1.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Urban Villa Residence</h4>
                                                            <p>Sleek and minimal windows designed to complement a
                                                                contemporary
                                                                villa. Delivered with precision-fit
                                                                frames and sound-insulated glass.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project2.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Skyline Business Park</h4>
                                                            <p>High-performance thermal insulation windows installed
                                                                across 3
                                                                floors. Designed for energy efficiency and modern
                                                                aesthetics.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project3.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Harmony Heights Apartments</h4>
                                                            <p>Smooth-sliding, low-maintenance window systems tailored
                                                                for high-rise
                                                                living. Installed with on-site measurement and
                                                                client-approved
                                                                finish.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project4.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Urban Villa Residence</h4>
                                                            <p>Sleek and minimal windows designed to complement a
                                                                contemporary
                                                                villa. Delivered with precision-fit frames and
                                                                sound-insulated
                                                                glass.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project5.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Skyline Business Park</h4>
                                                            <p>High-performance thermal insulation windows installed
                                                                across 3
                                                                floors. Designed for energy efficiency and modern
                                                                aesthetics.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project6.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Harmony Heights Apartments</h4>
                                                            <p>Smooth-sliding, low-maintenance window systems tailored
                                                                for high-rise living. Installed with on-site measurement
                                                                and client-approved finish.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Sliding System" title="Sliding System">
                                        <div className={'row'}>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project1.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Urban Villa Residence</h4>
                                                            <p>Sleek and minimal windows designed to complement a
                                                                contemporary
                                                                villa. Delivered with precision-fit
                                                                frames and sound-insulated glass.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Openable System" title="Openable System">
                                        <div className={'row'}>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project2.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Skyline Business Park</h4>
                                                            <p>High-performance thermal insulation windows installed
                                                                across 3
                                                                floors. Designed for energy efficiency and modern
                                                                aesthetics.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Thermal System" title="Thermal System">
                                        <div className={'row'}>
                                            <div className={'col-md-4 mb-3'}>
                                                <a href={'#'}>
                                                    <div className={'project-card position-relative'}>
                                                        <div className={'project-img'}>
                                                            <img
                                                                className={'img-fluid'}
                                                                src="/img/project3.jpg"
                                                                alt="img" width={'100%'}/>
                                                        </div>
                                                        <div className={'project-content'}>
                                                            <h4>Harmony Heights Apartments</h4>
                                                            <p>Smooth-sliding, low-maintenance window systems tailored
                                                                for high-rise
                                                                living. Installed with on-site measurement and
                                                                client-approved
                                                                finish.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
