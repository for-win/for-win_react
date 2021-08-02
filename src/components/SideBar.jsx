import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <StyledSide>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
        </StyledSide>
    );
    
}

const StyledSide = styled.div`
    background-color: #232125;
    width: 5%;
    height: 100%;
    display: flex;
    position:absolute;
    top: 0px;
    left:0px;
`;

const StyledBurger = styled.div`
    width: 70%;
    height: 5%;
    top: 5%;
    left: 15%;
    display: flex;
    position: absolute;

    div:nth-child(1) {
        width: 95%;
        height: 10%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 30%;
    }
    div:nth-child(2) {
        width: 95%;
        height: 10%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 45%;
    }
    div:nth-child(3) {
        width: 95%;
        height: 10%;
        left: 2.5%;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 60%;
    }
`;

export default SideBar;