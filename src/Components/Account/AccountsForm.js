import React, { useState } from "react";

const AccountsForm = props => { 
    const [type, setType] = useState("");
    const [color, setColor] = useState("");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");

    const createAccount = e => {
        e.preventDefault();
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let account = { id: props.id, type, color, icon, title, date: today};
        props.addAccount(account);
    }

    console.log(icon)

    return ( 
        <form onSubmit={createAccount}> 
            <input onChange={e => setType(e.target.value)} type="text" value={type} placeholder="Type" />
            
            <label htmlFor="color">Color:</label>
            <select id="color"></select> 
            {/* onChange={e => setColor(e.target.value)} type="text" value={color} placeholder="Color" */}

            <label htmlFor="icon">Icon:</label>
            <select id="icon" onChange={e => setIcon(e.target.value)}>
                <option value="FaConnectdevelop">A</option>
                <option value="FaDAndD">B</option>
                <option value="FaDribbble">C</option>
                <option value="FaFortAwesome">D</option>
                <option value="FaJediOrder">E</option>
                <option value="FaRebel">F</option>
                <option value="FaBiohazard">G</option>
                <option value="FaBowlingBall">H</option>
                <option value="FaCarAlt">I</option>
                <option value="FaGraduationCap">J</option>
            </select> 
            
            {/* onChange={e => setIcon(e.target.value)} type="text" value={icon} placeholder="Icon" */}

            <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="Title" />

            <input type="submit" value={props.formType} />
        </form>
    )
};

export default AccountsForm;
