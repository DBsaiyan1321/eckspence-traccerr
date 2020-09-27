import React, { useState } from "react"; 
import CategoriesForm from "./CategoriesForm";
import { IconPickerItem } from "react-fa-icon-picker";

const CategoriesPageItem = props => { 
    const [edit, setEdit] = useState(false);

    const divStyle = {
        backgroundColor: props.category.color
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
            <CategoriesForm formType="edit" id={props.category.id} category={props.category} cancelEdit={cancelEdit} editCategory={props.editCategory} /> 
            :
            <li className="categories-page-item">
                <div className="buttons">
                    <button onClick={() => setEdit(!edit)} className="button">Edit</button>
                    <button onClick={() => props.deleteCategory(props.category.id)} className="button">Delete</button>
                </div>
                <div className="colored-bar" style={divStyle}></div>
                <div className="accounts-page-item-info">
                    <div className="account-page-item-tit-and-typ">
                        {/* <Link className="accounts-page-item-title" to={`/categories/${props.account.title}`}>
                            <h1>{props.account.title}</h1>
                        </Link> */}
                        <h1 className="categories-page-item-title">{props.category.title}</h1>                    
                    </div>
                </div>
                <IconPickerItem icon={`${props.category.icon}`} containerStyles={iconStyle} />
            </li>
    )
};  

export default CategoriesPageItem;