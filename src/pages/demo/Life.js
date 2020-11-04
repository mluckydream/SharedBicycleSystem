import React from 'react'
import Child from './Child'
import {Button} from 'antd'
import './index.css'
import 'antd/dist/antd.css'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
            
        })
    }

   
    render(){
        // let style = {
        //     padding: 10
        // }
        return <div className="content">
            <p>React 生命周期介绍</p>
            <Button onClick={this.handleClick.bind(this)}>antd点击一下</Button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <p>测试子组件生命周期</p>
            <Child name={this.state.count}></Child>
        </div>
    }

}