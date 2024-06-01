import { useState } from 'react';
import './Chat.scss';

export default function Chat() {
    const [chat, setChat] = useState(null);
    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <span>Anna</span>
                    <p>Hi bebes</p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <span>Anna</span>
                    <p>Hi bebes</p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <span>Anna</span>
                    <p>Hi bebes</p>
                </div>
                <div className="message" onClick={() => setChat(true)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <span>Anna</span>
                    <p>Hi bebes</p>
                </div>
            </div>
            {chat && <div className="livechat">
                <div className="top">
                    <div className="user">
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                        Anna
                    </div>
                    <span className="close" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatmessage">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatmessage">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatmessage own">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatmessage">
                        <p>Hi babe, where are you ? I am waiting for soo long bahahhahaha.</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}
