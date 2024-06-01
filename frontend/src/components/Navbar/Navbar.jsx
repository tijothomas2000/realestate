import { useState } from "react";
import "./Navbar.scss";
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const user = true;
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>വീട് വിൽപ്പന</span>
                </a>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <span>John Doe</span>
                        <Link to="/profile" className="profile" >
                            <div className="infocount">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) :
                    (
                        <>
                            <a href="">Sign In</a>
                            <a href="" className="register">Sign Up</a>
                        </>
                    )}
                <div className="menuIcon" onClick={() => setOpen(!open)}>
                    <img src="/menu.png" />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="/">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign In</a>
                    <a href="">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}
