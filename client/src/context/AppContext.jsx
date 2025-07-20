import { createContext ,useEffect,useState} from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const AppContent = createContext()
export const AppContextProvider = (props)=>{

    axios.defaults.withCredentials = true;

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin,setIsLoggedin] = useState(false)
    const [userData,setUserData] = useState(null)
    const navigate = useNavigate();
    
    const getAuthState = async ()=>{      
  try {
    const { data } = await axios.get(`${backendUrl}/api/auth/is-auth`);
    
    if (data.isAuthenticated) {
      setUserData(data.user);
      setIsLoggedin(true);
    } else {
      // Explicitly handle unauthenticated state
      setUserData(null);
      setIsLoggedin(false);
    }
  } catch (err) {
   
    if (err.response) {
    
      console.error("Auth check failed:", err.response.status);
      
      if (err.response.status === 401) {
        
        setUserData(null);
        setIsLoggedin(false);
      } else {
       
        toast.error("Session verification failed");
      }
    } else {
     
      console.error("Network error:", err.message);
    }
  }
}
    

    const getUserData = async ()=>{
        try{
            const{data}= await axios.get(backendUrl +'/api/user/data')
            data.success?setUserData(data.userData):toast.error(data.message)
        } catch(error){
              toast.error(error.message)  
        }
    }

  useEffect(() => {
  const checkAuth = async () => {
    await getAuthState();
   };
  checkAuth();
}, []);

const onSubmitHandler = async () => {
  try {
    // ... login logic ...
    await getAuthState(); 
  } catch (err) {
    toast.error("Login failed");
  }
};

    const value ={
        backendUrl,
        isLoggedin,setIsLoggedin,
        userData,setUserData,
        getUserData

    }
    return(
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}