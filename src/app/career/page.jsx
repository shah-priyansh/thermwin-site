"use client";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

export default function Location() {
    // Dynamic jobs array - easy to update in the future
    const jobs = [
        {
            id: "0",
            title: "Sales Executive",
            location: "Multiple Locations",
            experience: "1-3 Years",
            type: "Full-Time",
            description: "Join our sales team to promote and sell our premium aluminium window systems. Build relationships with customers and drive business growth.",
            hasForm: true
        },
        {
            id: "1", 
            title: "Production Line Operator",
            location: "Surat",
            experience: "1-4 Years",
            type: "Full-Time",
            description: "As a Production Line Operator at ThermWin System Windows, you'll play a key role in the precision manufacturing of our aluminium window systems. You will be responsible for operating machinery, maintaining quality standards, and ensuring smooth production flow in a fast-paced, automated environment.",
            hasForm: true
        }
    ];

    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error message when user starts typing
        if (errorMessage) {
            setErrorMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Clear previous messages
        setErrorMessage('');
        setSuccessMessage('');
        
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validate required fields
        if (!formData.fullName || !formData.mobile || !formData.email) {
            setErrorMessage('Please fill in all required fields');
            return;
        }
        
        // Validate email format
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        // Determine which job position based on the form's parent accordion
        const formElement = e.target;
        const accordionItem = formElement.closest('.accordion-item');
        const accordionHeader = accordionItem?.querySelector('.accordion-header');
        const jobTitle = accordionHeader?.textContent?.includes('Sales Executive') 
            ? 'Sales Executive' 
            : 'Production Line Operator';

        // Format the message for WhatsApp
        const whatsappMessage = `*New Career Application - ${jobTitle}*

*Full Name:* ${formData.fullName}
*Mobile:* ${formData.mobile}
*Email:* ${formData.email}
*Message:* ${formData.message || 'No message provided'}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number from the contact details
        const whatsappNumber = '918154804765';
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Clear form after submission
        setFormData({
            fullName: '',
            mobile: '',
            email: '',
            message: ''
        });
        
        // Show success message
        setSuccessMessage('Application submitted successfully');
    };

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
                            At ThermWin, we're not just crafting premium aluminium window systems—we're building a team of passionate professionals driven by precision, innovation, and purpose. Whether you're a seasoned expert or an emerging talent, your journey of growth and impact starts here.
                        </p>
                    </div>
                    <div className={'career-collapse wow animate__animated animate__fadeInUp'}>

                        <Accordion defaultActiveKey="0">
                            {jobs.map((job, index) => (
                                <Accordion.Item key={job.id} eventKey={job.id}>
                                    <Accordion.Header>
                                        <span>{String(index + 1).padStart(2, '0')}</span> {job.title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Location: {job.location}</li>
                                            <li>Experience: {job.experience}</li>
                                            <li>Type: {job.type}</li>
                                        </ul>
                                        <p>{job.description}</p>
                                        
                                        {job.hasForm && (
                                            <form onSubmit={handleSubmit}>
                                                <div className={'row'}>
                                                    <div className={'col-md-4'}>
                                                        <div className={'form-group mb-3'}>
                                                            <label>Full Name*</label>
                                                            <input 
                                                                type={'text'} 
                                                                name="fullName"
                                                                value={formData.fullName}
                                                                onChange={handleInputChange}
                                                                className={'form-control'}
                                                                placeholder={'Type here'}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-md-4'}>
                                                        <div className={'form-group mb-3'}>
                                                            <label>Mobile*</label>
                                                            <input 
                                                                type="tel"
                                                                name="mobile"
                                                                value={formData.mobile}
                                                                onChange={handleInputChange}
                                                                className={'form-control'} 
                                                                placeholder={'Type here'}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-md-4'}>
                                                        <div className={'form-group mb-3'}>
                                                            <label>Email address*</label>
                                                            <input 
                                                                type={'email'} 
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                className={'form-control'}
                                                                placeholder={'Type here'}
                                                                required
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className={'col-md-12'}>
                                                        <div className={'form-group mb-3'}>
                                                            <label>Message</label>
                                                            <textarea 
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleInputChange}
                                                                className={'form-control'} 
                                                                placeholder={'Type here'}
                                                                rows={'4'}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={'col-md-12'}>
                                                        <div className={'form-group mb-3'}>
                                                            <button type="submit" className={'btn btn-default'}>
                                                                <span className={'py-3'}>Submit</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Error Message */}
                                                {errorMessage && (
                                                    <div className="alert alert-danger mt-3" role="alert">
                                                        {errorMessage}
                                                    </div>
                                                )}
                                                
                                                {/* Success Message */}
                                                {successMessage && (
                                                    <div className="alert alert-success mt-3" role="alert">
                                                        {successMessage}
                                                    </div>
                                                )}
                                            </form>
                                        )}
                                        
                                        <p className="mt-3">
                                            Or send your resume to <a
                                            href={'mailto:thermwinsystems@gmail.com'}>thermwinsystems@gmail.com</a>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                    </div>
                </div>
            </div>


        </div>


    );
}
