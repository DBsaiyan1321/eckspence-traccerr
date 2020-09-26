import React, { useEffect, useState } from "react";

const AccountsForm = props => { 
    const [type, setType] = useState("");
    const [color, setColor] = useState("#f6b73c");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");
    const [ownedCategories, setOwnedCategories] = useState([]);
    const [ownedExpenses, setOwnedExpenses] = useState([]);
    const [dateCreated, setDateCreated] = useState(false);

    useEffect(() => { 
        if (props.account) { 
            // console.log(props.account)
            setType(props.account.type);
            setColor(props.account.color);
            setTitle(props.account.title);
            setOwnedCategories(props.account.ownedCategories);
            setOwnedExpenses(props.account.ownedExpenses);
            // setDateCreated(!!props.account.date);
        } 
    }, [])

    const createAccount = e => {
        e.preventDefault();
        
        var today = new Date();

        if (dateCreated) { 
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
        } else { 
            today = null;
        }

        
        let account = { id: props.id, type, color, icon, title, date: today};
        props.addAccount(account);
    }

    const editAccount = e => { 
        e.preventDefault();
        
        let today = new Date();

        if (dateCreated) {
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
        } else {
            today = null;
        }


        let account = { id: props.id, type, color, icon, title, date: today, ownedCategories, ownedExpenses };
        props.editAccount(account);

        props.cancelEdit();
    }

    const cancelCreate = e => { 
        e.preventDefault();
        props.deleteAccount();
    }

    const cancelEdit = e => { 
        e.preventDefault();
        props.cancelEdit();
    }

    let action;
    if (props.formType === "create") { 
        action = createAccount;
    } else { 
        action = editAccount;
    }

    return ( 
        <form onSubmit={action}> 
            <input onChange={e => setType(e.target.value)} type="text" value={type} placeholder="Type" />
            
            <label htmlFor="color">Color: </label>
            <input type="color" id="color" name="color" value={color} onChange={e => setColor(e.target.value) } />

            {/* <label htmlFor="icon">Icon:</label>
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
            </select>  */}

            <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="Title" />

            <label htmlFor="dateCreate">Date</label>
            <input onChange={() => setDateCreated(!dateCreated)} type="checkbox" id="dateCreated" name="dateCreated" />

            <input type="submit" value={props.formType} />
            
            { 
                props.formType === "create" ?
                <button onClick={cancelCreate}>Cancel</button> :
                <button onClick={cancelEdit}>Cancel</button>
            }   
        </form>
    )
};

export default AccountsForm;
