import React, { useState } from "react"; 
import ExpensesForm from "../Expenses/ExpensesForm";

const ReportsPageItem = props => { 
    const [edit, setEdit] = useState(false);

    // let Icon = props.account.icon; 
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
        <div className="expenses-page-item">
                
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
}

export default ReportsPageItem;