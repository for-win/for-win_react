import React, { useState, useEffect, useCallback } from "react";

function RoomList(props) {
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);

    const fetchRooms = useCallback(
        () => {
            fetch('http://3.37.245.109:3000/room/leagueoflegends')
            .then(res => {
                return res.json();
            })
            .then(
                (result) => {
                setRooms(result.data);
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
    if (error) return <div>{error.toString()}</div>;
    if (!rooms) return <div>nodata</div>;

    return (
        <tables>
            <div>success</div>
            {rooms.map(room => (
                <tr>
                    {/* <td>{room.secret}</td>
                    <td>{room.code}</td>
                    <td>{room.memberCnt}/{room.max}</td>
                    <td>{room.type}</td>
                    <td>{room.user.name}</td> */}
                    <td>{room.user.name}</td>
                </tr>
            ))}
        </tables>
    );
}

export default RoomList;
