export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const ADD_ACCOUNTS = "ADD_ACCOUNTS";

export const trackerReducer = (oldState, action) => { 
    Object.freeze(oldState)
    let newState;
    switch (action.type) { 
        case ADD_ACCOUNT: 
            newState = Object.assign({}, oldState); 
            newState["accounts"][action.account.id] = { id: action.account.id, ...action.account }
            return newState;
        case DELETE_ACCOUNT: 
            newState = Object.assign({}, oldState); 
            delete newState["accounts"][action.accountId]
            return newState;
        case ADD_ACCOUNTS:
            return;
        default: 
            return oldState;
    }
}
