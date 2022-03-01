import React, { useState, useEffect } from 'react'
import { Menu, Switch } from 'antd'

const getStorageTheme = () => {
  let theme = 'light'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Nav = () => {
  const [theme, setTheme] = useState(getStorageTheme)

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light')
    console.log(theme)
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <>
      <div className='logo d-flex align-items-center'>
        <div>Expense Tracker</div>
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          size='large'
          checkedChildren='🌜'
          unCheckedChildren='🌞'
          className='ms-3'
        />
      </div>
      <Menu mode='horizontal'>
        <Menu.Item key='app'>.</Menu.Item>
      </Menu>
    </>
  )
}

export default Nav
