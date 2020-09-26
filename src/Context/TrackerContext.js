import React from "react";

export default React.createContext({
    accounts: { 
        1: { 
            id: 1, 
            type: "Old", 
            color: "#ff81d2", 
            icon: "Bird", 
            title: "New", 
            ownedCategories: [1], 
            ownedExpenses: [1]
        }
    }, 
    categories: { 
        1: { 
            id: 1,
            color: "#ff81d2",
            icon: "Bird",
            title: "New",
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
            accountId: 1
        }
    }
});
