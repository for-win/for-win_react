import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const showSidebar = () => setOpen(!open);
    return (
        <nav className={open ? 'side-bar active' : 'side-bar'}>
            <Link to="#">
                <StyledBurger open={open} onClick={showSidebar}>
                    <div/>
                    <div/>
                    <div/>
                </StyledBurger>
            </Link>
            
            <SideBarItems>
                {ItemData.map((item, index) => {
                    return (
                        <Link to={item.path}>
                            <li key={index} className='side-bar-item'>
                                {open ? <span>{item.icon}{item.title}</span> : 
                                <span>{item.icon}</span>}
                            </li>
                        </Link>
                    )
                })}
            </SideBarItems>
        </nav>
    );
    
}

// styles
const StyledBurger = styled.div`
    width: 25px;
    height: 5%;
    top: 3%;
    left: 7.5px;
    display: flex;
    position: absolute;

    div:nth-child(1) {
        width: 95%;
        height: 5%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 30%;
    }
    div:nth-child(2) {
        width: 95%;
        height: 5%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 50%;
    }
    div:nth-child(3) {
        width: 95%;
        height: 5%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 70%;
    }
`;

const SideBarItems = styled.ul`
    width: 100%;
    margin-top: 100px;
    a {
        text-decoration: none;
    }
`;

// list: sidebar-item
const ItemData = [
    {
        title: '리그오브레전드',
        path: '#',
        icon: <img className="side-bar-icon" src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/ko-kr/production/ko-kr/static/favicon-0cf29ce019f7cd1e7b24f85ab6ff97da.ico"/>
    },
    {
        title: '배틀그라운드',
        path: '#',
        icon: <img className="side-bar-icon" src="//t1.kakaocdn.net/gamepub/pub/battlegrounds/favicon.ico"/>
    },
    {
        title: '오버워치',
        path: '#',
        icon: <img className="side-bar-icon" src="https://static.playoverwatch.com/img/favicon-696bc07714.ico"/>
    }
];

export default SideBar;