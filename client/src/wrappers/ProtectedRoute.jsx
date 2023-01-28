import React from 'react'
import { useEffect,useState } from 'react'
import { useuserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const [autorizado, setAutorizado] = useState(false);
    const navegate=useNavigate();
    const {user}=useuserContext();
    useEffect(() => {
        if(user.isLogged)
        {
            setAutorizado(true);
        }
        else{
            navegate("/login");
        }
    }, []);
    if(autorizado)
    {
        return children;
    }
}

export default ProtectedRoute