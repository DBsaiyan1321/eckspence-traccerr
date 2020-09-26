import React, { useState } from "react"; 
import CategoriesForm from "./CategoriesForm";

const CategoriesPageItem = props => { 
    const [edit, setEdit] = useState(false);

    // let Icon = props.account.icon; 
    const divStyle = {
        backgroundColor: props.category.color
    };

    const cancelEdit = () => {
        setEdit(!edit);
    }

    return (
        edit ?
            <CategoriesForm formType="edit" id={props.category.id} category={props.category} cancelEdit={cancelEdit} editCategory={props.editCategory} /> :
            <div style={divStyle}>
                {/* <div className="categoryIcon"><Icon /></div> */}
                <h1>{props.category.title}</h1>
                <h2>{props.category.type}</h2>
                <p>{props.category.date}</p>
                <button onClick={() => props.deleteCategory(props.category.id)}>Delete</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
            </div>
    )
};  

export default CategoriesPageItem;