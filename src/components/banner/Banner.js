import React from 'react';
import { Button } from 'antd';
import './banner.css';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='banner'>
            <h4>Repair Services</h4>
            <h2>Up to <span>70% Off</span> - All t-Shirts & Accessories</h2>
            <Link to={'/shop'}>
                <Button type='primary'>Explore More</Button>
            </Link>
        </div>
    )
}

export default Banner
