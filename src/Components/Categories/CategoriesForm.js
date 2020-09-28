import React, { useEffect, useState } from "react";
import { IconPicker } from "react-fa-icon-picker";

const CategoriesForm = props => {
    const [color, setColor] = useState("#f6b73c");
    const [icon, setIcon] = useState("");
    const [title, setTitle] = useState("");
    const [ownedExpenses, setOwnedExpenses] = useState([]);

    useEffect(() => {
        if (props.category) {
            setColor(props.category.color);
            setTitle(props.category.title);
            setOwnedExpenses(props.category.ownedExpenses);
            setIcon(props.category.icon)
        }
    }, [])

    const createCategory = e => {
        e.preventDefault();

        let category = { id: props.id, color, icon, title, ownedExpenses };
        props.addCategory(category);
    }

    const editCategory = e => {
        e.preventDefault();

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
            <input onChange={e => setTitle(e.target.value)} type="text" value={title} placeholder="Title" required="required" />

            <label>Color: 
                <input type="color" name="color" value={color} onChange={e => setColor(e.target.value)} />
            </label>

            <label>Icon:
                <IconPicker value={icon} onChange={icon => setIcon(icon)} />
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

export default CategoriesForm;