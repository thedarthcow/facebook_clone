import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />


            <Post 
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image} />
            <Post />
            <Post />
        </div>
    )
}

export default Feed
