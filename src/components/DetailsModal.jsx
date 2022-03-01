import React from 'react'
import { Button, Modal } from 'antd'
import inc from '../images/incbg.png'
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
  dtMdHDdsc: {
    color: '#3dbbb4',
  },
  dtMdhdDtlsCnt: {
    fontSize: '15px',
  },
  dtMdhdAmt: {
    fontSize: '30px',
    fontWeight: '700',
  },
}
const DetailsModal = ({ isModalVisible, handleOk, handleCancel }) => {
  return (
    <Modal
      title='Income'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div style={styles.dtMdCnt}>
        <div style={styles.dtMdHdImg} className='d-flex justify-content-center ms-auto me-auto'>
          <img src={inc} className='img-fluid' alt='' />
        </div>
        <div style={styles.dtMdhd}>
          <div style={styles.dtMdHDt}>Income</div>
          <div style={styles.dtMdHDdsc}>Congratulations you earned some money</div>
        </div>
        <div className='dtMdhdDtls mt-4'>
          <span>Category</span>
          <div>Business</div>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='dtMdhdDtls mt-4'>
            <span>Category</span>
            <div>Business</div>
          </div>
          <div className='dtMdhdDtls mt-4'>
            <span>Date</span>
            <div>02-02-2022</div>
          </div>
        </div>
        <div className='dtMdhdDtls mt-4'>
          <span>Description</span>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus cum ipsum facere
            suscipit tenetur illo quas dolore harum exercitationem debitis.
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='dtMdhdDtls mt-4'>
            <span>Amount</span>
            <div style={styles.dtMdhdAmt}>$3,000</div>
          </div>
          <Button type='primary' size='small'>
            Add Note
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default DetailsModal
