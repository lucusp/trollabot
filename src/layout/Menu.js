import React from 'react';
import { FaTachometerAlt, FaQuoteLeft } from 'react-icons/fa';


const Menu = () => (
    <div class="menu">
        <div class="trolla-title">trollabot</div>
            <ul class="menu-list">
                <a href="#"><li class="menu-item"><FaTachometerAlt /> Dashboard</li></a>
                <a href="#"><li class="menu-item active-item"><FaQuoteLeft /> Quotes</li></a>
            </ul>
    </div>
)

export default Menu;