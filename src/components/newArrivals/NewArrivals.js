import React from 'react'
import { Button, Card, Col, Row, Badge, Rate } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function NewArrivals({ data }) {
    const listItems = data.filter(getNewArrivals => getNewArrivals.category == "new").map((newArrivalsProducts) => {
        return (
            <Col xs={20} sm={8} md={7} lg={5} xl={5} style={{ margin: '16px' }} key={newArrivalsProducts.id}>
                <Badge.Ribbon text={((1 - newArrivalsProducts.discount / newArrivalsProducts.price) * 100).toFixed(0) + "% Off"} color="pink">
                    <Card
                        size='small'
                        hoverable
                        style={{ width: '100%', padding: '10px', position: 'relative' }}
                        cover={<img alt="example" src={newArrivalsProducts.image} />
                        }
                    >
                        <Meta title={newArrivalsProducts.name} />
                        <div className='pro-price'>{newArrivalsProducts.price} vnđ</div>
                        <div className='pro-discount'>{newArrivalsProducts.discount} vnđ</div>
                        <span className='membrane-top'></span>
                        <span className='membrane-left'></span>
                        <span className='membrane-right'></span>
                        <span className='membrane-bottom'>
                            <Link to={`/detail/${newArrivalsProducts.id}`}>
                                <Button type="primary">View more</Button>
                            </Link>
                        </span>
                        <Rate allowHalf defaultValue={newArrivalsProducts.rate} />
                    </Card>
                </Badge.Ribbon>
            </Col>
        )
    })
    return (
        <>
            <div className='container-title'>
                <h2 className='pro-title'>New Arrivals</h2>
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

export default NewArrivals
