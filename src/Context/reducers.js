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
            newState["accounts"][action.account.id] = { id: action.account.id, ...action.account }
            return newState;
        case DELETE_ACCOUNT: 
            newState = Object.assign({}, oldState); 
            delete newState["accounts"][action.accountId]
            return newState;
        case ADD_CATEGORIES:
            return;
        case ADD_CATEGORY:
            newState = Object.assign({}, oldState);
            newState.categories[action.category.id] = { id: action.category.id, ...action.category }
            return newState;
        case DELETE_CATEGORY:
            newState = Object.assign({}, oldState);
            delete newState.categories[action.categoryId]
            return newState;
        case ADD_EXPENSES:
            return;
        case ADD_EXPENSE:
            newState = Object.assign({}, oldState);
            return newState;
        case DELETE_EXPENSE:
            newState = Object.assign({}, oldState);
            return newState;
        default: 
            return oldState;
    }
}
