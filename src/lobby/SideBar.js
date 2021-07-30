import React from 'react';
import styled from 'styled-components';

class SideBar extends React.Component {
    render(){
        return (
            <SideDefault>
    
            </SideDefault>
        );
    }
}

const SideDefault = styled.div`
    background-color: #232125;
    width: 5%;
    height: 100%;
    display: flex;
    position:absolute;
    top: 0px;
    left:0px;
`;

export default SideBar;