import React, { useState } from "react"; 
import CategoriesForm from "./CategoriesForm";
import { IconPickerItem } from "react-fa-icon-picker";

const CategoriesPageItem = props => { 
    const [edit, setEdit] = useState(false);

    const divStyle = {
        backgroundColor: props.category.color
    };

    const cancelEdit = () => {
        setEdit(!edit);
    }

    return (
        edit ?
            <CategoriesForm formType="edit" id={props.category.id} category={props.category} cancelEdit={cancelEdit} editCategory={props.editCategory} /> 
            :
            <div style={divStyle}>
                <div className="categoryIcon"><IconPickerItem icon={`${props.category.icon}`} /></div>
                <h1>{props.category.title}</h1>
                <button onClick={() => setEdit(!edit)}>Edit</button>
                <button onClick={() => props.deleteCategory(props.category.id)}>Delete</button>
            </div>
    )
};  

export default CategoriesPageItem;