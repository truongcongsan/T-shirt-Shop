import { UpSquareFilled } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import React, { useState } from 'react'

function ScrollButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <UpSquareFilled className='btn-scroll' onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }} />
    );
}

export default ScrollButton
