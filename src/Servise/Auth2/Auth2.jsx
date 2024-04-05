import '../Auth2/Auth2.css';
import { Navigate, Outlet } from 'react-router-dom';

const Auth2 = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.token) {
        if (user.role === 1000 || user.role === 7777) {
            return <Outlet />
        }
    } else {
        <Navigate to={"/login"}></Navigate>
    }
    return (
        <>
            <h1>Auth2</h1>
        </>
    )
};

export default Auth2;