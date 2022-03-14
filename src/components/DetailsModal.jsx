import React from 'react'
import { Button, Modal } from 'antd'
import inc from '../images/incbg.png'
import exp from '../images/expbg.png'
import { incomeCategories, expenseCategories } from '../constants/categories'
const styles = {
  dtMdCnt: {},
  dtMdhd: {
    textAlign: 'center',
  },
  dtMdHdImg: {
    width: '150px',
    height: '150px',
  },
  dtMdHDt: {
    fontSize: '30px',
    marginTop: '10px',
  },
  dtMdhdDtlsCnt: {
    fontSize: '15px',
  },
  dtMdhdAmt: {
    fontSize: '30px',
    fontWeight: '700',
  },
}
const DetailsModal = ({ isModalVisible, handleOk, handleCancel, transaction }) => {
  const type = transaction.type === 'Income' ? incomeCategories : expenseCategories
  const filteredIcon = type.filter((fl) => fl.type === transaction.category)
  const icon = filteredIcon.map((c) => c.icon)
  const amount = transaction.amount
  return (
    <Modal
      title={transaction.type === 'Income' ? 'Income Details' : 'Expense Details'}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <div style={styles.dtMdCnt}>
        <div style={styles.dtMdHdImg} className='d-flex justify-content-center ms-auto me-auto'>
          <img src={transaction.type === 'Income' ? inc : exp} className='img-fluid' alt='' />
        </div>
        <div style={styles.dtMdhd}>
          <div
            className={transaction.type === 'Income' ? 'income' : 'expense'}
            style={styles.dtMdHDt}
          >
            {transaction.type}
          </div>
        </div>
        <div className='dtMdhdDtls mt-4'>
          <span>Type</span>
          <div className={transaction.type === 'Income' ? 'income' : 'expense'}>
            {transaction.type}
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='dtMdhdDtls mt-4'>
            <span>Category</span>
            <div className='d-flex align-items-center'>
              {icon} <div className='ms-1'>{transaction.category}</div>
            </div>
          </div>
          <div className='dtMdhdDtls mt-4'>
            <span>Date</span>
            <div>{transaction.date}</div>
          </div>
        </div>
        <div className='dtMdhdDtls mt-4'>
          <span>Description</span>
          <div>{transaction.description}</div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='dtMdhdDtls mt-4'>
            <span>Amount</span>
            <div
              style={styles.dtMdhdAmt}
              className={transaction.type === 'Income' ? 'income' : 'expense'}
            >
              ${amount.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default DetailsModal
