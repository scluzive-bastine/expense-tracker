import React from 'react'
import { Card } from 'antd'
import Form from '../Form/Form'
const Main = () => {
  return (
    <>
      <Card>
        <div className='header'>Expense Tracker</div>
        <Form />
      </Card>
    </>
  )
}

export default Main
