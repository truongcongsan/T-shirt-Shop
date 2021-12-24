import { Row } from 'antd'
import React from 'react'
import ShopListProducts from '../components/shopListProducts/ShopListProducts'

function Shop({data}) {
    return (
        <Row style={{ marginTop: '94px'}}>
            <ShopListProducts data={data}/>
        </Row>
    )
}

export default Shop
