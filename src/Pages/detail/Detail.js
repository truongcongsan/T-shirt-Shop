import { Col, Row, Image, Select, InputNumber, Button, Rate, Modal } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import FeaturedProducts from '../../components/featured/FeaturedProducts';
import './detail.css'

const { Option } = Select;

export const cartArr = [];

function Detail({ data }) {
    //Ẩn hiện modal thông báo
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [modalContent, setmodalContent] = useState('')
    const mdSize = "Please choose the size of the product!"
    const mdAdd = "Product added to cart successfully!"

    const showModal = (val) => {
        setIsModalVisible(true);
        setmodalContent(val)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //Lấy id từ useParams
    const { id } = useParams()

    //Lấy giá trị thành tiền của sản phầm
    // const [total, settotal] = useState(0)
    const initialPrice = data.filter(prd => prd.id == id).map((prd) => prd.discount)

    //Ânr hiện hình ảnh
    const [visible, setVisible] = useState(false);

    //Lấy giá trị giỏ hàng
    const [cartValue, setCartValue] = useState({
        id: 0,
        size: '',
        quantily: 1,
        name: '',
        img: '',
        totalC: initialPrice[0]
    })


    //Chọn size sản phẩm
    function onChangeSize(value) {
        data.filter(card => card.id == id).map((card) => {
            setCartValue({
                ...cartValue,
                id: card.id,
                size: value,
                name: card.name,
                img: card.image,
                // totalC: card.discount
            });
        })
    }

    //Thêm sản phẩm
    function addToCartBtn() {
        //Nếu không chọn size => chọn size
        if (cartValue.size == "") {
            showModal(mdSize)
        }
        else {
            // if (cartArr.length < 2) {
            //     showModal(mdAdd)
            //     cartArr.push(cartValue)
            // }
            // else {
            showModal(mdAdd)
            cartArr.push(cartValue)
            for (let i = 0; i < cartArr.length; i++) {
                for (let j = i + 1; j < cartArr.length; j++) {
                    if (cartArr[i].id == cartArr[j].id && cartArr[i].size == cartArr[j].size) {
                        cartArr[i].quantily += cartArr[j].quantily;
                        cartArr[i].totalC += cartArr[j].totalC;
                        cartArr.splice(j, 1)
                        j = i
                    }
                }
            }
            // }
            console.log(cartArr);
        }
    }

    //Render chi tiết sản phẩm
    const detailRender = data.filter(card => card.id == id).map((card) => {
        function onChangeInputNumber(value) {
            // settotal(value * card.discount)
            setCartValue({
                ...cartValue,
                quantily: value,
                totalC: initialPrice * value
            })
        }

        return (
            <Row className='row-main' key={card.id}>
                <Col className='col-left' sm={24} md={24} lg={8}>
                    <Image
                        preview={{ visible: false }}
                        width={240}
                        src={card.image}
                        onClick={() => setVisible(true)}
                    />
                    <div style={{ display: 'none' }}>
                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                            <Image src={card.image} />
                        </Image.PreviewGroup>
                    </div>
                </Col>
                <Col className='col-right' sm={24} md={24} lg={16}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h2 className='detail-title'>{card.name}</h2>
                        {/* <span style={{ fontSize: '20px' }}>Total: {total} vnđ</span> */}
                    </div>
                    <div className='detail-price'>{card.price} vnđ</div>
                    <div className='detail-discount'>{card.discount} vnđ</div>
                    <div className='detail-rate'>
                        <Rate allowHalf defaultValue={card.rate} />
                    </div>
                    <div>
                        <span style={{ marginRight: '10px' }}>Select size:</span>
                        <Select
                            showSearch
                            placeholder="Select size"
                            optionFilterProp="children"
                            onChange={onChangeSize}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="S">S</Option>
                            <Option value="M">M</Option>
                            <Option value="L">L</Option>
                            <Option value="XL">XL</Option>
                            <Option value="XXL">XXL</Option>
                        </Select>
                    </div>
                    <div style={{ margin: '10px 0' }}>
                        <span style={{ marginRight: '21px' }}>Quantily:</span>
                        <InputNumber min={1} max={10} defaultValue={1} onChange={onChangeInputNumber} />
                    </div>
                    <Button type='primary' onClick={addToCartBtn}>Add to cart</Button>
                    <div className='introduce'>
                        <h3 className='introduce-title'>Introduce</h3>
                        <p>Pellentesque, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar . Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
                    </div>
                </Col>
            </Row>
        )
    })
    return (
        <>
            <Row style={{ marginTop: '80px' }}>
                <h2 className='title'>Product details</h2>
            </Row>

            {detailRender}

            <Modal title="Notification" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{modalContent}</p>
            </Modal>

            {/* <Row>
                <FeaturedProducts data={data} />
            </Row> */}
        </>
    )
}

export default Detail
