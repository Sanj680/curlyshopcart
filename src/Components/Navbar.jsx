import { Layout, Menu,Input, } from 'antd';
import{BsHandbag} from "react-icons/bs"
import{AiOutlineUser} from "react-icons/ai"
import axios from 'axios';
import{UserOutlined,CartOutlined} from  "@ant-design/icons"
import {React,useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import "../App.css"
import { userContext, useUserContext } from '../Context/userContext';
const { Header } = Layout;
const { Search } = Input;


const Navbar = () => {
  const { user, logOut,logIn ,items} = useContext(userContext);


  return(
  <Layout className="layout">
    
    {user.isGuestUser && (
      <Menu className='menu'
      
        mode="horizontal"
        defaultSelectedKeys={['2']}>
        <Menu.Item className="menu-item" key ="1" >  EcstaticCurls</Menu.Item>
        <Menu.Item className="menu-item"key ="2"> <Link to="/" style={{color:"orangered"}}>Home</Link></Menu.Item>
        <div className='search'>
        <Menu.Item key="3">  </Menu.Item></div>
        <Menu.Item className="menu-item" key ="3"> <Link to="/store" style={{color:"orangered"}}>Store</Link></Menu.Item>
        <Menu.Item className="menu-item" key ="4"><BsHandbag></BsHandbag><sup>{items.length}</sup></Menu.Item>
        <Menu.Item className="menu-item" key ="5" ><Link to="/login"style={{color:"orangered"}}> <AiOutlineUser/></Link></Menu.Item>
    
        

        </Menu>
         )}

{!user.isGuestUser && (
      <Menu className='menu'
        
        mode="horizontal"
        defaultSelectedKeys={['2']}>
        <Menu.Item className="menu-item" key ="6" > EcstaticCurls</Menu.Item>
        <Menu.Item className="menu-item"key ="7"> <Link  to="/" style={{color:"orangered"}}>Home</Link></Menu.Item>
        <div className='search'>
        <Menu.Item key="3"></Menu.Item>  </div>
        
        <Menu.Item className="menu-item" key ="8"> <Link to="/store" style={{color:"orangered"}}>Store</Link></Menu.Item>
          <Menu.Item className="menu-item" key ="9"><BsHandbag></BsHandbag><sup>{items.length}</sup></Menu.Item>
        <Menu.Item className="menu-item" key ="10" onClick={logOut}><Link to="/"style={{color:"orangered"}}>Logout</Link></Menu.Item>

        </Menu>
         )}
        
  
  </Layout>
  )
    
}


export default Navbar
