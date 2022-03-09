import {
  MdOutlineBusinessCenter,
  MdOutlinePayments,
  MdOutlineSavings,
  MdOutlinePets,
} from 'react-icons/md'
import { RiSafe2Line, RiPhoneLine, RiMovie2Line } from 'react-icons/ri'
import { GiMoneyStack, GiPayMoney, GiAirplaneDeparture } from 'react-icons/gi'
import {
  IoGameControllerOutline,
  IoGiftOutline,
  IoShirtOutline,
  IoFastFoodOutline,
  IoChatboxEllipsesOutline,
} from 'react-icons/io5'
import { BsHouse } from 'react-icons/bs'
import { IoMdPaper } from 'react-icons/io'
import { AiOutlineCar, AiOutlineShoppingCart } from 'react-icons/ai'
const incomeColors = [
  '#123123',
  '#154731',
  '#165f40',
  '#16784f',
  '#14915f',
  '#10ac6e',
  '#0bc77e',
  '#04e38d',
  '#00ff9d',
]
const expenseColors = [
  '#b50d12',
  '#bf2f1f',
  '#c9452c',
  '#d3583a',
  '#dc6a48',
  '#e57c58',
  '#ee8d68',
  '#f79d79',
  '#ffae8a',
  '#cc474b',
  '#f55b5f',
]

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0], icon: <MdOutlineBusinessCenter /> },
  { type: 'Investments', amount: 0, color: incomeColors[1], icon: <RiSafe2Line /> },
  { type: 'Extra income', amount: 0, color: incomeColors[2], icon: <GiMoneyStack /> },
  { type: 'Deposits', amount: 0, color: incomeColors[3], icon: <GiPayMoney /> },
  { type: 'Lottery', amount: 0, color: incomeColors[4], icon: <IoGameControllerOutline /> },
  { type: 'Gifts', amount: 0, color: incomeColors[5], icon: <IoGiftOutline /> },
  { type: 'Salary', amount: 0, color: incomeColors[6], icon: <MdOutlinePayments /> },
  { type: 'Savings', amount: 0, color: incomeColors[7], icon: <MdOutlineSavings /> },
  { type: 'Rental income', amount: 0, color: incomeColors[8], icon: <BsHouse /> },
]

export const expenseCategories = [
  { type: 'Bills', amount: 0, color: expenseColors[0], icon: <IoMdPaper /> },
  { type: 'Car', amount: 0, color: expenseColors[1], icon: <AiOutlineCar /> },
  { type: 'Clothes', amount: 0, color: expenseColors[2], icon: <IoShirtOutline /> },
  { type: 'Travel', amount: 0, color: expenseColors[3], icon: <GiAirplaneDeparture /> },
  { type: 'Food', amount: 0, color: expenseColors[4], icon: <IoFastFoodOutline /> },
  { type: 'Shopping', amount: 0, color: expenseColors[5], icon: <AiOutlineShoppingCart /> },
  { type: 'House', amount: 0, color: expenseColors[6], icon: <BsHouse /> },
  { type: 'Entertainment', amount: 0, color: expenseColors[7], icon: <RiMovie2Line /> },
  { type: 'Phone', amount: 0, color: expenseColors[8], icon: <RiPhoneLine /> },
  { type: 'Pets', amount: 0, color: expenseColors[9], icon: <MdOutlinePets /> },
  { type: 'Other', amount: 0, color: expenseColors[10], icon: <IoChatboxEllipsesOutline /> },
]

export const resetCategories = () => {
  incomeCategories.forEach((c) => (c.amount = 0))
  expenseCategories.forEach((c) => (c.amount = 0))
}
