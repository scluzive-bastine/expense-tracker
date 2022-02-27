import React, { useState } from 'react'
import { Menu } from 'antd'

import './Nav.css'

const Nav = () => {
  const [active, setActive] = useState('mail')

  const handleClick = (e) => {
    setActive(e.key)
  }
  return (
    <>
      <div className='logo'>Expense Tracker</div>
      <Menu onClick={handleClick} selectedKeys={active} mode='horizontal'>
        <Menu.Item key='app'>.</Menu.Item>
      </Menu>
    </>
  )
}

export default Nav
