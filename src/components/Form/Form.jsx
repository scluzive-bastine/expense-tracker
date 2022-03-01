import React from 'react'
import { Button, DatePicker, Form as FormInterface, Input, Select } from 'antd'
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
  BigTranscript,
} from '@speechly/react-ui'
const Form = () => {
  return (
    <>
      <FormInterface layout='vertical' size='large'>
        <FormInterface.Item label='Amount'>
          <Input className='fifCntrl' placeholder='$500' />
        </FormInterface.Item>
        <FormInterface.Item label='Type'>
          <Select placeholder='Select Type'>
            <Select.Option value='Income'>Income</Select.Option>
            <Select.Option value='Expense'>Expense</Select.Option>
          </Select>
        </FormInterface.Item>
        <FormInterface.Item label='Category'>
          <Select placeholder='Select Category'>
            <Select.Option value='Business'>Business</Select.Option>
            <Select.Option value='Travel'>Travel</Select.Option>
          </Select>
        </FormInterface.Item>
        <FormInterface.Item label='Date'>
          <DatePicker />
        </FormInterface.Item>
        <FormInterface.Item label='Description'>
          <Input.TextArea className='fifCntrl' />
        </FormInterface.Item>
        <Button className='mt-3' type='primary' size='large' block>
          Create
        </Button>
      </FormInterface>
      {/* <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer> */}
    </>
  )
}

export default Form
