import React from 'react'
import { Col, Layout, Row } from 'antd'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Details from './components/Details/Details'
import { Footer as FooterContainer } from './components/Footer/Footer'
const { Header, Content, Footer } = Layout

const ExpenseApp = () => {
  return (
    <>
      <Layout>
        <Header>
          <Nav />
        </Header>
        <Content className='container pt-5'>
          <Row gutter={[8, 8]}>
            <Col xs={24} sm={24} md={6} lg={8}>
              <Main />
            </Col>
            <Col xs={24} sm={24} md={18} lg={16}>
              <Details />
            </Col>
          </Row>
        </Content>
        <Footer className='footer mt-4'>
          <FooterContainer />
        </Footer>
      </Layout>
    </>
  )
}

export default ExpenseApp
