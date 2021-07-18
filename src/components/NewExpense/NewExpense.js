import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showAddButton, setShowAddButton] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        setShowAddButton(false);
    };

    const addNewExpense = () => {
        setShowAddButton(true);
    }
    const cancelWhenClick = () => {
        setShowAddButton(false);
    }
    return (
        <div className="new-expense">
            {!showAddButton && <button onClick={addNewExpense}>Add NewExpense</button>}
            {showAddButton && <ExpenseForm onClickCancel={cancelWhenClick} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;