import { useContext, useState } from 'react';
import './ProfileUpdatePage.scss';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from "../../libraries/apiRequest.js";
import { useNavigate } from 'react-router-dom';
import UploadWidget from '../../components/UploadWidget/UploadWidget.jsx';


export default function ProfileUpdatePage() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [avatar, setAvatar] = useState([]);
    const { currentUser, updateUser } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const res = await apiRequest.put(`/user/${currentUser.id}`, { username, email, password, avatar: avatar[0] });
            updateUser(res.data);
            console.log(res.data);
            navigate('/profile');
        } catch (err) {
            console.log(err);
            setError(err.res.data.message);
        }

    }

    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>Update Profile</h1>
                    <div className="item">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            defaultValue={currentUser.username}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            defaultValue={currentUser.email}
                        />
                    </div>
                    <div className="item">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" />
                    </div>
                    {error && <span>error</span>}
                    <button>Update</button>
                </form>
            </div>
            <div className="sideContainer">
                <img src={avatar[0] || currentUser.avatar || `${"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}`} alt="" className="avatar" />
                <UploadWidget
                    uwConfig={{
                        cloudName: "dzmigekmt",
                        uploadPreset: "estate",
                        multiple: false,
                        maxImageFileSize: 2000000,
                        folder: "avatars",
                    }}
                    setState={setAvatar}
                />
            </div>
        </div>
    )
}
