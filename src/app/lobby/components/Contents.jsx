import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { roomBody } from "../api";

function Contents (props) {
    return(
        <ContentsDefault>
            <RoomList gameType={props.gameType}/>
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

const RoomList = function(props) {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');

    const fetchRooms = useCallback(
        async () => {
            try {
                const body =  await roomBody(props.gameType);
                setRooms(body.data.data);
                setStatus(body.status);
            } catch(error) {
                console.error(error);
                setError(error);
            }
        }, [],
    );

    useEffect(()=> {
        fetchRooms();
    }, []);
    if (error) return <div>{error.status}</div>;
    if (!rooms) return <div>{status}: 데이터 없음</div>;

    return (
        <tables>
            {rooms.map(room => (
                <tr>
                    <td>{room.secret}</td>
                    <td>{room.code}</td>
                    <td>{room.memberCnt/room.max}</td>
                    <td>{room.type}</td>
                    <td>{room.user.name}</td>
                </tr>
            ))}
        </tables>
    );
}

export default Contents;