import React from 'react'
import { cartArr } from './detail/Detail'
import { Table, Typography, Row, Button } from 'antd';

const { Text } = Typography;

function Cart() {

    const columns = [
        // {
        //     title: 'Id',
        //     dataIndex: 'id',
        //     key: 'key',
        // },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Img',
            dataIndex: 'img',
            key: 'img',
            render: img => <img style={{ width: '50px' }} src={img} />,
        },
        {
            title: 'Quantily',
            dataIndex: 'quantily',
            key: 'quantily',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.quantily - b.quantily,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Total',
            dataIndex: 'totalC',
            key: 'totalC',
            sorter: (a, b) => a.totalC - b.totalC,
        },
    ];


    return (
        <>
            <Row style={{ marginTop: '94px', marginBottom: '20px' }}>
                <h1 style={{fontSize: '42px'}}>Your cart</h1>
            </Row>
            <Row >
                <Table
                    style={{ width: '80%' }}
                    dataSource={cartArr}
                    columns={columns}
                    pagination={false}
                    bordered
                    scroll={{ x: 600 }}
                    title={() => 'Your cart'}
                    footer={() => <Button type='primary'>Buy</Button>}
                    summary={pageData => {
                        let totalQuantily = 0;
                        let totalTotalC = 0;

                        pageData.forEach(({ quantily, totalC }) => {
                            totalQuantily += quantily;
                            totalTotalC += totalC;
                        });

                        return (
                            <>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell colSpan={2}>Total</Table.Summary.Cell>
                                    {/* <Table.Summary.Cell ></Table.Summary.Cell> */}
                                    <Table.Summary.Cell>
                                        <Text type="danger">{totalQuantily}</Text>
                                    </Table.Summary.Cell>
                                    <Table.Summary.Cell></Table.Summary.Cell>
                                    <Table.Summary.Cell>
                                        <Text type="danger">{totalTotalC} vnđ</Text>
                                    </Table.Summary.Cell>
                                </Table.Summary.Row>
                            </>
                        );
                    }} />
            </Row>
        </>
    )
}

export default Cart