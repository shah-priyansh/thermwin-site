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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span>02</span> Sales Executive</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
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
                                        As a Production Line Operator at ThermWin System Windows, you’ll play a key role in the precision manufacturing of our aluminium window systems. You will be responsible for operating machinery, maintaining quality standards, and ensuring smooth production flow in a fast-paced, automated environment.
                                    </p>
                                    <p>
                                        Send your resume to <a href={'mailto:careers@thermwinwindows.com'} >careers@thermwinwindows.com.</a>
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
