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
        </nav>
    );
    
}


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

export default SideBar;