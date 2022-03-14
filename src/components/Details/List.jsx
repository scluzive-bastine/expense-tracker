import React, { useState, useContext, useEffect } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import { Row, Col, Space } from 'antd'
import { FiEdit } from 'react-icons/fi'
import { IoTrashOutline } from 'react-icons/io5'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import DetailsModal from '../DetailsModal'
import EditModal from '../Form/EditModal'
import { expenseCategories, incomeCategories } from '../../constants/categories'
import formatText from '../../Utils/formatText'

const styles = {
  dtsCnt: {
    borderRadius: '8px',
    padding: '10px',
  },
  dtEdt: {
    width: '32px',
    height: '32px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#3DBBB4',
    background: 'rgba(61, 187, 180, 0.22)',
    padding: '5px',
    borderRadius: '5px',
  },
  dtDlt: {
    width: '32px',
    height: '32px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#CF4B4B',
    background: 'rgba(207, 75, 75, 0.22)',
    padding: '5px',
    borderRadius: '5px',
  },
  dtIcn: {
    fontSize: '30px',
  },
  dtShMdl: {
    cursor: 'pointer',
    '&hover': {
      color: 'red',
    },
  },
}
const List = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [checkDeleteClicked, setDeleteClicked] = useState(false)
  const [showTransaction, setShowTransaction] = useState({})
  const { transactions, deleteTransaction, setIsEditValue } = useContext(ExpenseTrackerContext)
  const [id, setId] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const showModal = async (transaction) => {
    setIsModalVisible(true)
    setShowTransaction(transaction)
  }

  const handleOk = () => setIsModalVisible(false)

  const handleCancel = () => setIsModalVisible(false)

  const handleEdit = async (dt) => {
    setId(dt.id)
    setIsEditing(isEditing === true ? false : true)
  }
  const handleDelete = (id) => {
    deleteTransaction(id)
    setDeleteClicked(true)
  }

  useEffect(() => {
    if (transactions) {
      const item = transactions.find((t) => t.id === id)
      setIsEditValue(item)
    }
  }, [id, isEditing])

  useEffect(() => {}, [showTransaction])

  return (
    <>
      {transactions.map((transaction) => {
        const amount = transaction.amount
        const type = transaction.type === 'Income' ? incomeCategories : expenseCategories
        const filteredIcon = type.filter((fl) => fl.type === transaction.category)
        const icon = filteredIcon.map((c) => c.icon)
        const background = filteredIcon.map((c) => c.color)
        return (
          <div className='dtsCnt' style={styles.dtsCnt} key={transaction.id}>
            <Row gutter={[8, 8]} align='middle'>
              <Col xs={24} sm={24} md={20} lg={20}>
                <Row gutter={[8, 8]} align='middle'>
                  <Col xs={4} sm={8} md={4} lg={6}>
                    <div className={transaction.type === 'Income' ? 'inContainer' : 'expContainer'}>
                      <div className='d-none d-sm-none d-lg-block' style={{ fontSize: '15px' }}>
                        {transaction.category}
                      </div>
                      <div style={{ fontSize: '20px' }}>{icon}</div>
                    </div>
                  </Col>
                  <Col xs={20} sm={24} md={16} lg={14}>
                    <div style={styles.dtShMdl} onClick={() => showModal(transaction)}>
                      <div className={transaction.type === 'Income' ? 'income' : 'expense'}>
                        ${amount.toLocaleString()}
                      </div>
                      <div className='d-block d-sm-none'>
                        {formatText(transaction.description, 30)}
                      </div>
                      <div className='d-none d-md-block'>
                        {formatText(transaction.description, 80)}
                      </div>

                      <small>{transaction.date}</small>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4}>
                <Space size={8}>
                  <div style={styles.dtEdt} onClick={() => handleEdit(transaction)}>
                    <FiEdit />
                  </div>
                  <div style={styles.dtDlt} onClick={() => handleDelete(transaction.id)}>
                    <IoTrashOutline />
                  </div>
                </Space>
              </Col>
            </Row>
          </div>
        )
      })}

      {isModalVisible && (
        <DetailsModal
          isModalVisible={isModalVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          transaction={showTransaction}
          key={id}
        />
      )}
    </>
  )
}

export default List
