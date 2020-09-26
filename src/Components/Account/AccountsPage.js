import React, { useContext, useState } from "react";
import "../../reset.css";
import "./AccountsPage.css";
import AccountsPageItem from "./AccountsPageItem";
import AccountsForm from "./AccountsForm";
import Header from "../Header";
import TrackerContext from "../../Context/TrackerContext";

const AccountsPage = props => { 
    const [accounts, setAccounts] = useState({});
    const globalAccounts = useContext(TrackerContext);

    console.log(globalAccounts);

    const addAccount = account => { 
        setAccounts(prevState => { 
            let newState = Object.assign({}, prevState); 
            newState[account.id] = { id: account.id, ...account }
            return newState;
        })
    }

    const createAccount = () => { 
        let newId = Object.keys(accounts).length + 1;
        setAccounts(prevState => { 
            return { ...prevState, [newId]: { id: newId, formType: "create" } }
        });
    }

    const editAccount = account => { 
        console.log("ok")
        let newState = Object.assign({}, accounts);
        newState[account.id] = account;
        setAccounts(newState);
    }

    const deleteAccount = accountId => { 
        setAccounts(prevState => { 
            let newState = Object.assign({}, prevState);
            delete newState[accountId];
            console.log(accountId)
            return newState;
        })
    }

    console.log(accounts)

    return (
        <div> 
            <Header />
            {
            Object.keys(accounts).map(accountId => { 
                let account = accounts[accountId];
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

            <button onClick={createAccount}>New Account</button>
        </div>
    )
};

export default AccountsPage;