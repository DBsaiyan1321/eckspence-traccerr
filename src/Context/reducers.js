export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const ADD_ACCOUNTS = "ADD_ACCOUNTS";

export const trackerReducer = (state, action) => { 
    switch (action.type) { 
        case ADD_ACCOUNT: 
            return;
        case DELETE_ACCOUNT: 
            return;
        case ADD_ACCOUNTS:
            return;
        default: 
            return state;
    }
}
