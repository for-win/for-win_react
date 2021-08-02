import React from 'react';
import styled from 'styled-components';

class Contents extends React.Component {
    render() {
        return(
            <ContentsDefault>

            </ContentsDefault>
        );
    }
}

const ContentsDefault = styled.div`
    background-color:#37383d;
    width: 95%;
    height: 85%;
    position: absolute;
    top:15%;
    left:5%;
`;

export default Contents;