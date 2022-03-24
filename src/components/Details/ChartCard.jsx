import React from 'react'
import useTransaction from '../../useTransactions'
import { Card, Row, Col } from 'antd'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const ChartCard = ({ title }) => {
  const { total, chartData } = useTransaction(title)
  return (
    <>
      <Card className='mCrd mb-3'>
        <Row gutter={[8, 8]}>
          <Col xs={18} sm={18} md={18} lg={18}>
            <Doughnut data={chartData} />
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <div className='d-flex align-items-center h-100'>
              <div className='chrtTxt'>
                <div>{title}</div>
                <div>Total: ${total}</div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default ChartCard
