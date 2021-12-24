import React from 'react'
import { Button, Carousel } from 'antd';
import './carousel.css';
import { Link } from 'react-router-dom';

function AutoCarousel() {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <section className='carousel-item'>
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & up to 70% off!</p>
                        <Link to={"/shop"}>
                            <Button type="primary" style={{ marginBottom: '10px' }}>Shop Now</Button>
                        </Link>
                    </section>
                </div>
                <div>
                    <section className='carousel-item'>
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & up to 70% off!</p>
                        <Link to={"/shop"}>
                            <Button type="primary" style={{ marginBottom: '10px' }}>Shop Now</Button>
                        </Link>
                    </section>
                </div>
                <div>
                    <section className='carousel-item'>
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & up to 70% off!</p>
                        <Link to={"/shop"}>
                            <Button type="primary" style={{ marginBottom: '10px' }}>Shop Now</Button>
                        </Link>
                    </section>
                </div>
                <div>
                    <section className='carousel-item'>
                        <h4>Trade-in-offer</h4>
                        <h2>Super value deals</h2>
                        <h1>On all products</h1>
                        <p>Save more with coupons & up to 70% off!</p>
                        <Link to={"/shop"}>
                            <Button type="primary" style={{ marginBottom: '10px' }}>Shop Now</Button>
                        </Link>
                    </section>
                </div>
            </Carousel>
        </>
    )
}

export default AutoCarousel
