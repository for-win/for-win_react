import styled from "styled-components";
import { Route, Link } from 'react-router-dom';
import '../css/listbar.css'

const ListBar = () => {
    return (
        <ListDefault>
            <ListUl>
                {MenuComponent}
            </ListUl>
            <ListUl>
                
            </ListUl>
        </ListDefault>
    );
}

// styles
const ListDefault = styled.div`
    background-color: #323132;
    position: absolute;
    width: 95%;
    height: 20%;
    display: flex;
    left:5%;
    z-index: 1;
`;

const ListUl = styled.ul`
    list-style: none;
    a { // MenuBar의 자식요소 중 Link의 style
        text-decoration: none;
        color: #f5f5f5;
    }
`;

// list: menu
const MenuData = [
    {
        title: '홈',
        path: '/home'
    },
    {
        title: '로비',
        path: '#'
    },
    {
        title: '친구',
        path: '/friend'
    }
];

// list: filter

// component: menu
const MenuComponent =
    MenuData.map((item, index)=>{
        return (
            <li key={index} className='list-bar-arrange'>
                <span className='list-bar-item'>
                    <Link to={item.path}>{index===1 ?
                        <b>{item.title}</b> : item.title}</Link>
                </span>
            </li>
            
        );
    })
;

// component: filter


export default ListBar;
