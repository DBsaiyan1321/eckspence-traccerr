import React from "react"; 

const ReportsPageItem = props => { 
    const divStyle = {
        backgroundColor: props.expense.color
    };

    const catStyle = {
        color: props.expense.color
    };

    let dateArr = props.expense.date.split("-");
    let displayDate = [dateArr[1], dateArr[2], dateArr[0]].join("-");

    return (
        <div className="expenses-page-item">
                
                <div className="colored-bar" style={divStyle}></div>
                <div className="expenses-page-item-info">
                    <div className="expenses-page-item-acc-and-cat">
                        <p className="expenses-page-item-acc">{props.account}</p>
                        <p style={catStyle} className="expenses-page-item-cat">{props.category}</p>
                    </div>
                    <p className="expenses-page-item-date">{displayDate}</p>
                </div>
                <h1 className="expenses-page-item-amount">{`$${props.expense.amount}`}</h1>
            </div>
    )
}

export default ReportsPageItem;