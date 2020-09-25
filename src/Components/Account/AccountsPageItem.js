import React from "react";
import { FaConnectdevelop, FaDAndD, FaDribbble, FaFortAwesome, FaJediOrder, FaRebel, FaBiohazard, FaBowlingBall, FaCarAlt, FaGraduationCap } from "react-icons/fa";

const AccountsPageItem = props => {
    let Icon = props.account.icon; 
    
    return (
        <div className={`${props.account.color}`}>
            <div className="accountIcon"><Icon /></div>
            <h1>{props.account.title}</h1>
            <h2>{props.account.type}</h2>
            <p>{props.account.date}</p>
            <button onClick={() => props.deleteAccount(props.account.id)}>Delete</button>
        </div>
    )
};

export default AccountsPageItem;