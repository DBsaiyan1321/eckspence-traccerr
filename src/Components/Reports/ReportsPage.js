import React, { useContext, useEffect, useState } from "react"; 
import TrackerContext from "../../Context/TrackerContext";
import "../../reset.css";
import "./ReportsPage.css";
import ReportsPageItem from "./ReportsPageItem";

const ReportsPage = props => { 
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");

    const global = useContext(TrackerContext);
    
    let expenses = Object.values(global.globalState.expenses);

    let filteredStartDayExpenses;
    let filteredEndDayExpenses;

    if (startDay) { 
        filteredStartDayExpenses = expenses.filter(expense => new Date(expense.date) - new Date(startDay) >= 0);
    } else { 
        filteredStartDayExpenses = expenses;
    }

    if (endDay && startDay !== "") { 
        filteredEndDayExpenses = filteredStartDayExpenses.filter(expense => new Date(expense.date) - new Date(endDay) <= 0)
    } else { 
        filteredEndDayExpenses = expenses.filter(expense => new Date(expense.date) - new Date(endDay) <= 0)
    }

    let filteredExpense;
    if (startDay !== "" && endDay !== "") { 
        filteredExpense = filteredEndDayExpenses;
    } else { 
        filteredExpense = filteredStartDayExpenses;
    }

    let total = filteredExpense.reduce((acc, curr) => { 
        return acc + parseFloat(curr.amount)
    }, 0)
    
    return ( 
        <div>
            <h1>Reports</h1>

            <label htmlFor="startDay">Start Day:</label>
            <input id="startDay" type="date" value={startDay} onChange={e => setStartDay(e.target.value)} /> 

            <label htmlFor="endDay">End Day:</label>
            <input id="endDay" type="date" value={endDay} onChange={e => setEndDay(e.target.value)} /> 

            <h1>{`$${total}`}</h1>
            <ul>
                { 
                    filteredExpense.map(expense => { 
                        return <ReportsPageItem key={expense.id} expense={expense} />
                    })
                }
            </ul>
        </div>
    )
};

export default ReportsPage;