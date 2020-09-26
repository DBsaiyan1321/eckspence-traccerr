import React, { useState } from "react";
// import { FaConnectdevelop, FaDAndD, FaDribbble, FaFortAwesome, FaJediOrder, FaRebel, FaBiohazard, FaBowlingBall, FaCarAlt, FaGraduationCap } from "react-icons/fa";
import ExpensesForm from "./ExpensesForm";

const ExpensesPageItem = props => {
    const [edit, setEdit] = useState(false);

    // let Icon = props.account.icon; 
    const divStyle = {
        backgroundColor: props.expense.color
    };

    const cancelEdit = () => {
        setEdit(!edit);
    }

    return (
        edit ?
            <ExpensesForm formType="edit" id={props.expense.id} expense={props.expense} cancelEdit={cancelEdit} editExpense={props.editExpense} /> 
            :
            <div style={divStyle}>
                <h1>{props.expense.amount}</h1>
                <p>{props.expense.date}</p>
                <p>{props.category}</p>
                <p>{props.account}</p>
                <button onClick={() => props.deleteExpense(props.expense.id)}>Delete</button>
                <button onClick={() => setEdit(!edit)}>Edit</button>
            </div>
    )
};

export default ExpensesPageItem;
