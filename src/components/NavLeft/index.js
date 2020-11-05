import React from 'react'
import { Menu } from 'antd';
import './index.less'
//import { MailOutlined } from '@ant-design/icons';
//import { config } from 'dotenv/types';
//import 'antd/dist/antd.css'
//const { SubMenu } = Menu;
//const MenuItemGroup = Menu.ItemGroup;
import MenuConfig from './../../config/menuConfig';
import SubMenu from 'antd/lib/menu/SubMenu';
export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })

    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                <SubMenu title={item.title} key={item.key}>
                    {this.renderMenu(item.children)}
                </SubMenu>
                )
            }
        return <Menu.Item title={item.title} key={item.key} >{item.title}</Menu.Item>
        })
    }
  
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>bike-sharing MS</h1>
                </div>
                <Menu theme="dark">
                    
                    {/* <SubMenu key="sub1" icon={<MailOutlined />}title="Navigation One" >
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu> */}
                    {this.state.menuTreeNode}

                </Menu>
            </div>
        );
    }
}