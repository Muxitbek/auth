import { useState } from 'react';
import '../Reg/Reg.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    const navigate = useNavigate();

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const Inpo = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setState((prev) => {
            return { ...prev, [name]: value }
        });

        console.log(state);
    }

    const Submo = async (e) => {
        e.preventDefault();
        if (state.firstname && state.lastname && state.email && state.password && state.rePassword === state.password) {
            const { status } = await axios.post("http://localhost:3000/info", state);
            if (status === 201) {
                alert("sucsessfully registered");
                navigate("/");
            }
        } else{
            alert("fill in the form or the password is wrong")
        }
    }
    return (
        <>
            <div className="rego">
                <input onChange={Inpo} name='firstname' type="text" placeholder='First name' />
                <input onChange={Inpo} name='lastname' type="text" placeholder='Last name' />
                <input onChange={Inpo} name='email' type="text" placeholder='Email' />
                <input onChange={Inpo} name='password' type="text" placeholder='Password' />
                <input onChange={Inpo} name='rePassword' type="text" placeholder='Re-password' />

                <button onClick={Submo} className='regButton'>Register</button>
            </div>
        </>
    )
};

export default Reg;