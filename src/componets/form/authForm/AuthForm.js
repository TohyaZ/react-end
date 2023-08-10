import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import app from '../../../firebase/Firebase';
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'

const AuthForm = ({buttonName}) => {
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // const handleChange = (event) => {
    //     if(event.target.type === 'email') {
    //         setEmail(event.target.value);
    //     } else if (event.target.type === 'password'){
    //         setPassword(event.target.value);
    //     }
    // }

    const handlesubmit = (event) =>{
        event.preventDefault();
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredentials)=>{
            userCredentials.user.displayName = username;

            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
    <form onSubmit={handlesubmit}>
        <div className="form-group">
            <label>Username</label>
            <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your username"
                value={username}
                onChange={(event)=> setUsername(event.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input 
                type="email" 
                className="form-input" 
                placeholder="Enter your email"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input 
                type="password" 
                className="form-input" 
                placeholder="Enter your password" 
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
            />
        </div>

        <div className="form-group">
            <input 
                type="submit" 
                className="button-primary" 
                value={buttonName} 
            />
        </div>
    </form>
    )
}

export default AuthForm;