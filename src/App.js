
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import { UserContextProvider } from './Context/userContext';
import Store from './Components/Store';
import Product from './Components/Product';
import Register from './Components/Register';
import Cart from './Components/Cart';



function App() {
  return (
    <div className="App">
      <UserContextProvider>
     <Router>
     <Navbar></Navbar>
     <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/store" element={<Store/>}/>
      <Route path ="/products/:id" element={<Product/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/register" element={<Register/>}/>
      <Route path ="/cart" element={<Cart/>}/>
     </Routes>
    </Router>
 </UserContextProvider>
    </div>
  );
}

export default App;
