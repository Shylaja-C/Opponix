import { useEffect,useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lstyle.css';
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();

     useEffect(() => {
        document.body.id = "login-page";
        return () => {
            document.body.id = "";
        };
    }, []);

    

    const [isLogin, setIsLogin] = useState(true);
    const {backendUrl, setIsLoggedin,getUserData,} = useContext(AppContent);
    
    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        // Clear form when toggling
        setName('');
        setEmail('');
        setPassword('');
    };

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            axios.defaults.withCredentials = true;
            
            let endpoint = isLogin ? 'login' : 'register';
            let payload = isLogin 
                ? { email, password } 
                : { name, email, password };

            const { data } = await axios.post(
                `${backendUrl}/api/auth/${endpoint}`,
                payload
            );

            if (data.success) {
                setIsLoggedin(true);
                getUserData()
                toast.success(data.message || (isLogin ? 'Login successful!' : 'Registration successful!'));
                navigate('/');
            } else {
                toast.error(data.message || 'Something went wrong!');
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message 
                || error.message 
                || 'An error occurred';
            toast.error(errorMessage);
        }
    };


    return (  
    <div >
        <img src="./images/image.svg" width="100px" height="100px"/>
        <h1 className='msg'> WELCOME TO Opponix !</h1>
        <div className="wrapper" id="login">
          
            <form onSubmit={onSubmitHandler}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                
                {!isLogin && (
                    <div className="input-box">
                        <input 
                            onChange={e => setName(e.target.value)}
                            value={name}
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            required 
                        />
                        <i className='bx bxs-user'></i>
                    </div>
                )}
                
                <div className="input-box">
                    <input  
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        required 
                    />
                    <i className='bx bxs-envelope'></i>
                </div>
                
                <div className="input-box">
                    <input  
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        required 
                    />
                    <i className='bx bxs-lock-alt'></i>
                </div>

                {isLogin && (
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" onClick={() => navigate('/reset-password')}>
                            Forgot password?
                        </a>
                    </div>
                )}

                <button type="submit" className="btn">
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>

                <div className="register-link">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <a href="#" onClick={toggleAuthMode}>
                            {isLogin ? 'Sign Up' : 'Login'}
                        </a>
                    </p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;