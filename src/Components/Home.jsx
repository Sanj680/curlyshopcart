import React from 'react'
import curly from "../images/curly.jpg"
const Home=() =>{
  return (
    <div className="home" style={{ backgroundImage:`url(${curly})` ,
    width: "100%" , height:"87vh",backgroundSize:"cover", backgroundRepeat:"no-repeat",
    display:"flex",backgroundPosition:"center"
    }}>
        
    </div>
  )
}

export default Home