import React, { useState } from 'react';
import * as Falcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' 
            }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <Falcons.FaBars onClic={showSidebar}/>
                    </Link>
                </div>
            </IconContext.Provider>
        </>
    )
}