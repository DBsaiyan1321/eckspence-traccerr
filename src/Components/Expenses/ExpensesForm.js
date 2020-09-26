import React, { useContext, useEffect, useState } from "react";
import TrackerContext from "../../Context/TrackerContext";

const ExpensesForm = props => {
    const [amount, setAmount] = useState("");
    const [color, setColor] = useState("#fffaaa");
    const [categoryId, setCategoryId] = useState(1);
    const [accountId, setAccountId] = useState(1);
    const [dateCreated, setDateCreated] = useState(false);

    const global = useContext(TrackerContext);

    useEffect(() => {
        if (props.expense) {
            // console.log(props.expense)
            setAmount(props.expense.amount)
            setCategoryId(props.expense.categoryId);
            setAccountId(props.expense.accountId);
            setColor(props.expense.color)
            // setDateCreated(!!props.expense.date);
        }
    }, [])

    const createExpense = e => {
        e.preventDefault();

        var today = new Date();

        if (dateCreated) {
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
        } else {
            today = null;
        }


        let expense = { id: props.id, amount, date: today, categoryId, accountId, color };
        props.addExpense(expense);
    }

    const editExpense = e => {
        e.preventDefault();

        let today = new Date();

        if (dateCreated) {
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
        } else {
            today = null;
        }


        let expense = { id: props.id, amount, date: today, categoryId, accountId, color };
        props.editExpense(expense);

        props.cancelEdit();
    }

    const cancelCreate = e => {
        e.preventDefault();
        props.deleteExpense(props.id);
    }

    const cancelEdit = e => {
        e.preventDefault();
        props.cancelEdit();
    }

    let action;
    if (props.formType === "create") {
        action = createExpense;
    } else {
        action = editExpense;
    }
    
    return (
        <form onSubmit={action}>
            <label htmlFor="color">Color: </label>
            <input type="color" id="color" name="color" value={color} onChange={e => setColor(e.target.value)} />

            <input onChange={e => setAmount(e.target.value)} type="text" value={amount} placeholder="Amount" required="required" />

            <label htmlFor="dateCreate">Date</label>
            <input onChange={() => setDateCreated(!dateCreated)} type="checkbox" id="dateCreated" name="dateCreated" />

            <label htmlFor="accountId">Account</label>
            <select id="accountId" onChange={e => setAccountId(e.target.value)}>
                {
                    Object.keys(global.globalState.accounts).map(accountId => {
                        return <option key={`{${accountId}`} value={accountId}>{`${global.globalState.accounts[accountId].title}`}</option>
                    })
                }
            </select> 

            <label htmlFor="categoryId">Category</label>
            <select id="categoryId" onChange={e => setCategoryId(e.target.value)}>
                {
                    Object.keys(global.globalState.categories).map(categoryId => {
                        return <option key={`{${categoryId}`} value={categoryId}>{`${global.globalState.categories[categoryId].title}`}</option>
                    })
                }
            </select> 

            <input type="submit" value={props.formType} />

            {
                props.formType === "create" ?
                    <button onClick={cancelCreate}>Cancel</button> :
                    <button onClick={cancelEdit}>Cancel</button>
            }
        </form>
    )
};

export default ExpensesForm;