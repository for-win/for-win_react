import React, { useState, useEffect, useCallback } from "react";
import fetch from 'fetch-with-proxy';

function RoomList(props) {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');

    const fetchRooms = useCallback(
        () => {
            fetch('http://3.37.245.109:3000/room/leagueoflegends')
            .then(res => {
                setStatus(res.status);
                return res.text()})
            .then(
                (result) => {
                    setRooms(result);
                    console.log(result);
                },
                (error) => {
                    setError(error);
                }
            )
        },
        [],
    );

    useEffect(()=> {
        fetchRooms();
    }, []);
    if (error) return <div>{rooms}</div>;
    if (!rooms) return <div>nodata</div>;

    return (
        <tables>
            <div>{rooms}</div>
            {/* {rooms.data.map(room => (
                <tr>
                    <td>{room.secret}</td>
                    <td>{room.code}</td>
                    <td>{room.memberCnt}/{room.max}</td>
                    <td>{room.type}</td>
                    <td>{room.user.name}</td>
                </tr>
            ))} */}
        </tables>
    );
}

export default RoomList;
