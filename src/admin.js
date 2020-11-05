import React from 'react'
import {  Row, Col} from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header' 
import Footer from './components/Footer' 
import NavLeft from './components/NavLeft' 
import './style/commen.less'

export default class  Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span="5" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="19" className="main">
                    <Header></Header>
                    <Row className="content">
                        Content
                    </Row>
                    <Footer></Footer>
                </Col>

            </Row>  
        );
    }
}