import { useState } from 'react';
import '../../Pages/Landing/Landing.css';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Landing = () => {

    const [open, setOpen] = useState(false);

    const Openo = () => {
        setOpen((prev) => !prev);
    };

    const token = JSON.parse(localStorage.getItem("user"));

    const logOut = () => {
        localStorage.removeItem("user");
        alert("logged out")
    }


    return (
        <>
            <div className="landBox">
                <NavLink className="navLog" to={"/"}>Logo</NavLink>
                <menu className='menuCont'>
                    <NavLink to={"/home"}>Home</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </menu>

                <div className="logBox">
                    {token ? (
                        <NavLink onClick={logOut}>Logout</NavLink>
                    ) : (<NavLink to={"/login"}>Login</NavLink>)}

                    <NavLink to={"/reg"}>Register</NavLink>
                    <img onClick={Openo} className='proImg' src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="" />
                </div>
            </div>

            {open && <div className="modal">
                <NavLink to={"/admin"}>Admin Page</NavLink>
                <NavLink to={"/profile"}>Profile page</NavLink>
            </div>}

            <Outlet />
        </>
    )
};

export default Landing;