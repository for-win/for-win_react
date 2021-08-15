import React from "react";
import styled from "styled-components";

class ListBar extends React.Component {
    render() {
        return (
            <ListDefault>

            </ListDefault>
        );
    }
}

const ListDefault = styled.div`
    background-color: #323132;
    width: 95%;
    height: 20%;
    display: flex;
    position:absolute;
    left:5%;
    z-index: 1;
`;

export default ListBar;
