import React from 'react'
import {  Row, Col} from 'antd'
import 'antd/dist/antd.css'
import Header from './components/Header' 
import Footer from './components/Footer' 
import NavLeft from './components/NavLeft' 

export default class  Admin extends React.Component{
    render(){
        return (
            <Row>
                <Col span="3">
                    <NavLeft />
                </Col>
                <Col span="21">
                    <Header></Header>
                    <Row>
                        Content
                    </Row>
                    <Footer></Footer>
                </Col>

            </Row>  
        );
    }
}