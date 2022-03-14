export const contextReducer = (state, action) => {
  let transactions

  switch (action.type) {
    case 'ADD_TRANSACTION':
      transactions = [action.payload, ...state]
      localStorage.setItem('transactions', JSON.stringify(transactions))

      return transactions
    case 'EDIT_TRANSACTION':
      const updatedTransaction = action.payload
      const updatedTransactions = state.map((t) => {
        if (t.id === updatedTransaction.id) {
          return updatedTransaction
        }
        return t
      })
      transactions = updatedTransactions
      return transactions
    case 'DELETE_TRANSACTION':
      transactions = state.filter((t) => t.id !== action.payload)
      return transactions
    default:
      return state
  }
}
