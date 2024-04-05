import { useState } from 'react';
import '../Login/Login.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [log, setLog] = useState({
        email: '',
        password: '',
    });

    const inpoEmail = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLog((prev) => {
            return { ...prev, [name]: value }
        });
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        if (log.email && log.password) {
            const { data } = await axios.get("http://localhost:3000/info")
            const user = data.find(u => u.email === log.email)
            if (user) {
                if (user.password === log.password) {
                    if (log.email === "admin@gmail.com") {
                        localStorage.setItem("user", JSON.stringify({ ...user, role: 7777, token: Date.now() }));
                        alert("sucsessfully done");
                        navigate("/")
                    } else {
                        localStorage.setItem("user", JSON.stringify({ ...user, role: 1000, token: Date.now() }));
                        alert("sucsessfully done");
                        navigate("/")
                    }
                  
                } else {
                    alert("wrong password")
                }
            } else {
                alert("wrong email")
            }
            console.log(data);
        } else {
            alert("fill in the form");
        }
    }

    return (
        <>
            <form onSubmit={SubmitHandler} className='login' action="">
                <input onChange={inpoEmail} name='email' type="text" placeholder='email' />
                <input onChange={inpoEmail} name='password' type="text" placeholder='password' />
                <button>Login</button>
            </form>
        </>
    )
};

export default Login;