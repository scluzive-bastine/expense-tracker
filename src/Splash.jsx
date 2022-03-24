import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Splash = () => {
  return (
    <>
      <div
        className='container-fluid d-flex align-items-center justify-content-center'
        style={{ height: '100vh', background: 'rgb(237, 240, 242)' }}
      >
        <div className='container text-center'>
          <div className='splHder'>Expense Tracker</div>
          <div className='mt-3 splDesc'>
            Expence tracker built with Speechly, <br /> which enables realtime speech to text
          </div>
          <Link to='app'>
            <Button className='mt-3 ps-5 pe-5 btc' size='large' shape='round'>
              Enter App
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Splash
