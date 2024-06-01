import './ProfilePage.scss';
import List from '../../components/List/List.jsx'
import Chat from '../../components/Chat/Chat';

export default function ProfilePage() {
    return (
        <div className='profilepage'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar:
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        </span>
                        <span>Username: <b>John Doe</b></span>
                        <span>Email: <b>johncena@gmail.com</b> </span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved Lists</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chat">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}
