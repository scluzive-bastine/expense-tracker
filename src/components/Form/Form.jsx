import React, { useState, useContext, useEffect, useRef } from 'react'
import { Button, DatePicker, Form as FormInterface, Input, Select, notification } from 'antd'
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
import { expenseCategories, incomeCategories } from '../../constants/categories'
import { useSpeechContext } from '@speechly/react-client'

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

  const { segment } = useSpeechContext()

  const openNotification = (type) => {
    notification[type]({
      message: `Fill the form`,
      description: `Amount, type, category and date needs to be entered!`,
    })
  }

  const createTransaction = () => {
    if (
      Number.isNaN(Number(formData.amount)) ||
      !formData.type ||
      !formData.category ||
      !formData.date
    )
      return openNotification('error')
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction)
    setFormData(initialState)
  }

  useEffect(() => {
    if (segment) {
      if (segment.intent.intent === 'add_expense') {
        setFormData({ ...formData, type: 'Expense' })
      } else if (segment.intent.intent === 'add_income') {
        setFormData({ ...formData, type: 'Income' })
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        return createTransaction()
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        return setFormData(initialState)
      }
      segment.entities.forEach((e) => {
        const category = `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`
        switch (e.type) {
          case 'amount':
            setFormData({ ...formData, amount: e.value })
            break
          case 'category':
            if (incomeCategories.map((ic) => ic.type).includes(category)) {
              setFormData({ ...formData, type: 'Income', category })
            } else if (expenseCategories.map((ic) => ic.type).includes(category)) {
              setFormData({ ...formData, type: 'Expense', category })
            }
            break
          case 'date':
            // setFormData({ ...formData, date: e.value })
            handleDateChange('', e.value)
            break
          case 'description':
            setFormData({
              ...formData,
              description: `${e.value.charAt(0)}${e.value.slice(1).toLowerCase()}`,
            })
          default:
            break
        }
      })
      if (
        segment.isFinal &&
        formData.amount &&
        formData.category &&
        formData.type &&
        formData.date
      ) {
        createTransaction()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segment])

  function handleDateChange(date, dateString) {
    setFormData({ ...formData, date: dateString })
  }

  const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories

  return (
    <>
      {editValue ? (
        <Edit />
      ) : (
        <div>
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

          <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
          </PushToTalkButtonContainer>
        </div>
      )}
    </>
  )
}

export default Form
