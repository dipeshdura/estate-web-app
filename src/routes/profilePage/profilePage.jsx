import React from 'react'
import "./profilePage.scss";
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
const ProfilePage = () => {
    const avatar ="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp";
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span >Avatar: <img src={avatar} alt={avatar} /></span>
                    <span>Username: <b>John Doe</b></span>
                    <span>E-mail: <b>johndoe@gmail.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create New Post</button>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default ProfilePage