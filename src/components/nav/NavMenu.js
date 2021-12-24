import React from 'react';
import "./navStyle.css";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { WindowsFilled, ShoppingOutlined } from '@ant-design/icons';

//Layout
const { Header } = Layout;

function NavMenu() {
    return (
        <>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <Link to="/" className="logo">
                    <WindowsFilled style={{ color: "#1890ff", fontSize: "2.2rem" }} />
                </Link>

                <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/shop">Shop</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/contact">Contact</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/cart">
                        <ShoppingOutlined style={{ fontSize: "1.4rem" }}/>
                        </Link>
                    </Menu.Item>
                </Menu>

            </Header>
        </>
    )
}

export default NavMenu
