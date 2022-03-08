import React, { useState, useContext, useEffect } from 'react'
import { Button, DatePicker, Form as FormInterface, Input, Select } from 'antd'
import { ExpenseTrackerContext } from '../../context/context'
import { v4 as uuidv4 } from 'uuid'

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
  BigTranscript,
} from '@speechly/react-ui'
import moment from 'moment'
import Edit from './Edit'

const initialState = {
  amount: '',
  type: '',
  category: '',
  date: '',
  description: '',
}

const { Option } = Select

const Form = () => {
  const [formData, setFormData] = useState(initialState)
  const { addTransaction, editValue } = useContext(ExpenseTrackerContext)

  const createTransaction = () => {
    if (Number.isNaN(Number(formData.amount))) return
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction)
    setFormData(initialState)
  }
  function handleDateChange(date, dateString) {
    setFormData({ ...formData, date: dateString })
  }
  return (
    <>
      {editValue ? (
        <Edit />
      ) : (
        <FormInterface layout='vertical' size='large'>
          <FormInterface.Item label='Amount'>
            <Input
              className='fifCntrl'
              placeholder='$500'
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
              <Option value='Business'>Business</Option>
              <Option value='Travel'>Travel</Option>
            </Select>
          </FormInterface.Item>
          <FormInterface.Item label='Date'>
            <DatePicker
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
          <Button className='mt-3' type='primary' size='large' block onClick={createTransaction}>
            Create
          </Button>
        </FormInterface>
      )}
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer> */}
    </>
  )
}

export default Form
