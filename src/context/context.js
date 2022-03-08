import React, { useState, createContext, useReducer } from 'react'
import { contextReducer } from './contextReducer'

const initialState = []
export const ExpenseTrackerContext = createContext()

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState)
  const [editValue, setIsEditValue] = useState(null)

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

  return (
    <ExpenseTrackerContext.Provider
      value={{
        addTransaction,
        editTransaction,
        deleteTransaction,
        setIsEditValue,
        transactions,
        editValue,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  )
}
