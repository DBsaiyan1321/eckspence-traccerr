import React, { useContext, useState } from "react"; 
import { ADD_CATEGORY, DELETE_CATEGORY } from "../../Context/reducers";
import TrackerContext from "../../Context/TrackerContext";
import CategoriesPageItem from "./CategoriesPageItem";
import Header from "../Header";
import CategoriesForm from "./CategoriesForm";
import "./CategoriesPage.css";

const CategoriesPage = props => { 
    const [categories, setCategories] = useState({});
    const global = useContext(TrackerContext);
    console.log(global.globalState);
    const addCategory = category => {
        global.dispatch({ type: ADD_CATEGORY, category })
    }

    const createCategory = () => {
        let newId = Object.keys(global.globalState.accounts).length + 1;
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
        <div>
            <Header />
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

            <button onClick={createCategory}>New category</button>
        </div>
    ) 
};

export default CategoriesPage;