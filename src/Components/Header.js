import React from "react";
import "../reset.css";
import "./Header.css";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => { 
    return (
        <header className="header">
            <ul className="header-tabs">
                <li>
                    <Link to="/" className="logo-and-name">
                        <FaMoneyCheckAlt className="logo" />
                        <h1 className="header-name">Eckspence Traccerr</h1>
                    </Link>
                </li>
                <li><Link to="/accounts" className="header-tab">Accounts</Link></li>
                <li><Link to="/categories" className="header-tab">Categories</Link></li>
                <li><Link to="/expenses" className="header-tab">Expenses</Link></li>
                <li><Link to="/reports" className="header-tab">Reports</Link></li>
            </ul>
        </header>
    )
};

export default Header;