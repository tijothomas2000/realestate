import './ProfilePage.scss';
import List from '../../components/List/List.jsx'
import Chat from '../../components/Chat/Chat';
import apiRequest from '../../libraries/apiRequest.js';
import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Suspense, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.jsx';
import { Link } from 'react-router-dom';

export default function ProfilePage() {

    const { updateUser, currentUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const data = useLoaderData();
    console.log(data.postResponse);


    async function handleLogout() {
        try {
            await apiRequest.post("/api/auth/logout");
            updateUser(null);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='profilepage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to="/profile/update">
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src={currentUser.avatar || `${"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}`} />
                        </span>
                        <span>Username: <b>{currentUser.username}</b></span>
                        <span>Email: <b>{currentUser.email}</b> </span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <Link to="/add">
                            <button>Create New Post</button>
                        </Link>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.postResponse} errorElement={<p>Error loading posts.</p>}>
                            {(postResponse) => <List posts={postResponse.data.userPosts} />}
                        </Await>
                    </Suspense>
                    <div className="title">
                        <h1>Saved Lists</h1>
                    </div>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.postResponse} errorElement={<p>Error loading posts.</p>}>
                            {(postResponse) => <List posts={postResponse.data.savedPosts} />}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="chat">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}
