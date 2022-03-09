import React, { useState } from 'react'
import { Card, Row, Col } from 'antd'
import List from './List'

const styles = {
  dtCntHd: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
  },
}
const Details = () => {
  return (
    <>
      <Card className='mCrd'>
        <div className='dtCntHd' style={styles.dtCntHd}>
          <div>Income</div>
          <div>Total Income: $1,500</div>
        </div>
        <Row gutter={[8, 8]}>
          {/* <Col xs={24} sm={24} md={6} lg={6}>
            ChartJS
          </Col> */}
          <Col xs={24} sm={24} md={24} lg={24}>
            <List />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Details
