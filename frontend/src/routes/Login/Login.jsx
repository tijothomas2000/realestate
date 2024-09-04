import { useContext, useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../libraries/apiRequest.js';
import { AuthContext } from '../../context/AuthContext.jsx';

export default function Login() {

    const { updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        try {
            const response = await apiRequest.post("/api/auth/login", {
                username, password
            });
            updateUser(response.data);
            navigate("/");
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome back</h1>
                    <input
                        name="username"
                        required
                        minLength={3}
                        maxLength={20}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                    />
                    <button disabled={isLoading}>{`${isLoading?"Logging In ...":"Login"}`}</button>
                    {error && <span>{error}</span>}
                    <Link to="/register">{"Don't"} you have an account?</Link>
                </form>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}
