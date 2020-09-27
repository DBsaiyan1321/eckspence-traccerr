import React, { useContext } from "react"; 
import { ADD_CATEGORY, DELETE_CATEGORY } from "../../Context/reducers";
import TrackerContext from "../../Context/TrackerContext";
import CategoriesPageItem from "./CategoriesPageItem";
import CategoriesForm from "./CategoriesForm";
import "./CategoriesPage.css";
import uuid from "react-uuid";

const CategoriesPage = () => { 
    const global = useContext(TrackerContext);

    const addCategory = category => {
        global.dispatch({ type: ADD_CATEGORY, category })
    }

    const createCategory = () => {
        let newId = uuid();
        let category = { id: newId, formType: "create" };
        global.dispatch({ type: ADD_CATEGORY, category })
    }

    const editCategory = category => {
        global.dispatch({ type: ADD_CATEGORY, category })
    }

    const deleteCategory = categoryId => {
        global.dispatch({ type: DELETE_CATEGORY, categoryId })
    }

    return ( 
        <div className="categories-page">
            <h1>Categories</h1>
            <ul className="categories-page-list">
            {
                Object.keys(global.globalState.categories).map(categoryId => {
                    let category = global.globalState.categories[categoryId];
                    return category.formType === "create"
                        ?
                        <CategoriesForm
                            key={category.id}
                            addCategory={addCategory}
                            id={category.id}
                            formType={category.formType}
                            deleteCategory={deleteCategory}
                        />
                        :
                        <CategoriesPageItem
                            key={category.id}
                            category={category}
                            deleteCategory={deleteCategory}
                            editCategory={editCategory}
                        /> 
                })
            }
            </ul>

            <button className="new-button" onClick={createCategory}>New category</button>
        </div>
    ) 
};

export default CategoriesPage;