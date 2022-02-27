import React, { useState } from 'react'
import { Card, Row, Col, Space } from 'antd'
import { FiEdit } from 'react-icons/fi'
import { IoTrashOutline } from 'react-icons/io5'
import { MdBusinessCenter } from 'react-icons/md'
import DetailsModal from '../DetailsModal'

const styles = {
  dtsCnt: {
    background: '#F7FBFB',
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
    background: 'rgba(18, 49, 35, 0.22)',
    color: '#123123',
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
const Details = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <>
      <Card>
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={24} md={6} lg={6}>
            ChartJS
          </Col>
          <Col xs={24} sm={24} md={18} lg={18}>
            <div style={styles.dtsCnt}>
              <Row gutter={[8, 8]} align='middle'>
                <Col xs={8} sm={8} md={4} lg={4}>
                  <div style={styles.dtCtg}>
                    <div>Travel</div>
                    <MdBusinessCenter style={styles.dtIcn} />
                  </div>
                </Col>
                <Col xs={24} sm={24} md={16} lg={16}>
                  <div style={styles.dtShMdl} onClick={showModal}>
                    <div>$1200</div>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit</div>
                    <small>02-02-2022</small>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4}>
                  <Space size={8}>
                    <div style={styles.dtEdt}>
                      <FiEdit />
                    </div>
                    <div style={styles.dtDlt}>
                      <IoTrashOutline />
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
      <DetailsModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  )
}

export default Details
