import React, { useEffect, useState } from "react";
import { IconPicker } from "react-fa-icon-picker";

const AccountsForm = props => { 
    const [type, setType] = useState("");
    const [color, setColor] = useState("#f6b73c");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");
    const [ownedCategories, setOwnedCategories] = useState([]);
    const [ownedExpenses, setOwnedExpenses] = useState([]);
    // const [dateCreated, setDateCreated] = useState(false);

    useEffect(() => { 
        if (props.account) { 
            setType(props.account.type);
            setColor(props.account.color);
            setTitle(props.account.title);
            setOwnedCategories(props.account.ownedCategories);
            setOwnedExpenses(props.account.ownedExpenses);
            setIcon(props.account.icon);
            // setDateCreated(!!props.account.date);
        } 
    }, [])

    const createAccount = e => {
        e.preventDefault();
        
        // var today = new Date();

        // if (dateCreated) { 
        //     var dd = String(today.getDate()).padStart(2, '0');
        //     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        //     var yyyy = today.getFullYear();

        //     today = mm + '/' + dd + '/' + yyyy;
        // } else { 
        //     today = null;
        // }

        
        let account = { id: props.id, type, color, icon, title, ownedCategories, ownedExpenses };
        props.addAccount(account);
    }

    const editAccount = e => { 
        e.preventDefault();
        
        // let today = new Date();

        // if (dateCreated) {
        //     const dd = String(today.getDate()).padStart(2, '0');
        //     const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        //     const yyyy = today.getFullYear();

        //     today = mm + '/' + dd + '/' + yyyy;
        // } else {
        //     today = null;
        // }


        let account = { id: props.id, type, color, icon, title, ownedCategories, ownedExpenses };
        props.editAccount(account);

        props.cancelEdit();
    }

    const cancelCreate = e => { 
        e.preventDefault();
        props.deleteAccount(props.id);
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
        <form className="form" onSubmit={action}>
            <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="Title" required="required" />
 
            <input onChange={e => setType(e.target.value)} type="text" value={type} placeholder="Type" required="required" />
            
            <label htmlFor="color">Color: 
                <input type="color" id="color" name="color" value={color} onChange={e => setColor(e.target.value) } />
            </label>

            <label htmlFor="icon">Icon:
                <IconPicker id="icon" value={icon} onChange={icon => setIcon(icon)} />
            </label>

            {/* <label htmlFor="dateCreate">Date</label>
            <input onChange={() => setDateCreated(!dateCreated)} type="checkbox" id="dateCreated" name="dateCreated" /> */}

            <input className="button" type="submit" value={props.formType} />
            
            { 
                props.formType === "create" ?
                    <button className="button" onClick={cancelCreate}>Cancel</button> :
                    <button className="button" onClick={cancelEdit}>Cancel</button>
            }   
        </form>
    )
};

export default AccountsForm;
