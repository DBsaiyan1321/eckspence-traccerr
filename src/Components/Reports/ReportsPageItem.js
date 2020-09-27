import React from "react"; 

const ReportsPageItem = props => { 
    const divStyle = {
        backgroundColor: props.expense.color
    };

    return ( 
        <li style={divStyle} className="expenses-page-item">
            <h1>{`$${props.expense.amount}`}</h1>
            <p>{props.expense.date}</p>
            <p>{props.category}</p>
            <p>{props.account}</p>
        </li>
    )
}

export default ReportsPageItem;