import React from 'react'
import { Col, Layout, Row } from 'antd'
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Details from './components/Details/Details'
const { Header, Content } = Layout

const App = () => {
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
      </Layout>
    </>
  )
}

export default App
