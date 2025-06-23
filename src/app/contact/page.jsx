'use client';

import { useState } from 'react';

export default function Location() {
    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        email: '',
        phone: '',
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
        if (!formData.fullName || !formData.city || !formData.email || !formData.phone) {
            setErrorMessage('Please fill in all required fields');
            return;
        }
        
        // Validate email format
        if (!emailRegex.test(formData.email)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        // Format the message for WhatsApp
        const whatsappMessage = `*New Contact Form Submission*

*Full Name:* ${formData.fullName}
*City/Location:* ${formData.city}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Message:* ${formData.message || 'No message provided'}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // WhatsApp number from the contact details (you can change this to your preferred number)
        const whatsappNumber = '918154804765';
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Clear form after submission
        setFormData({
            fullName: '',
            city: '',
            email: '',
            phone: '',
            message: ''
        });
        
        // Show success message
        setSuccessMessage('Form submitted successfully');
    };

    return (
        <div>
            <div className={'page-banner position-relative'}>
                <div className={'page-banner-img wow animate__animated animate__fadeIn'}>
                    <img
                        className={'img-fluid'}
                        src="/img/contact-us.jpg"
                        alt="logo" />
                </div>
                <div className={'page-content text-center wow animate__animated animate__fadeInUp'}>
                    <div className={'container'}>
                        <h3><span>Contact Us</span></h3>
                    </div>
                </div>
            </div>

            <div className={'contact-detail-main'}>
                <div className={'contact-detail-list py-5'}>
                    <div className={'container'}>
                        <div className={'cd-card-list'}>
                            <div className={'cd-card'}>
                                <p className={'h5'}>Call Us</p>
                                <p className={'h3'}>+91 815 480 4765</p>
                                <small>[ Mon - Sat: 9:00 AM – 7:00 PM ]</small>
                                <div className={'cd-icon'}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_84_1373)">
                                            <path
                                                d="M8.39619 1.15314C8.03525 0.281269 7.08369 -0.182793 6.17432 0.0656443L2.04932 1.19064C1.23369 1.41564 0.666504 2.15627 0.666504 3.00002C0.666504 14.5969 10.0696 24 21.6665 24C22.5103 24 23.2509 23.4328 23.4759 22.6172L24.6009 18.4922C24.8493 17.5828 24.3853 16.6313 23.5134 16.2703L19.0134 14.3953C18.2493 14.0766 17.3634 14.2969 16.8431 14.9391L14.9493 17.25C11.6493 15.6891 8.97744 13.0172 7.4165 9.71721L9.72744 7.82814C10.3696 7.30314 10.5899 6.42189 10.2712 5.65783L8.39619 1.15783V1.15314Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_84_1373">
                                                <rect width="24" height="24" fill="white"
                                                    transform="translate(0.666504)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className={'cd-card'}>
                                <p className={'h5'}>mail Us</p>
                                <p className={'h6'}>thermwinsystems@gmail.com</p>
                                <div className={'cd-icon'}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_84_1380)">
                                            <path
                                                d="M2.58301 3C1.34082 3 0.333008 4.00781 0.333008 5.25C0.333008 5.95781 0.66582 6.62344 1.23301 7.05L11.433 14.7C11.9674 15.0984 12.6986 15.0984 13.233 14.7L23.433 7.05C24.0002 6.62344 24.333 5.95781 24.333 5.25C24.333 4.00781 23.3252 3 22.083 3H2.58301ZM0.333008 8.25V18C0.333008 19.6547 1.67832 21 3.33301 21H21.333C22.9877 21 24.333 19.6547 24.333 18V8.25L14.133 15.9C13.0643 16.7016 11.6018 16.7016 10.533 15.9L0.333008 8.25Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_84_1380">
                                                <rect width="24" height="24" fill="white"
                                                    transform="translate(0.333008)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                            </div>
                            <div className={'cd-card'}>
                                <p className={'h5'}>Reach Us</p>
                                <p className={'h6'}>Plot No. 25, Industrial Estate,<br /> Sector 63, Noida –
                                    201301, <br />Uttar
                                    Pradesh, India</p>
                                <div className={'cd-icon'}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.1109 23.4C15.5156 20.3906 21 13.0969 21 9C21 4.03125 16.9688 0 12 0C7.03125 0 3 4.03125 3 9C3 13.0969 8.48438 20.3906 10.8891 23.4C11.4656 24.1172 12.5344 24.1172 13.1109 23.4ZM12 6C12.7956 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9C15 9.79565 14.6839 10.5587 14.1213 11.1213C13.5587 11.6839 12.7956 12 12 12C11.2044 12 10.4413 11.6839 9.87868 11.1213C9.31607 10.5587 9 9.79565 9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6Z"
                                            fill="white" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'contact-form-div pt-3'}>
                    <div className={'contact-form-title text-center mb-5'}>
                        <h1 className={'mb-3'}>Send Us a Message</h1>
                        <p>We'd love to hear from you. Use the form below to ask a question or request more details.</p>
                    </div>
                    <form onSubmit={handleSubmit} className={'contact-form'}>
                        <div className={'row'}>
                            <div className={'col-md-6'}>
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
                            <div className={'col-md-6'}>
                                <div className={'form-group mb-3'}>
                                    <label>City / Location*</label>
                                    <input
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className={'form-control'}
                                        placeholder={'Type here'}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={'col-md-6'}>
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
                            <div className={'col-md-6'}>
                                <div className={'form-group mb-3'}>
                                    <label>Phone number*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={'form-control'}
                                        placeholder={'Type here'}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={'col-md-12'}>
                                <div className={'form-group mb-3'}>
                                    <label>Message / Project Details</label>
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
                                    <button type="submit" className={'btn btn-default w-100'}>
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
                </div>

            </div>


        </div>


    );
}
