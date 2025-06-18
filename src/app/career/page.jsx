"use client";
import Accordion from 'react-bootstrap/Accordion';
export default function Location() {

    return (
        <div>
            <div className={'page-banner position-relative'}>
                <div className={'page-banner-img wow animate__animated animate__fadeIn'}>
                    <img
                        className={'img-fluid'}
                        src="/img/career.jpg"
                        alt="logo"/>
                </div>
                <div className={'page-content text-center wow animate__animated animate__fadeInUp'}>
                    <div className={'container'}>
                        <h3><span>Build Your Career</span></h3>
                    </div>
                </div>
            </div>

            <div className={'career-detail-div'}>
                <div className={'container'}>
                    <div className={'career-head mb-4 wow animate__animated animate__fadeInDown'}>
                        <p>
                            At ThermWin, we’re not just crafting premium aluminium window systems—we’re building a team of passionate professionals driven by precision, innovation, and purpose. Whether you're a seasoned expert or an emerging talent, your journey of growth and impact starts here.
                        </p>
                    </div>
                    <div className={'career-collapse wow animate__animated animate__fadeInUp'}>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span>01</span> Sales Executive</Accordion.Header>
                                <Accordion.Body>
                                    <div className={'row'}>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Full Name*</label>
                                                <input type={'text'} className={'form-control'}
                                                       placeholder={'Type here'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Mobile*</label>
                                                <input className={'form-control'} placeholder={'Type here'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Email address*</label>
                                                <input type={'email'} className={'form-control'}
                                                       placeholder={'Type here'}/>
                                            </div>
                                        </div>

                                        <div className={'col-md-12'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Message</label>
                                                <textarea className={'form-control'} placeholder={'Type here'}
                                                          rows={'4'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-12'}>
                                            <div className={'form-group mb-3'}>
                                                <button className={'btn btn-default'}><span
                                                    className={'py-3'}>Submit</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>02</span> Sales Executive</Accordion.Header>
                                <Accordion.Body>
                                    <div className={'row'}>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Full Name*</label>
                                                <input type={'text'} className={'form-control'}
                                                       placeholder={'Type here'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Mobile*</label>
                                                <input className={'form-control'} placeholder={'Type here'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-4'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Email address*</label>
                                                <input type={'email'} className={'form-control'}
                                                       placeholder={'Type here'}/>
                                            </div>
                                        </div>

                                        <div className={'col-md-12'}>
                                            <div className={'form-group mb-3'}>
                                                <label>Message</label>
                                                <textarea className={'form-control'} placeholder={'Type here'}
                                                          rows={'4'}/>
                                            </div>
                                        </div>
                                        <div className={'col-md-12'}>
                                            <div className={'form-group mb-3'}>
                                                <button className={'btn btn-default'}><span
                                                    className={'py-3'}>Submit</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><span>03</span> Production Line Operator</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li> Location: Ahmedabad Plant</li>
                                        <li> Experience: 1–4 Years</li>
                                        <li> Type: Full-Time</li>
                                    </ul>
                                    <p>
                                        As a Production Line Operator at ThermWin System Windows, you’ll play a key role
                                        in the precision manufacturing of our aluminium window systems. You will be
                                        responsible for operating machinery, maintaining quality standards, and ensuring
                                        smooth production flow in a fast-paced, automated environment.
                                    </p>
                                    <p>
                                        Send your resume to <a
                                        href={'mailto:careers@thermwinwindows.com'}>careers@thermwinwindows.com.</a>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </div>
                </div>
            </div>


        </div>


    );
}
