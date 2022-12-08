import {React,useEffect,useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getUsers } from '../Service/api';
import{AiOutlineSearch} from "react-icons/ai"
import { Button, Card } from 'antd';
import axios from 'axios';
import { useContext } from 'react';
import { userContext } from '../Context/userContext';
const { Meta } = Card;
const Store = ({  }) =>{
    const[products,setProducts] = useState([])
    
  const navigate = useNavigate();
  const[data,setData] = useState([]);
  const[value,setValue] = useState([])
  const[sortValue,setsortValue] = useState([])


  const sortOptions=["Price","Best Selling","Newest Arrival"] 


  useEffect(()=>{   // useEffect works as soon as the component loads.
    getUsersDetails();
  },[])

  const handleSearch=async(e)=>{
    e.preventDefault();
  return await axios
  .get(`http://localhost:5000/products?q=${value}`)
  .then((response) =>{
    setData(response.data)
    setValue("")
  })
  .catch((err)=> console.log(err))
  }
  
  const handleSort=async(e)=>{
    let value = e.target.value; // get current value
    setsortValue(value)
    return await axios
    .get(`http://localhost:5000/products?_sort=${value}&_order=desc`)  // sorting values in the ascending order.
    .then((response) =>{
      setData(response.data)
    })
    .catch((err)=> console.log(err))
    }
    


  const getUsersDetails =async () =>{
    let response = await getUsers();
    console.log(response)
    setData(response.data)
  }

    return (

        <>
        
        

        <div className='aa' style={{borderStyle:"ridge" , borderWidth: "0.001mm" , marginTop:"40px" ,height:"90px"}}>
            <form onSubmit={handleSearch}>
                <input 
                style={{marginTop: "8px"}}
                    type="text"
                    className="search-area"
                    placeholder="Search"
                    outline="none"
                    value={value}
                    onChange={(e) => setValue(e.target.value)} />
                <button className="search-btn" type="submit" name="submit" 
                value="search"> <AiOutlineSearch style={{outline:"none"}}></AiOutlineSearch> </button>
            </form>

            <select 
        style ={{width: "10%", borderRadius:"8px", 
        height:"30px",marginLeft: "300px",marginBottom: "800px",
      borderColor:"orangered"}}
        onChange = {handleSort}
        value={sortValue}
        >
          <option> Sort By</option>
          {sortOptions.map((item,index)=>(  //sortOptions is an array
            <option value ={item} key={index}>
              {item}   
            </option>
          ))}
        </select>
        </div>
        <div className='flex'>
        {data.length === 0 ? (
              
                <tr className style={{textAlign: "center" , marginLeft : "400px", fontSize:"20px", marginTop:"80px"}}>
                  <td   style={{color: "orangered" }}>0 results available
                  <p>Try checking your spelling or using different words.</p>
                  </td>
                </tr>
                ):(
                
                data.map((product,index) => {
                 
                  const onClick = () => {
                   
                    window.location.href =`/products/${product.id}`
                 
                   
                  };
                    return (
                      <div  >
                    
                        <Card key={index}
                            hoverable
                            onClick={onClick}
                            style={{
                                width: 250,
                                height: 320,
                                paddingLeft: "10px",
                                margin: " 2rem",
                                outline:"none",
                                color:"orangered",
                            }}
                            cover={<img src={product.url} width="70%" />}
                           >
                                   {product.name}
                                 <p>  {product.Price}</p>
                            
                       </Card>
                           
                           
                             
                        
                        </div>

                    )}))}
            </div>
            </>
    )
        }

export default Store