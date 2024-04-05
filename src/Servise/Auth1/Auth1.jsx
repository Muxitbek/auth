import '../Auth1/Auth1.css';
import { Navigate, Outlet } from 'react-router-dom';

const Auth1 = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.token) {
        if (user.role === 7777) {
            return <Outlet />
        }
    } else {
       alert("kirolmaysan")
    }
    return (
        <>
            <h1>Auth1</h1>
        </>
    )
};

export default Auth1;