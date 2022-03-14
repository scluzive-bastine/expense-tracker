import React, { useState, createContext, useReducer } from 'react'
import { contextReducer } from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 700,
    category: 'House',
    type: 'Expense',
    date: '2022-02-28',
    id: '6baf2fe2-d74c-4c03-8572-1c81d46bd62a',
    description: 'Expense on housing',
  },
  {
    amount: 1100,
    category: 'Travel',
    type: 'Expense',
    date: '2022-03-01',
    id: '30f67a6b-4ba4-436a-8a52-60bea76dcb99',
    description: 'Expense on traveling',
  },
  {
    amount: 2500,
    category: 'Salary',
    type: 'Income',
    date: '2022-02-28',
    id: 'fd4c8786-0539-451c-8015-ee6854af39f6',
    description: 'Income from salary payment',
  },
  {
    amount: 700,
    category: 'Gifts',
    type: 'Income',
    date: '2022-03-01',
    id: '886e4752-916d-4b9a-82a7-438866e85cf0',
    description: 'Received gifts from my Aunt May',
  },
]
export const ExpenseTrackerContext = createContext()

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)
  const [editValue, setIsEditValue] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  //add transaction
  const addTransaction = (transactions) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transactions })
  }

  //edit transaction
  const editTransaction = (transaction) => {
    dispatch({ type: 'EDIT_TRANSACTION', payload: transaction })
  }

  //delete transaction
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id })
  }

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount
  }, 0)

  return (
    <ExpenseTrackerContext.Provider
      value={{
        addTransaction,
        editTransaction,
        deleteTransaction,
        setIsEditValue,
        transactions,
        editValue,
        isEditing,
        setIsEditing,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
