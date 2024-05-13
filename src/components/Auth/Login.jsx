import { useState } from 'react';
import './Login.scss'
import { postLogin } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
const Login =(props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const handleLogin = async () => {;
         try {
            let res = await postLogin(email, password);
            
            const message = JSON.parse(JSON.stringify(res.data)).data.message;
            if(message==='Login successful') {
                navigate('/home')
            }
            alert(message)
            
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleSignUp = () => {
        
        navigate('/signup')
    }
    return (
        <div className="login-container">
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={handleSignUp}>Signup</button>
            </div>
            <div className='title col-4 mx-auto' >
                Login
            </div>
          
            <div className='content-form col-4 mx-auto' >
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input type={'email'} className='form-control' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password (*)</label>
                    <input type={'password'} className='form-control' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className='btn-submit' onClick={handleLogin}>login</button>
                </div>
                
            </div>
          
           
        </div>
    )
}

export default Login;

