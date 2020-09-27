import React, { useEffect, useState, useContext } from "react";
import { IconPicker } from "react-fa-icon-picker";
import TrackerContext from "../../Context/TrackerContext";

const CategoriesForm = props => {
    // const [type, setType] = useState("");
    const [color, setColor] = useState("#f6b73c");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");
    // const [accountId, setAccountId] = useState(1);
    const [ownedExpenses, setOwnedExpenses] = useState([]);
    // const [dateCreated, setDateCreated] = useState(false);

    const global = useContext(TrackerContext);

    useEffect(() => {
        // debugger
        if (props.category) {
            // setType(props.category.type);
            setColor(props.category.color);
            setTitle(props.category.title);
            // setAccountId(props.category.accountId);
            setOwnedExpenses(props.category.ownedExpenses);
            setIcon(props.category.icon)
            // setDateCreated(!!props.category.date);
        }
    }, [])

    const createCategory = e => {
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


        let category = { id: props.id, color, icon, title, ownedExpenses };
        props.addCategory(category);
    }

    const editCategory = e => {
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


        let category = { id: props.id, color, icon, title, ownedExpenses };
        props.editCategory(category);

        props.cancelEdit();
    }

    const cancelCreate = e => {
        e.preventDefault();
        props.deleteCategory(props.id);
    }

    const cancelEdit = e => {
        e.preventDefault();
        props.cancelEdit();
    }

    let action;
    if (props.formType === "create") {
        action = createCategory;
    } else {
        action = editCategory;
    }

    return (
        <form className="form" onSubmit={action}>
            {/* <input onChange={e => setType(e.target.value)} type="text" value={type} placeholder="Type" required="required" /> */}

            <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="Title" required="required" />

            <label htmlFor="color">Color: 
                <input type="color" id="color" name="color" value={color} onChange={e => setColor(e.target.value)} />
            </label>

            <label htmlFor="icon">Icon:
                <IconPicker id="icon" value={icon} onChange={icon => setIcon(icon)} />
            </label>

            {/* <label htmlFor="accountId">Account</label>
            <select id="accountId" onChange={e => setAccountId(e.target.value)}>
                <option></option>
                {
                    Object.keys(global.globalState.accounts).map(accountId => {
                        return <option key={`{${accountId}`} value={global.globalState.accounts[accountId].id}>{`${global.globalState.accounts[accountId].title}`}</option>
                    })
                }
            </select>  */}

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

export default CategoriesForm;