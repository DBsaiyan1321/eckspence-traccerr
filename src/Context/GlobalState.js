import React, { useState, useReducer } from "react"; 
import TrackerContext from "./TrackerContext";
import { trackerReducer } from "./reducers";

const GlobalState = props => { 
    const initialState = {
        accounts: {
            1: {
                id: 1,
                type: "Debit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "General",
                ownedCategories: [1],
                ownedExpenses: [1]
            },
            2: {
                id: 2,
                type: "Credit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Whatever",
                ownedCategories: [1],
                ownedExpenses: [1]
            }, 
            3: { 
                id: 3,
                type: "Debit",
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Debt Free Journey",
                ownedCategories: [1],
                ownedExpenses: [1]
            }
        },
        categories: {
            1: {
                id: 1,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "General",
                accountId: [1],
                ownedExpenses: [1]
            }, 
            2: { 
                id: 2,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Entertainment",
                accountId: [1],
                ownedExpenses: [1]
            }, 
            3: { 
                id: 3,
                color: "#ff81d2",
                icon: "FaAccessibleIcon",
                title: "Groceries",
                accountId: [1],
                ownedExpenses: [1]
            }
        },
        expenses: {
            1: {
                id: 1,
                date: "9/25/20",
                amount: "259.32",
                categoryId: 1,
                accountId: 1,
                color: "#ff81d2"
            }
        }
    };

    const [globalState, dispatch] = useReducer(trackerReducer, initialState);
    // console.log(globalState);
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