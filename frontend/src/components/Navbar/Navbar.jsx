import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const { currentUser } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>DREAM HOMES</span>
                </a>
                <a href="/">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="right">
                {currentUser ? (
                    <div className="user">
                        <img src={currentUser.avatar || `${"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}`} alt="" />
                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile" >
                            <div className="infocount">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                ) :
                    (
                        <>
                            <a href="/login">Sign In</a>
                            <a href="/register" className="register">Sign Up</a>
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
