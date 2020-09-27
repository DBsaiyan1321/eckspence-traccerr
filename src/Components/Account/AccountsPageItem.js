import React, { useState } from "react";
// import { FaConnectdevelop, FaDAndD, FaDribbble, FaFortAwesome, FaJediOrder, FaRebel, FaBiohazard, FaBowlingBall, FaCarAlt, FaGraduationCap } from "react-icons/fa";
import AccountsForm from "./AccountsForm";
import { IconPickerItem } from "react-fa-icon-picker";
import { Link } from "react-router-dom";

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
                <IconPickerItem icon={`${props.account.icon}`} />
                <div> 
                    <div className="accounts-page-item-info"> 
                        <Link to={`/categories/${props.account.title}`}>
                            <h1>{props.account.title}</h1>
                        </Link>
                        <h2>{props.account.type}</h2>
                    </div>
                    <p className="accounts-page-item-date">{props.account.date}</p>
                </div>
                <div> 
                    <button onClick={() => setEdit(!edit)} className="button">Edit</button>
                    <button onClick={() => props.deleteAccount(props.account.id)} className="button">Delete</button>
                </div>
        </li>
    )
};

export default AccountsPageItem;