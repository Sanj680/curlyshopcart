import {React, useContext}from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { userContext} from '../Context/userContext';
import { useNavigate,Link } from 'react-router-dom';

const Login=()=> {
    const { logIn } =useContext(userContext)
    const  navigate= useNavigate();

    const onFinish = (values) => {
      logIn(values.username)
        console.log('Success:', values);
        navigate('/')
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (

    <div className="login" >
    
    <div className='form'>
        <Form onSubmit={onFinish}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <div className='form-item'>
       
          <Form.Item className='form-item'
            placeholder="email"
            name="email"
            label={<label style={{ color: "orangered" }}>Email</label>}
            rules={[
              {
                required: true,
               
              },

              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input/>
          </Form.Item>
          <Form.Item className='form-item'
            
            name="password"
            label={<label style={{ color: "orangered" }}>Password</label>}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },

              { min: 6 }
            ]}
          >
            <Input.Password />
          </Form.Item>
    
  
    
        
           <div style={{textAlign:"center"}}> 
            <Button style={{marginTop:"-60px" , 
            backgroundColor:"orangered", borderRadius:"1mm",border:"none",
            outline:"none" ,marginRight:"-95px",
           } }
            type="primary" htmlType="submit">
              Sign in
            </Button>
            </div>
         
          </div>
        </Form>
      
       
      
      <div><Link to="/register" style={{color:"orangered" , textAlign:"left"}}>Have an account? Sign up</Link></div>
                
              
        </div>
       
        </div>
     
      );
    };
    

export default Login