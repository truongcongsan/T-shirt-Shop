import React from 'react';
import './prds.css'
import { Button, Card, Col, Row, Badge, Rate } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function FeaturedProducts({ data }) {
    const listItems = data.filter(getFeatured => getFeatured.category == "featured").map((featuredProduct) => {
        return (
            <Col xs={20} sm={8} md={7} lg={5} xl={5} style={{ margin: '16px' }} key={featuredProduct.id}>
                <Badge.Ribbon text={((1 - featuredProduct.discount / featuredProduct.price) * 100).toFixed(0) + "% Off"} color="volcano">
                    <Card
                        size='small'
                        hoverable
                        style={{ width: '100%', padding: '10px', position: 'relative' }}
                        cover={<img alt="example" src={featuredProduct.image} />
                        }                  
                    >
                        <Meta title={featuredProduct.name} />
                        <div className='pro-price'>{featuredProduct.price} vnđ</div>
                        <div className='pro-discount'>{featuredProduct.discount} vnđ</div>
                        <span className='membrane-top'></span>
                        <span className='membrane-left'></span>
                        <span className='membrane-right'></span>
                        <span className='membrane-bottom'>
                            <Link to={`/detail/${featuredProduct.id}`}>
                                <Button type="primary">View more</Button>
                            </Link>
                        </span>
                        <Rate allowHalf defaultValue={featuredProduct.rate} />
                    </Card>
                </Badge.Ribbon>
            </Col>
        )
    })

    return (
        <>
            <div className='container-title'>
                <h2 className='pro-title'>Featured Products</h2>
                <p>Summer Collection New Morden Design</p>
            </div>
            <div className="site-card-wrapper">
                <Row>
                    {listItems}
                </Row>
            </div>
        </>
    )
}

export default FeaturedProducts
