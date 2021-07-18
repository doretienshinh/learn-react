import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        setIsEditing(false);
    };

    const addNewExpense = () => {
        setIsEditing(true);
    }
    const cancelWhenClick = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={addNewExpense}>Add NewExpense</button>}
            {isEditing && <ExpenseForm onClickCancel={cancelWhenClick} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    );
};

export default NewExpense;