import React, { useContext, useEffect, useState } from "react";
import "../../reset.css";
import "./ExpensesPage.css";
import ExpensesPageItem from "./ExpensesPageItem";
import ExpensesForm from "./ExpensesForm";
import Header from "../Header";
import TrackerContext from "../../Context/TrackerContext";
import { ADD_EXPENSE, ADD_EXPENSES, DELETE_EXPENSE } from "../../Context/reducers";

const ExpensesPage = props => {
    const [expenses, setExpenses] = useState({});
    const [categoryFilter, setCategoryFilter] = useState("");
    const [accountFilter, setAccountFilter] = useState("");
    const global = useContext(TrackerContext);
    console.log(global)

    const addExpense = expense => {
        global.dispatch({ type: ADD_EXPENSE, expense })
    }

    const createExpense = () => {
        let newId = Object.keys(global.globalState.expenses).length + 1;
        let expense = { id: newId, formType: "create" };
        global.dispatch({ type: ADD_EXPENSE, expense })
    }

    const editExpense = expense => {
        global.dispatch({ type: ADD_EXPENSE, expense })
    }

    const deleteExpense = expenseId => {
        global.dispatch({ type: DELETE_EXPENSE, expenseId })
    }

    return (
        <div className="expenses-page">
            <label htmlFor="accountFilter">Account:</label>
            <select id="accountFilter" onChange={e => setAccountFilter(e.target.value)} value={accountFilter}>
                <option value=""></option>
                {
                    Object.keys(global.globalState.accounts).map(accountId => {
                        return <option key={`{${accountId}`} value={`${global.globalState.accounts[accountId].title}`}>{`${global.globalState.accounts[accountId].title}`}</option>
                    })
                }
            </select> 

            <label htmlFor="categoryFilter">Category:</label>
            <select id="categoryFilter" onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
                <option value=""></option>
                { 
                Object.keys(global.globalState.categories).map(categoryId => { 
                    return <option key={`{${categoryId}`} value={`${global.globalState.categories[categoryId].title}`}>{`${global.globalState.categories[categoryId].title}`}</option>
                })
                }
            </select> 

            {
                Object.keys(global.globalState.expenses).map(expenseId => {
                    let expense = global.globalState.expenses[expenseId];
                
                    return expense.formType === "create"
                        ?
                        <ExpensesForm
                            key={expense.id}
                            addExpense={addExpense}
                            id={expense.id}
                            formType={expense.formType}
                            deleteExpense={deleteExpense}
                        />
                        :
                        global.globalState.categories[expense.categoryId].title.includes(categoryFilter) && global.globalState.accounts[expense.accountId].title.includes(accountFilter) ?
                        <ExpensesPageItem
                            key={expense.id}
                            expense={expense}
                            deleteExpense={deleteExpense}
                            editExpense={editExpense}
                            category={global.globalState.categories[expense.categoryId].title}
                            account={global.globalState.accounts[expense.accountId].title}
                        /> : 
                        null
                })
            }

            <button onClick={createExpense}>New Expense</button>
        </div>
    )
};

export default ExpensesPage;