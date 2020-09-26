import React, { useState } from "react";
// import { FaConnectdevelop, FaDAndD, FaDribbble, FaFortAwesome, FaJediOrder, FaRebel, FaBiohazard, FaBowlingBall, FaCarAlt, FaGraduationCap } from "react-icons/fa";
import AccountsForm from "./AccountsForm";
import { IconPickerItem } from "react-fa-icon-picker";

const AccountsPageItem = props => {
    const [edit, setEdit] = useState(false);
    
    const divStyle = { 
        backgroundColor: props.account.color
    };

    const cancelEdit = () => { 
        setEdit(!edit);
    }

    return (
        edit ? 
        <AccountsForm formType="edit" id={props.account.id} account={props.account} cancelEdit={cancelEdit} editAccount={props.editAccount} /> : 
        <li style={divStyle} className="accounts-page-item">
            <div className="accountIcon"><IconPickerItem icon={`${props.account.icon}`} /></div>
            <h1>{props.account.title}</h1>
            <h2>{props.account.type}</h2>
            <p>{props.account.date}</p>
            <button onClick={() => setEdit(!edit)} className="button">Edit</button>
            <button onClick={() => props.deleteAccount(props.account.id)} className="button">Delete</button>
        </li>
    )
};

export default AccountsPageItem;