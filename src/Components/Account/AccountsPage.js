import React, { useContext, useState } from "react";
import "../../reset.css";
import "./AccountsPage.css";
import AccountsPageItem from "./AccountsPageItem";
import AccountsForm from "./AccountsForm";
import Header from "../Header";
import TrackerContext from "../../Context/TrackerContext";
import { ADD_ACCOUNT, ADD_ACCOUNTS, DELETE_ACCOUNT } from "../../Context/reducers";

const AccountsPage = props => { 
    const [accounts, setAccounts] = useState({});
    const global = useContext(TrackerContext);

    const addAccount = account => { 
        global.dispatch({ type: ADD_ACCOUNT, account})
    }

    const createAccount = () => { 
        let newId = Object.keys(global.globalState.accounts).length + 1;
        let account = { id: newId, formType: "create" };
        global.dispatch({ type: ADD_ACCOUNT, account })
    }

    const editAccount = account => { 
        global.dispatch({ type: ADD_ACCOUNT, account })
    }

    const deleteAccount = accountId => { 
        global.dispatch({ type: DELETE_ACCOUNT, accountId })
    }

    return (
        
            <div className="accounts-page">
                <h1>Accounts</h1> 
                <ul>
                    {
                        Object.keys(global.globalState.accounts).map(accountId => {
                            let account = global.globalState.accounts[accountId];
                            return account.formType === "create"
                                ?
                                <AccountsForm
                                    key={account.id}
                                    addAccount={addAccount}
                                    id={account.id}
                                    formType={account.formType}
                                    deleteAccount={deleteAccount}
                                />
                                :
                                <AccountsPageItem
                                    key={account.id}
                                    account={account}
                                    deleteAccount={deleteAccount}
                                    editAccount={editAccount}
                                />
                        })
                    }
                </ul>


                <button onClick={createAccount}>New Account</button>
            </div>
    )
};

export default AccountsPage;