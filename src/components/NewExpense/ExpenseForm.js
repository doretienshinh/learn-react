import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnterdTitle] = useState('');
    const [enteredAmount, setEnterdAmount] = useState('');
    const [enteredDate, setEnterdDate] = useState('');
    const titleChangeHandler = (event) => {
        setEnterdTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnterdAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value);
    }

    return (
        <form className="">
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
        </form>
    )
};

export default ExpenseForm;