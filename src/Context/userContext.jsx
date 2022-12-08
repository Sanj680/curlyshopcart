import { createContext,  useState } from "react";

export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const USER = { name: "Login", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);
const[items,setItems] = useState([]);

const addToCart=(name,Price)=>{
  setItems((prevState) => [...prevState,{name,Price}])
}


  function logIn(username) {
    setUser({ isGuestUser: false, name: username });
  }
  function logOut() {
    setUser(USER);
   
  }
  return (
    <userContext.Provider value={{ user, logIn, logOut,addToCart,items }}>
      {children}
    </userContext.Provider>
  );
}

