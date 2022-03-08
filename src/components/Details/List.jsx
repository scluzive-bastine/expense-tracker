import React, { useState, useContext, useEffect } from 'react'
import { ExpenseTrackerContext } from '../../context/context'
import { Row, Col, Space } from 'antd'
import { FiEdit } from 'react-icons/fi'
import { IoTrashOutline } from 'react-icons/io5'
import { MdBusinessCenter } from 'react-icons/md'
import DetailsModal from '../DetailsModal'
import EditModal from '../Form/EditModal'

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
  dtCtg: {
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
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
  const [editTransactionData, setEditTransactionData] = useState({})
  const { transactions, deleteTransaction, setIsEditValue, editValue } =
    useContext(ExpenseTrackerContext)
  // const [data, setData] = useState(transactions)
  const [id, setId] = useState('')
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => setIsModalVisible(false)

  const handleCancel = () => setIsModalVisible(false)

  const handleEdit = async (dt) => {
    setId(dt.id)
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
  }, [id])

  // Edit Modal
  const [isEditModalVisible, setisEditModalVisible] = useState(false)

  const showEditModal = (transaction) => {
    setisEditModalVisible(true)
    setEditTransactionData(transaction)
  }
  const handleEditModalOk = () => setisEditModalVisible(false)

  const handleEditModalCancel = () => setisEditModalVisible(false)

  return (
    <>
      {transactions.map((transaction) => {
        return (
          <div className='dtsCnt' style={styles.dtsCnt} key={transaction.id}>
            <Row gutter={[8, 8]} align='middle'>
              <Col xs={8} sm={8} md={4} lg={4}>
                <div className='dtCtg' style={styles.dtCtg}>
                  <div>{transaction.category}</div>
                  <MdBusinessCenter style={styles.dtIcn} />
                </div>
              </Col>
              <Col xs={24} sm={24} md={16} lg={16}>
                <div style={styles.dtShMdl} onClick={showModal}>
                  <div>{transaction.amount}</div>
                  <div>{transaction.description}</div>
                  <small>{transaction.date}</small>
                </div>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4}>
                <Space size={8}>
                  {/* <div style={styles.dtEdt} onClick={() => showEditModal(transaction)}> */}
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

      <DetailsModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      {/* <EditModal
        isEditModalVisible={isEditModalVisible}
        transaction={editTransactionData}
        handleOkhandleEditModalOk={handleEditModalOk}
        handleCancel={handleEditModalCancel}
      /> */}
    </>
  )
}

export default List
