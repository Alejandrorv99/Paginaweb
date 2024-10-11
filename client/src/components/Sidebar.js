import React from 'react';
import './Sidebar.css';  // Los estilos
import { Link } from 'react-router-dom';  // Importar Link de React Router
import logo from '../assets/LogoSideBar.png';  // Importar el logo

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
                <Link to="/home">  {/* Envolver el logo con el componente Link */}
                    <img src={logo} alt="BandsOffAds" className="logo" />
                </Link>
            </div>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/orders">Orders</a></li>
                <li><a href="/tickets">Tickets</a></li>
                <li><a href="/video-ads">Video Ads</a></li>
                <li><a href="/ai-ugc-ads">AI UGC Ads</a></li>
                <li><a href="/classic-ugc-ads">Classic UGC Ads</a></li>
                <li><a href="/bulk-packages">Bulk Packages</a></li>
                <li><a href="/vip-members">VIP Members</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/affiliate">Affiliate</a></li>
                <li><a href="/payment">Payment</a></li>
                <li><a href="/invoices">Invoices</a></li>
                <li><a href="/subscriptions">Subscriptions</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
