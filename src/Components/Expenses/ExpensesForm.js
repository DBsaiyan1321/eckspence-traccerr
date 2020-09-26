import React, { useEffect, useState } from "react";

const ExpensesForm = props => {
    const [amount, setAmount] = useState("");
    const [color, setColor] = useState("#fffaaa");
    const [categoryId, setCategoryId] = useState(1);
    const [accountId, setAccountId] = useState(1);
    const [dateCreated, setDateCreated] = useState(false);

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

            <input onChange={e => setAmount(e.target.value)} type="text" value={amount} placeholder="Amount" />

            <label htmlFor="dateCreate">Date</label>
            <input onChange={() => setDateCreated(!dateCreated)} type="checkbox" id="dateCreated" name="dateCreated" />

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