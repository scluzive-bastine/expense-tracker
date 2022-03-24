import React from 'react'
import speechly from '../../images/speechly.svg'

export const Footer = () => {
  return (
    <div>
      Expense Tracker created with{' '}
      <a href='https://www.speechly.com/' rel='noreferrer' target='_blank'>
        <img src={speechly} style={{ width: '100px' }} alt='' />
      </a>{' '}
    </div>
  )
}
