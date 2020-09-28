import React, { useEffect, useState } from "react";
import { IconPicker } from "react-fa-icon-picker";

const AccountsForm = props => { 
    const [type, setType] = useState("");
    const [color, setColor] = useState("#f6b73c");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");
    const [ownedExpenses, setOwnedExpenses] = useState([]);

    useEffect(() => { 
        if (props.account) { 
            setType(props.account.type);
            setColor(props.account.color);
            setTitle(props.account.title);
            setOwnedExpenses(props.account.ownedExpenses);
            setIcon(props.account.icon);
        } 
    }, [])

    const createAccount = e => {
        e.preventDefault();
      
        let account = { id: props.id, type, color, icon, title, ownedExpenses };
        props.addAccount(account);
    }

    const editAccount = e => { 
        e.preventDefault();

        let account = { id: props.id, type, color, icon, title, ownedExpenses };
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
            
            <label>Color: 
                <input type="color" name="color" value={color} onChange={e => setColor(e.target.value) } />
            </label>

            <label>Icon:
                <IconPicker id="icon" value={icon} onChange={icon => setIcon(icon)} />
            </label>

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
