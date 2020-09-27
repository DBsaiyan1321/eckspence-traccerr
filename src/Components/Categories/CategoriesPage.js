import React, { useContext, useEffect, useState } from "react"; 
import { ADD_CATEGORY, DELETE_CATEGORY } from "../../Context/reducers";
import TrackerContext from "../../Context/TrackerContext";
import CategoriesPageItem from "./CategoriesPageItem";
import Header from "../Header";
import CategoriesForm from "./CategoriesForm";
import "./CategoriesPage.css";

const CategoriesPage = props => { 
    const [categories, setCategories] = useState({});
    const [accountFilter, setAccountFilter] = useState("");
    const global = useContext(TrackerContext);
    // console.log(global.globalState);

    useEffect(() => {
        if (props.match.params.filters) { 
            setAccountFilter(props.match.params.filters);
        }
    }, [])

    const addCategory = category => {
        global.dispatch({ type: ADD_CATEGORY, category })
    }
    // console.log(props.match.params.filters)
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

    console.log(accountFilter)
    return ( 
        <div>
            <label htmlFor="accountFilter">Account:</label>
            <select id="accountFilter" onChange={e => setAccountFilter(e.target.value)} value={accountFilter}>
                <option value=""></option>
                {
                    Object.keys(global.globalState.accounts).map(accountId => {
                        return <option key={`{${accountId}`} value={`${global.globalState.accounts[accountId].title}`}>{`${global.globalState.accounts[accountId].title}`}</option>
                    })
                }
            </select> 
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
                        global.globalState.accounts[category.accountId].title.includes(accountFilter) ?
                        <CategoriesPageItem
                            key={category.id}
                            category={category}
                            deleteCategory={deleteCategory}
                            editCategory={editCategory}
                        /> : 
                        null
                })
            }

            <button onClick={createCategory}>New category</button>
        </div>
    ) 
};

export default CategoriesPage;