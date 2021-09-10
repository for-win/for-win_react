import React, { useState, useEffect, useCallback } from "react";
import axios from 'axios';

function RoomList(props) {
    const [rooms, setRooms] = useState(null);
    const [error, setError] = useState(null);
    const [config, setConfig] = useState('null');

    const fetchRooms = useCallback(
        async () => {
            const res = await axios({
                method: 'GET',
                url: '/room/leagueoflegends',
                baseURL: 'http://3.37.245.109:3000/'
            });
            try {
                setRooms(res.data);
                setConfig(res.config);
            } catch (e) {
                console.log(e);
                setError(e);
            }
        },
        [],
    );

    useEffect(()=> {
        fetchRooms();
    }, [fetchRooms]);
    if (error) return <div>{error.message}</div>;
    if (!rooms) return <div>{rooms}</div>;

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
