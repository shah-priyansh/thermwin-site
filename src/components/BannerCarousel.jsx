import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerCarousel = () => {
    return (
        <Carousel controls={false} interval={3000} touch={true}>
            <Carousel.Item>
                <div className={'banner-div position-relative'}>
                    <img
                        className={'img-fluid'}
                        src="/img/slider1.jpg"
                        alt="img"
                    />
                    <div className={'container'}>
                        <div className='banner-content'>
                            <div>
                                <span>Discover the Magic of Gifts</span>
                            </div>
                            <h1>Toys, Collectibles, and More for Every Age!</h1>
                            <p>
                                From vintage toys to unique home décor, Griff's Gift Shop brings joy to everyone.
                            </p>
                            <a href={'#'} className='btn btn-primary'>
                                Explore Unique Gifts
                            </a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={'banner-div position-relative'}>
                    <img
                        className={'img-fluid'}
                        src="/img/slider1.jpg"
                        alt="img"
                    />
                    <div className={'container'}>
                        <div className='banner-content'>
                            <div>
                                <span>Discover the Magic of Gifts</span>
                            </div>
                            <h1>Toys, Collectibles, and More for Every Age!</h1>
                            <p>
                                From vintage toys to unique home décor, Griff's Gift Shop brings joy to everyone.
                            </p>
                            <a href={'#'} className='btn btn-primary'>
                                Explore Unique Gifts
                            </a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={'banner-div position-relative'}>
                    <img
                        className={'img-fluid'}
                        src="/img/slider1.jpg"
                        alt="img"
                    />
                    <div className={'container'}>
                        <div className='banner-content'>
                            <div>
                                <span>Discover the Magic of Gifts</span>
                            </div>
                            <h1>Toys, Collectibles, and More for Every Age!</h1>
                            <p>
                                From vintage toys to unique home décor, Griff's Gift Shop brings joy to everyone.
                            </p>
                            <a href={'#'} className='btn btn-primary'>
                                Explore Unique Gifts
                            </a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerCarousel;
