import React, { useState, useContext, useEffect } from 'react'
import { Modal, Button, DatePicker, Form as FormInterface, Input, Select } from 'antd'
import moment from 'moment'
import { ExpenseTrackerContext } from '../../context/context'

const { Option } = Select

const EditModal = ({ isEditModalVisible, transaction, handleOk, handleCancel }) => {
  const { editTransaction, editValue, setIsEditValue, transactions } =
    useContext(ExpenseTrackerContext)

  const { id, amount, type, category, date, description } = transaction

  //   const formData = {
  //     id: id,
  //     amount: amount,
  //     type: type,
  //     category: category,
  //     date: date,
  //     description: description,
  //   }

  const formData = {
    id: null,
    amount: '',
    type: '',
    category: '',
    date: '',
    description: '',
  }
  const [data, setData] = useState(formData)

  function handleDateChange(date, dateString) {
    setData({ ...data, date: dateString })
  }

  const updateTransaction = async () => {
    if (Number.isNaN(Number(data.amount))) return
    const transaction = { ...data, amount: Number(data.amount) }
    editTransaction(transaction)
    //   setIsEditValue({ ...editValue, state: false, data: {} })
    setIsEditValue({ state: false, data: {} })
    setData({})
  }

  useEffect(() => {
    const item = transactions.find((t) => t.id === id)
    setData(item)
  }, [transactions, id])

  return (
    <>
      <Modal
        title='Edit Transaction'
        visible={isEditModalVisible}
        footer={null}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormInterface layout='vertical' size='large'>
          <FormInterface.Item label='Amount'>
            <Input
              className='fifCntrl'
              placeholder='$500'
              type='number'
              value={data.amount}
              onChange={(e) => setData({ ...data, amount: e.target.value })}
            />
          </FormInterface.Item>
          <FormInterface.Item label='Type'>
            <Select
              placeholder='Select Type'
              value={data.type}
              onChange={(value) => setData({ ...data, type: value })}
            >
              <Option value='Income'>Income</Option>
              <Option value='Expense'>Expense</Option>
            </Select>
          </FormInterface.Item>
          <FormInterface.Item label='Category'>
            <Select
              placeholder='Select Category'
              value={data.category}
              onChange={(value) => setData({ ...data, category: value })}
            >
              <Option value='Business'>Business</Option>
              <Option value='Travel'>Travel</Option>
            </Select>
          </FormInterface.Item>
          <FormInterface.Item label='Date'>
            <DatePicker
              // value={formData.date ? moment(formData.date) : ''}
              value={data.date ? moment(data.date) : ''}
              format='YYYY-MM-DD'
              // onChange={(dateString) => setFormData({ ...formData, date: dateString })}
              onChange={handleDateChange}
            />
          </FormInterface.Item>
          <FormInterface.Item label='Description'>
            <Input.TextArea
              className='fifCntrl'
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
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
      </Modal>
    </>
  )
}

export default EditModal
