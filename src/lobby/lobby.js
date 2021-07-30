import '../css/lobby.css';
import styled from 'styled-components';
import SideBar from './SideBar';

function lobby() {
    return (
        <Container>
            <div className="box">
                <SideBar/>
                <div className="list-bar"></div>
                <div className="contents"></div>
            </div>
        </Container>
    );
}

// https://codingbroker.tistory.com/6
const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #282729;
`;

export default lobby;