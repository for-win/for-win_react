import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

function RoomList(props) {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('');

    const fetchRooms = useCallback(
        async () => {
            try {
                const body =  await axios.get('http://localhost:3000/room/leagueoflegends');
                setRooms(body.data.data);
                setStatus(body.data.status);
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
    if (!rooms) return <div>nodata</div>;

    return (
        <tables>
            <div>{status}</div>
            {rooms.map(room => (
                <tr>
                    <td>{room.secret}</td>
                    <td>{room.code}</td>
                    <td>{room.memberCnt}/{room.max}</td>
                    <td>{room.type}</td>
                    <td>{room.user.name}</td>
                </tr>
            ))}
        </tables>
    );
}

export default RoomList;
