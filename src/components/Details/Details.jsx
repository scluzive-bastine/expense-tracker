import React, { useContext, useState } from 'react'
import { Card, Row, Col } from 'antd'
import List from './List'
import ChartCard from './ChartCard'
import { ExpenseTrackerContext } from '../../context/context'

const styles = {
  dtCntHd: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    padding: '10px',
  },
}
const Details = () => {
  const { balance } = useContext(ExpenseTrackerContext)
  return (
    <>
      <Row gutter={[8, 8]}>
        <Col xs={24} sm={24} md={24} lg={12}>
          <ChartCard title='Income' />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12}>
          <ChartCard title='Expense' />
        </Col>
      </Row>
      <Card className='mCrd'>
        <div className='dtCntHd' style={styles.dtCntHd}>
          <div>Transactions</div>
          <div>Total Balance: {balance}</div>
        </div>
        <Row gutter={[8, 8]}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <List />
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default Details
