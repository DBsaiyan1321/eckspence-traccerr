import React, { useContext, useEffect, useState } from "react";
import "../../reset.css";
import "./ExpensesPage.css";
import ExpensesPageItem from "./ExpensesPageItem";
import ExpensesForm from "./ExpensesForm";
import Header from "../Header";
import TrackerContext from "../../Context/TrackerContext";
import { ADD_EXPENSE, ADD_EXPENSES, DELETE_EXPENSE } from "../../Context/reducers";
import uuid from "react-uuid";

const ExpensesPage = props => {
    const [expenses, setExpenses] = useState({});
    const [categoryFilter, setCategoryFilter] = useState("");
    const [accountFilter, setAccountFilter] = useState("");
    const global = useContext(TrackerContext);
    

    const addExpense = expense => {
        global.dispatch({ type: ADD_EXPENSE, expense })
    }

    const createExpense = () => {
        let newId = uuid();
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
            <h1>Expenses</h1>
            <div className="filters"> 
                <label htmlFor="accountFilter">
                    Account:
                    <select id="accountFilter" onChange={e => setAccountFilter(e.target.value)} value={accountFilter}>
                        <option value=""></option>
                        {
                            Object.keys(global.globalState.accounts).map(accountId => {
                                return <option key={`{${accountId}`} value={`${global.globalState.accounts[accountId].title}`}>{`${global.globalState.accounts[accountId].title}`}</option>
                            })
                        }
                    </select>
                </label>

                <label htmlFor="categoryFilter">
                    Category:
                    <select id="categoryFilter" onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
                        <option value=""></option>
                        {
                            Object.keys(global.globalState.categories).map(categoryId => {
                                return <option key={`{${categoryId}`} value={`${global.globalState.categories[categoryId].title}`}>{`${global.globalState.categories[categoryId].title}`}</option>
                            })
                        }
                    </select> 
                </label>
            </div>

            <ul className="expenses-page-list">
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
            </ul>

            <button className="new-button" onClick={createExpense}>New Expense</button>
        </div>
    )
};

export default ExpensesPage;