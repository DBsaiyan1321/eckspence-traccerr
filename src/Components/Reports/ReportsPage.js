import React, { useContext, useState } from "react"; 
import TrackerContext from "../../Context/TrackerContext";
import "../../reset.css";
import "./ReportsPage.css";
import ReportsPageItem from "./ReportsPageItem";

const ReportsPage = () => { 
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

    let total = filteredExpense.filter(expense => expense.amount !== undefined).reduce((acc, curr) => { 
        return acc + parseFloat(curr.amount)
    }, 0)

    return (
        <div className="expenses-page">
            <h1>Reports</h1>
            <div className="filters">
                <label htmlFor="startDay">Start Day:
                    <input id="startDay" type="date" value={startDay} onChange={e => setStartDay(e.target.value)} />
                </label>

                <label htmlFor="endDay">End Day:
                    <input id="endDay" type="date" value={endDay} onChange={e => setEndDay(e.target.value)} />
                </label>
            </div>

            <h1>{`$${total}`}</h1>

            <ul className="expenses-page-list">
                {
                    filteredExpense.map(expense => {
                        return expense.amount !== undefined ? 
                             <ReportsPageItem key={expense.id}
                                expense={expense}
                                category={global.globalState.categories[expense.categoryId].title}
                                account={global.globalState.accounts[expense.accountId].title}
                                />
                                : null
                    })
                }
            </ul>

        </div>
    )
};

export default ReportsPage;