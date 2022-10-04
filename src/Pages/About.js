import { GithubOutlined, FacebookFilled, InstagramFilled , YoutubeFilled } from '@ant-design/icons/lib/icons'
import { Col, Image, Row, Tooltip } from 'antd'
import React from 'react'

function About() {
    const alTemsImg = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }
    const alignText = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'start',
    }
    return (
        <>
            <Row style={{ marginTop: '94px' }}>
                <h1 style={{ fontSize: '42px' }}>About me</h1>
            </Row>
            <Row >
                <Col style={alTemsImg} span={20} sm={20} md={10} lg={9} xl={9}>
                    <Image
                        width={300}
                        src='/img/avatar.jpg' />
                </Col>
                <Col style={alignText} span={20} sm={20} md={15} lg={15} xl={15} >
                    <h2 style={{ fontSize: '32px' }}>Hi! My name is Truong, </h2>
                    <h3 style={{ fontSize: '22px' }}>I'm twenty one year old.</h3>
                    <h3 style={{ fontSize: '22px' }}>My hometown is in Ninh Binh city. Currently I live in Ha Noi city.</h3>
                    <h3 style={{ fontSize: '22px' }}>
                        I am a student at University of Economics - Technology for Industries,
                    </h3>
                    <h3 style={{ fontSize: '22px' }}>Faculty of Information Technology.</h3>
                    <h3 style={{ fontSize: '22px' }}>My dream is to be a front-end developer.</h3>

                    <div>
                        <span>Fllow me: </span>
                        <Tooltip title="Github" color={'#000'} key={'#000'}>
                            <a href='https://github.com/truongcongsan/T-shirt-Shop'><GithubOutlined style={{ color: '#000', fontSize: '30px', margin: '10px' }} /></a>
                        </Tooltip>
                        <Tooltip title="Facebook" color={'#4267b2'} key={'#4267b2'}>
                            <a href='https://www.facebook.com/profile.php?id=100018505067961'><FacebookFilled style={{ color: '#4267b2', fontSize: '30px', margin: '10px' }} /></a>
                        </Tooltip>
                        <Tooltip title="Twitter" color={'#1DA1F2'} key={'#1DA1F2'}>
                            <a href='https://www.instagram.com/t_rexcongsan/'><InstagramFilled style={{ color: '#FBAD50', fontSize: '30px', margin: '10px' }} /></a>
                        </Tooltip>
                        <Tooltip title="Youtube" color={'#EA4335'} key={'#EA4335'}>
                            <a href='https://www.youtube.com/channel/UCQrgR7_4p3oDwjvJSb2yXCw'><YoutubeFilled style={{ color: '#EA4335', fontSize: '30px', margin: '10px' }} /></a>
                        </Tooltip>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default About
