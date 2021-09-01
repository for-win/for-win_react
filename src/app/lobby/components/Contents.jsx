import React from 'react';
import styled from 'styled-components';
import RoomList from '../api/room';

function Contents (props) {
    return(
        <ContentsDefault>
            <RoomList gameType={props.gametype}/>
        </ContentsDefault>
    );
}

const ContentsDefault = styled.div`
    background-color:#37383d;
    width: 95%;
    height: 80%;
    position: absolute;
    top:20%;
    left:5%;
    z-index: 1;
`;

export default Contents;