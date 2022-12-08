import react, { useState ,useEffect, useContext} from 'react';
import axios from 'axios';
import { getUser,editUser } from '../Service/api';
import {  useNavigate, useParams,Link} from 'react-router-dom';
import { Card,Input,Button, Form} from 'antd';
import { userContext } from '../Context/userContext';
const { Meta } = Card;
const Product = ({name,Price}) => {

    const [product, setProduct] = useState([]);
   const {addToCart} = useContext(userContext)
   const[qty,setQty] =useState([])
    const navigate = useNavigate();
    const {id} = useParams(); // id is a param useful for editing and deleting data,useParams help to destructure the object and directly get access to the id.



    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async()=>{
       
        let response = await getUser(id)  // to get a single user while editing the data for a single user.
        setProduct(response.data)  //response is an object in itself.
        console.log(response.data)
    }
   
    

   return(

     
       
            <div >
             
              <Card 
                  hoverable
                  
                  style={{
                      width: 400,
                      height: 450,
                      paddingLeft: "10px",
                      margin: " 2rem",
                      outline:"none",
                     marginLeft:"40px",
                  }}
                  cover={<img src={product.url} width="70%" />}
                  
              >
                
              </Card>

              <Card className='card'
                  bordered={false}
                  style={{
                      width: 400,
                      height: 450,
                     marginRight: "20px",
                      margin: " 2rem",
                      outline:"none",
                     marginLeft:"700px",
                     marginTop:"-470px",
                     
                    
                    
                  }}
                  
              >
               <div className='prod' style={{color:"orangered" , fontSize:"40px", marginRight:"20px"}}>{product.name} </div>
                <p style={{color:"orangered" , fontSize:"25px"}}>{product.Price}</p>


                 <Button style ={{ outline:"none", color: "orangered" }}onClick={addToCart}> <Link to ="/cart"> Add to Cart</Link></Button>
          
              </Card>


                         
  
           
              </div>

       
             )   }
  



export default Product