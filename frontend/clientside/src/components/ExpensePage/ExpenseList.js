import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList( {expense, setExpense }) {
    const removeExpense = i => {
        let temp = expense.filter((v, index) => index !==i);
        setExpense(temp);
        }
    
        const  sortByDate = (a,b) =>{
            return a.date-b.date;
        }
    
    
    return (
        <div className="income-list">
        {
            expense.sort(sortByDate).map((value,index) => (
                <ExpenseItem
                key={index}
                expense={value}
                index={index}
                removeItem={removeExpense}
                
                />
            ))
        }
        
    </div>
    )
}
