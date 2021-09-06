import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';
const config = require('../../config');

function RoomList(props) {
    const [rooms, setRooms] = useState(null);
    const [error, setError] = useState(null);
    const [config, setConfig] = useState('null');
    const url = '/room/'+props.gameType;

    const fetchRooms = useCallback(
        async () => {
            const res = await axios({
                method: 'GET',
                url: url,
            });
            try {
                setRooms(res.data);
                setConfig(res.config);
            } catch (e) {
                console.log(e);
                setError(e);
            }
        },
        [url],
    );

    useEffect(()=> {
        fetchRooms();
    }, [fetchRooms]);
    if (error) return <div><a href={url}>{error.message}</a></div>;
    if (!rooms) return <div>{config}</div>;

    return (
        <tables>
            <div>success</div>
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
