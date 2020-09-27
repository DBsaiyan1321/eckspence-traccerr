import React from "react";

export default React.createContext({
    // accounts: { 
    //     1: { 
    //         id: 1, 
    //         type: "Old", 
    //         color: "#ff81d2", 
    //         icon: "Bird", 
    //         title: "New", 
    //         ownedCategories: [1], 
    //         ownedExpenses: [1]
    //     }
    // }, 
    // categories: { 
    //     1: { 
    //         id: 1,
    //         color: "#ff81d2",
    //         icon: "Bird",
    //         title: "New",
    //         accountId: [1], 
    //         ownedExpenses: [1]
    //     }   
    // }, 
    // expenses: { 
    //     1: { 
    //         id: 1, 
    //         date: "9/25/20",
    //         amount: "259.32",
    //         categoryId: 1, 
    //         accountId: 1
    //     }
    // }
    
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
    
});
