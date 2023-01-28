import { useContext, useState, createContext, React, useEffect } from "react";

export const UsersContext = createContext(null);
export const useuserContext = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a NavContextProvider");
  }
  return context;
};
export const Usercontextprovider = ({ children }) => {
  const token = getCookie('token');
  const [user, setUser] = useState({isLogged:!!token});
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const getUser=async ()=>{
         //esto agarra el token  
        console.log(token);
        const response=await fetch('http://127.0.0.1:8000/api/user-profile',{
          method:'GET',
          headers:{
            "accept":"application/json",
            "content-type":"application/json",
            "authorization":`Bearer ${token}`
          },
        })
        const responsejson= await response?.json();  
        console.log(responsejson);  //esto verifica los datos
        if(responsejson.message=="Unauthenticated.")
        {
            setUser({ isLogged: false });
        }
        else{
            setUser({...responsejson.data, isLogged: true });
        }
    } 
  
 /*  useEffect(() => {
    if(Object.keys(user).length==1)
    {
        getUser();
        
    }
  }); */
  return (
    <UsersContext.Provider value={{ user, setUser }}>
      {children}
    </UsersContext.Provider>
  );
};

