import React from 'react';
import { FaTachometerAlt, FaQuoteLeft } from 'react-icons/fa';


const Menu = () => (
    <div className="menu">
        <div className="trolla-title">trollabot</div>
            <ul className="menu-list">
                <a href="#"><li className="menu-item"><FaTachometerAlt /> Dashboard</li></a>
                <a href="#"><li className="menu-item active-item"><FaQuoteLeft /> Quotes</li></a>
            </ul>
    </div>
)

export default Menu;