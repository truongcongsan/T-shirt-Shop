import React, { useState, useCallback, useEffect } from 'react'
import { Button, Card, Col, Pagination, Badge, Rate, Row, Input, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Search } = Input;

function ShopListProducts({ data }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const [pagination, setpagination] = useState({
        minValue: 0,
        maxValue: 8
    })

    const onSearch = value => {
        setSearchTerm(value);
    }

    useEffect(() => {
        const results = data.filter(test =>
            test.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = useCallback((value) => {
        if (value <= 1) {
            setpagination({
                minValue: 0,
                maxValue: 8
            })
        } else {
            setpagination({
                minValue: pagination.maxValue,
                maxValue: value * 8
            });
        }
    }, [pagination])

    const listItems = searchResults.slice(pagination.minValue, pagination.maxValue).map((product) => {
        return (
            <Col xs={20} sm={8} md={7} lg={5} xl={5} style={{ margin: '16px' }} key={product.id}>
                <Badge.Ribbon text={((1 - product.discount / product.price) * 100).toFixed(0) + "% Off"} color="red">
                    <Card
                        size='small'
                        hoverable
                        style={{ width: '100%', padding: '10px', position: 'relative' }}
                        cover={<img alt="example" src={product.image} />
                        }
                    >
                        <Meta title={product.name} />
                        <div className='pro-price'>{product.price} vnđ</div>
                        <div className='pro-discount'>{product.discount} vnđ</div>
                        <span className='membrane-top'></span>
                        <span className='membrane-left'></span>
                        <span className='membrane-right'></span>
                        <span className='membrane-bottom'>
                            <Link to={`/detail/${product.id}`}>
                                <Button type="primary">View more</Button>
                            </Link>
                        </span>
                        <Rate allowHalf defaultValue={product.rate} />
                    </Card>
                </Badge.Ribbon>
            </Col>
        )
    })
    return (
        <>
            <Row style={{margin: '15px auto'}}>
                <Space>
                    <Search
                        style={{zIndex: '0'}}
                        enterButton
                        defaultValue={searchTerm}
                        placeholder="Enter name..."
                        onSearch={onSearch}
                    />
                </Space>

            </Row>
            <Row>
                {listItems}
            </Row>
            <Row style={{width: '100%'}}>
                <Col style={{ marginTop: '30px' }}>
                    <Pagination defaultCurrent={1}
                        defaultPageSize={8}
                        onChange={handleChange}
                        total={searchResults.length} />
                </Col>
            </Row>
        </>
    )
}

export default ShopListProducts
