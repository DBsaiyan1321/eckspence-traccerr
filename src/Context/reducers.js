export const ADD_ACCOUNTS = "ADD_ACCOUNTS";
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";

export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const ADD_EXPENSES = "ADD_EXPENSES";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";

export const trackerReducer = (oldState, action) => { 
    Object.freeze(oldState)
    let newState;
    switch (action.type) { 
        case ADD_ACCOUNTS:
            return;
        case ADD_ACCOUNT: 
            newState = Object.assign({}, oldState); 
            newState.accounts[action.account.id] = { id: action.account.id, ...action.account }
            return newState;
        case DELETE_ACCOUNT: 
            newState = Object.assign({}, oldState); 
            let account = newState.accounts[action.accountId];
            if (account && account.ownedExpenses) {
                for (const expenseId of account.ownedExpenses) {
                    delete newState.expenses[expenseId]
                }
            }
            delete newState.accounts[action.accountId]
            return newState;
        case ADD_CATEGORIES:
            return;
        case ADD_CATEGORY:
            newState = Object.assign({}, oldState);
            newState.categories[action.category.id] = { id: action.category.id, ...action.category }
            return newState;
        case DELETE_CATEGORY:
            newState = Object.assign({}, oldState);
            let category = newState.categories[action.categoryId];
            if (category && category.ownedExpenses) { 
                for (const expenseId of category.ownedExpenses) { 
                    delete newState.expenses[expenseId]
                }
            }
            delete newState.categories[action.categoryId]
            return newState;
        case ADD_EXPENSES:
            return;
        case ADD_EXPENSE:
            newState = Object.assign({}, oldState);
            newState.expenses[action.expense.id] = { id: action.expense.id, ...action.expense }
            if (action.expense.accountId) { 
                // debugger
                newState.accounts[action.expense.accountId].ownedExpenses.push(action.expense.id);
            }
            if (action.expense.categoryId) {
                newState.categories[action.expense.categoryId].ownedExpenses.push(action.expense.id);
            }
            return newState;
        case DELETE_EXPENSE:
            // This runs 3 times when I cancel my create. Idk why
            newState = Object.assign({}, oldState);
            let expense = newState.expenses[action.expenseId];
            let idx;
            if (expense && expense.accountId) {
                idx = newState.accounts[expense.accountId].ownedExpenses.indexOf(expense.id);
                newState.accounts[expense.accountId].ownedExpenses.splice(idx, 1);
            }
            if (expense && expense.categoryId) {
                idx = newState.categories[expense.categoryId].ownedExpenses.indexOf(expense.id);
                newState.categories[expense.categoryId].ownedExpenses.splice(idx, 1);
            }
            delete newState.expenses[action.expenseId]
            return newState;
        default: 
            return oldState;
    }
}
