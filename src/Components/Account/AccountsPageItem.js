import React, { useState } from "react";
// import { FaConnectdevelop, FaDAndD, FaDribbble, FaFortAwesome, FaJediOrder, FaRebel, FaBiohazard, FaBowlingBall, FaCarAlt, FaGraduationCap } from "react-icons/fa";
import AccountsForm from "./AccountsForm";

const AccountsPageItem = props => {
    const [edit, setEdit] = useState(false);

    // let Icon = props.account.icon; 
    const divStyle = { 
        backgroundColor: props.account.color
    };

    const cancelEdit = () => { 
        setEdit(!edit);
    }

    return (
        edit ? 
        <AccountsForm formType="edit" id={props.account.id} account={props.account} cancelEdit={cancelEdit} editAccount={props.editAccount} /> : 
        <div style={divStyle}>
            {/* <div className="accountIcon"><Icon /></div> */}
            <h1>{props.account.title}</h1>
            <h2>{props.account.type}</h2>
            <p>{props.account.date}</p>
            <button onClick={() => props.deleteAccount(props.account.id)}>Delete</button>
            <button onClick={() => setEdit(!edit)}>Edit</button>
        </div>
    )
};

export default AccountsPageItem;