import styled from "styled-components";
import { Link } from 'react-router-dom';
import '../css/listbar.css'

const ListBar = () => {
    return (
        <ListDefault>
            <MenuBar>
                {MenuComponent}
            </MenuBar>
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

const MenuBar = styled.ul`
    list-style: none;
    a {
        text-decoration: none;
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

// component: menu
const MenuComponent =
    MenuData.map((item, index)=>{
        return (
            <li key={index} className='list-bar-arrange'>
                <span className='list-bar-menu-item'>
                    <Link to={item.path}>{index===1 ?
                        <b>{item.title}</b> : item.title}</Link>
                </span>
            </li>
            
        );
    })
;

export default ListBar;
