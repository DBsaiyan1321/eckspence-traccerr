import React from "react";
import "../reset.css";
import "./Header.css";

const Header = () => { 
    return (
        <header className="header">
            <h1 className="header-name">Eckspence Traccerr</h1>
            <ul className="header-tabs">
                <li className="header-tab">Categories</li>
                <li className="header-tab">Accounts</li>
                <li className="header-tab">Expenses</li>
            </ul>
        </header>
    )
};

export default Header;