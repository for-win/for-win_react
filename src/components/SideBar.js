import React from 'react';
import styled from 'styled-components';
import '../css/menu.css';

class SideBar extends React.Component {
    render(){
        return (
            <StyledSide>
                <StyledBurger>
                    <div class="burger-menu"/>
                    <div class="burger-menu"/>
                    <div class="burger-menu"/>
                </StyledBurger>
            </StyledSide>
        );
    }
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
    // background-color: green;
    width: 70%;
    height: 5%;
    top: 5%;
    left: 15%;
    display: flex;
    justify-content: space-around;
    position: absolute;
`;

export default SideBar;