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

    const typeStyle = {
        color: props.account.color
    };

    const iconStyle = { 
        position: "absolute",
        right: "40px",
        fontSize: "24px",
        color: "#000000",
        padding: "2px"
    }

    const cancelEdit = () => { 
        setEdit(!edit);
    }

    return (
        edit ? 
        <AccountsForm formType="edit" id={props.account.id} account={props.account} cancelEdit={cancelEdit} editAccount={props.editAccount} /> : 
            <li className="accounts-page-item">
                <div className="buttons">
                    <button onClick={() => setEdit(!edit)} className="button">Edit</button>
                    <button onClick={() => props.deleteAccount(props.account.id)} className="button">Delete</button>
                </div>
                <div className="colored-bar" style={divStyle}></div>
                <div className="accounts-page-item-info"> 
                    <div className="account-page-item-tit-and-typ"> 
                        {/* <Link className="accounts-page-item-title" to={`/categories/${props.account.title}`}> */}
                            <h1>{props.account.title}</h1>
                        {/* </Link> */}
                        <h2 style={typeStyle} className="accounts-page-item-type">{props.account.type}</h2>
                    </div>
                </div>
                <IconPickerItem icon={`${props.account.icon}`} containerStyles={iconStyle} />
        </li>
    )
};

export default AccountsPageItem;