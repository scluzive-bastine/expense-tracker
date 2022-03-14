import React, { useContext, useEffect, useState } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import { Button, DatePicker, Form as FormInterface, Input, Select } from 'antd'
import moment from 'moment'

import { incomeCategories, expenseCategories } from '../../constants/categories'
const { Option } = Select

const Edit = () => {
  const { editTransaction, editValue, setIsEditValue, transactions, setIsEditing, isEditing } =
    useContext(ExpenseTrackerContext)

  // const [formData, setFormData] = useState({
  //   id: editValue.id,
  //   amount: editValue.amount,
  //   type: editValue.type,
  //   category: editValue.category,
  //   date: editValue.date,
  //   description: editValue.description,
  // })

  const data = {
    id: null,
    amount: '',
    type: '',
    category: '',
    date: '',
    description: '',
  }
  const [formData, setFormData] = useState(data)
  function handleDateChange(date, dateString) {
    setFormData({ ...formData, date: dateString })
  }

  const updateTransaction = async () => {
    // console.log(formData.amount)
    if (Number.isNaN(Number(formData.amount))) return
    const transaction = { ...formData, amount: Number(formData.amount) }
    editTransaction(transaction)
    setIsEditValue(null)
  }

  useEffect(() => {
    const item = transactions.find((t) => t.id === editValue.id)
    setFormData(item)
  }, [transactions, editValue, data.type, isEditing])

  const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories

  return (
    <>
      <FormInterface layout='vertical' size='large'>
        <FormInterface.Item label='Amount'>
          <Input
            className='fifCntrl'
            placeholder='500'
            type='number'
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          />
        </FormInterface.Item>
        <FormInterface.Item label='Type'>
          <Select
            placeholder='Select Type'
            value={formData.type}
            onChange={(value) => setFormData({ ...formData, type: value })}
          >
            <Option value='Income'>Income</Option>
            <Option value='Expense'>Expense</Option>
          </Select>
        </FormInterface.Item>
        <FormInterface.Item label='Category'>
          <Select
            placeholder='Select Category'
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
          >
            {selectedCategory.map((sc) => (
              <Option value={sc.type} key={sc.type}>
                {sc.type}
              </Option>
            ))}
          </Select>
        </FormInterface.Item>
        <FormInterface.Item label='Date'>
          <DatePicker
            // value={formData.date ? moment(formData.date) : ''}
            value={formData.date ? moment(formData.date) : ''}
            format='YYYY-MM-DD'
            // onChange={(dateString) => setFormData({ ...formData, date: dateString })}
            onChange={handleDateChange}
          />
        </FormInterface.Item>
        <FormInterface.Item label='Description'>
          <Input.TextArea
            className='fifCntrl'
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </FormInterface.Item>
        <Button
          className='mt-3'
          type='primary'
          size='large'
          block
          onClick={() => updateTransaction()}
        >
          Edit
        </Button>
      </FormInterface>
    </>
  )
}

export default Edit
