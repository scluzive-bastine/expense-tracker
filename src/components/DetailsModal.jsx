import React from 'react'
import { Modal } from 'antd'

const DetailsModal = ({ isModalVisible, handleOk, handleCancel }) => {
  return (
    <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
    </Modal>
  )
}

export default DetailsModal
