import React from 'react';
import { Row, Col } from 'antd';
import AutoCarousel from '../components/carousel/AutoCarousel';
import FeaturedProducts from '../components/featured/FeaturedProducts';
import Banner from '../components/banner/Banner';
import NewArrivals from '../components/newArrivals/NewArrivals';

function Home({ data }) {
    const prdRowStyle = {
        paddingBottom: '50px',
    }
    const crsRowStyle = {
        marginTop: '94px',
        backgroundColor: '#1890ff',
    }
    return (
        <>
            <Row style={crsRowStyle}>
                <Col>
                    <AutoCarousel />
                </Col>
            </Row>

            <Row style={prdRowStyle}>
                <FeaturedProducts data={data} />
            </Row>

            <Row>
                <Banner />
            </Row>

            <Row>
                <NewArrivals data={data} />
            </Row>
        </>
    )
}

export default Home
