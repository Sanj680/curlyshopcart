import {React, useContext}from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { userContext} from '../Context/userContext';
import { useNavigate,Link } from 'react-router-dom';
export const Register = () => {

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
        <Form.Item style={{border:"22px"}}
        label={<label style={{ color: "orangered" }}>First name</label>}
          name="first name"
          
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
             
            },
            { min: 4 },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item className='form-item'
          
          name="last name"
          label={<label style={{ color: "orangered" }}>Last name</label>}
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },

            { min: 6 }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item className='form-item'
          
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
            Sign up
          </Button>
          </div>
       
        </div>
      </Form>
    
     
    
    <div><Link to="/login" style={{color:"orangered" , textAlign:"right"}}>Have an account? Sign in</Link></div>
              
            
      </div>
     
      </div>
   
    );
  };
  
    
    
 
export default Register