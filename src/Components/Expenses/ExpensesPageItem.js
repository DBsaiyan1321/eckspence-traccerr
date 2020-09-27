import React, { useState } from "react";
import ExpensesForm from "./ExpensesForm";

const ExpensesPageItem = props => {
    const [edit, setEdit] = useState(false);

    const divStyle = {
        backgroundColor: props.expense.color
    };

    const catStyle = { 
        color: props.expense.color
    };

    const cancelEdit = () => {
        setEdit(!edit);
    }

    return (
        edit 
        ?
            <ExpensesForm formType="edit" id={props.expense.id} expense={props.expense} cancelEdit={cancelEdit} editExpense={props.editExpense} /> 
        :
            <div className="expenses-page-item">
                <div className="buttons"> 
                    <button onClick={() => setEdit(!edit)} className="button">Edit</button>
                    <button onClick={() => props.deleteExpense(props.expense.id)} className="button">Delete</button>
                </div>
                <div className="colored-bar" style={divStyle}></div>
                <div className="expenses-page-item-info">
                    <div className="expenses-page-item-acc-and-cat"> 
                        <p className="expenses-page-item-acc">{props.account}</p>
                        <p style={catStyle} className="expenses-page-item-cat">{props.category}</p>
                    </div>
                    <p className="expenses-page-item-date">{props.expense.date}</p>
                </div>
                <h1 className="expenses-page-item-amount">{`$${props.expense.amount}`}</h1>
            </div>
    )
};

export default ExpensesPageItem;
