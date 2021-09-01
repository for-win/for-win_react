import React, { useState, useEffect } from "react";
import axios from 'axios';
const config = require('../../config');

function RoomList(props) {
    const [rooms, setRooms] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('http://'+config.IP+':'+config.PORT+'/room/');

    useEffect(()=> {
        const fetchRooms = async () => {
            try {
                setError(null);
                setRooms(null);
                setUrl(url+props.gameType);
                const response = await axios.get(url);
                setRooms(response.data);
            } catch (e) {
                console.log(e);
                setError(e);
            }
        };

        fetchRooms();
    }, [rooms, url]);
    if (error) return <div><a href={url}>{error.message}</a></div>;
    if (!rooms) return null;

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
