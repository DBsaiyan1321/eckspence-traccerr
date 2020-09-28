import React, { useState } from "react"; 
import CategoriesForm from "./CategoriesForm";
import { IconPickerItem } from "react-fa-icon-picker";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

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
                    <button onClick={() => setEdit(!edit)} className="button icon"><AiFillEdit /></button>
                    <button onClick={() => props.deleteCategory(props.category.id)} className="button icon"><AiFillDelete /></button>
                </div>
                <div className="colored-bar" style={divStyle}></div>
                <div className="categories-page-item-info">
                    <div className="categories-page-item-tit-and-typ">
                        <Link to={`/expenses/category-${props.category.title}`}>
                            <h1 className="categories-page-item-title">{props.category.title}</h1>
                        </Link>
                        {/* <h1 className="categories-page-item-title">{props.category.title}</h1>                     */}
                    </div>
                </div>
                <IconPickerItem icon={`${props.category.icon}`} containerStyles={iconStyle} />
            </li>
    )
};  

export default CategoriesPageItem;