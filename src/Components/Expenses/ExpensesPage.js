import React, { useContext, useEffect, useState } from "react";
import "../../reset.css";
import "./ExpensesPage.css";
import ExpensesPageItem from "./ExpensesPageItem";
import ExpensesForm from "./ExpensesForm";
import Header from "../Header";
import TrackerContext from "../../Context/TrackerContext";
import { ADD_EXPENSE, ADD_EXPENSES, DELETE_EXPENSE } from "../../Context/reducers";

const ExpensesPage = props => {
    const [Expenses, setExpenses] = useState({});
    const [filters, setFilters] = useState({});
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

    useEffect(() => { 

    }, [filters])

    return (
        <div>
            <Header />
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
                        <ExpensesPageItem
                            key={expense.id}
                            expense={expense}
                            deleteExpense={deleteExpense}
                            editExpense={editExpense}
                            category={global.globalState.categories[expense.categoryId].title}
                            account={global.globalState.accounts[expense.accountId].title}
                        />
                })
            }

            <button onClick={createExpense}>New Expense</button>
        </div>
    )
};

export default ExpensesPage;