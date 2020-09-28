import React, { useContext, useState, useEffect } from "react"; 
import TrackerContext from "../../Context/TrackerContext";
import "../../reset.css";
import "./ReportsPage.css";
import ReportsPageItem from "./ReportsPageItem";

const ReportsPage = () => { 
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [type, setType] = useState("");

    const global = useContext(TrackerContext);
    
    let expenses = Object.values(global.globalState.expenses);

    // const dateToString = date => {
    //     const mm = date.getMonth() + 1; // getMonth() is zero-based
    //     const dd = date.getDate();

    //     return [date.getFullYear(),
    //     (mm > 9 ? '' : '0') + mm,
    //     (dd > 9 ? '' : '0') + dd
    //     ].join('-');
    // };

    useEffect(() => { 
        let endDate = new Date();
        let arr = startDay.split("-")
        if (arr.length > 1 && type === "weekly") { 
            let start = new Date(arr[0], arr[1] - 1, arr[2]);
            endDate.setDate(start.getDate() + 7);
            setEndDay(endDate);
        } else if (arr.length > 1 && type === "daily") { 
            setEndDay(startDay);
        } else if (arr.length > 1 && type === "monthly") { 
            let start = new Date(arr[0], arr[1] - 1, arr[2]);
            endDate = new Date(arr[0], arr[1] - 1, arr[2])
            endDate.setMonth(start.getMonth() + 1);
            setEndDay(endDate);
        }
    }, [startDay, type]) 

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
    }, 0).toFixed(2);

    return (
        <div className="expenses-page">
            <h1>Reports</h1>

            <ul className="reports-list">
                {type === "daily" ? <li onClick={() => setType("daily")} className="reports-tab underline">Daily</li> : <li onClick={() => setType("daily")} className="reports-tab">Daily</li> }
                {type === "weekly" ? <li onClick={() => setType("weekly")} className="reports-tab underline">Weekly</li> : <li onClick={() => setType("weekly")} className="reports-tab">Weekly</li>}
                {type === "monthly" ? <li onClick={() => setType("monthly")} className="reports-tab underline">Monthly</li> : <li onClick={() => setType("monthly")} className="reports-tab">Monthly</li>}
                {type === "custom" ? <li onClick={() => setType("custom")} className="reports-tab underline">Custom</li> : <li onClick={() => setType("custom")} className="reports-tab">Custom</li>}
            </ul>
            <div className="filters">
                <label>Start Day:
                    <input type="date" value={startDay} onChange={e => setStartDay(e.target.value)} />
                </label>

                { type === "custom" ? 
                    <label>End Day:
                        <input type="date" value={endDay} onChange={e => setEndDay(e.target.value)} />
                    </label> : null
                }
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