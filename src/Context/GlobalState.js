import React, { useReducer } from "react"; 
import TrackerContext from "./TrackerContext";
import { trackerReducer } from "./reducers";

const GlobalState = props => { 
    const data = localStorage.getItem("globalState");
    let savedData = null;
    if (data) { 
        savedData = JSON.parse(data);
    }

    const initialState = savedData || { accounts: {
            1: {
                id: 1,
                type: "Debit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "General",
                ownedExpenses: [1]
            },
            2: {
                id: 2,
                type: "Credit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Whatever",
                ownedExpenses: []
            }, 
            3: { 
                id: 3,
                type: "Debit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Debt Free Journey",
                ownedExpenses: []
            }
        },
        categories: {
            1: {
                id: 1,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "General",
                ownedExpenses: [1]
            }, 
            2: { 
                id: 2,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Entertainment",
                ownedExpenses: []
            }, 
            3: { 
                id: 3,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Groceries",
                ownedExpenses: []
            }
        },
        expenses: {
            1: {
                id: 1,
                date: "2020-09-10",
                amount: "259.32",
                categoryId: 1,
                accountId: 1,
                color: "#ff81d2"
            }
        }
    };

    const [globalState, dispatch] = useReducer(trackerReducer, initialState);
    
    localStorage.setItem("globalState", JSON.stringify(globalState));
    return (
        <TrackerContext.Provider value={{
            globalState, 
            dispatch
        }}>
            {props.children}
        </TrackerContext.Provider>
    );
};

export default GlobalState; 