import React from 'react'
import { Card } from 'antd'
import Form from '../Form/Form'
const Main = () => {
  return (
    <>
      <Card className='mCrd'>
        <div className='header'>Expense Tracker</div>
        <Form />
      </Card>
    </>
  )
}

export default Main
