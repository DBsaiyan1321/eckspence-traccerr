import React, { useState } from "react";
import "../../reset.css";
import "./AccountsPage.css";
import AccountsPageItem from "./AccountsPageItem";
import AccountsForm from "./AccountsForm";
import Header from "../Header";

const AccountsPage = props => { 
    const [accounts, setAccounts] = useState({});



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
                return account.formType === "create" || account.formType === "edit" 
                    ? 
                    <AccountsForm 
                        key={account.id} 
                        addAccount={addAccount} 
                        id={account.id} 
                        formType={account.formType} 
                    /> 
                    : 
                    <AccountsPageItem 
                        key={account.id} 
                        account={account} 
                        deleteAccount={deleteAccount} 
                    />
            })
            }

            <button onClick={createAccount}>New Category</button>
        </div>
    )
};

export default AccountsPage;