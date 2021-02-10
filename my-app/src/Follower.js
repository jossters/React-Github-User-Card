import React from 'react';
import axios from 'axios';

const Follower = (props) => {
    const {avatar_url, name, html_url, location, bio, followers, following} = props.followerData;
     
    return(
        <div>
           <img style={{border: 'solid black 4px'}} height='200' width='200' src={avatar_url} />
            <h2>{name}</h2>
            <h5>{html_url}</h5>
            {location && <p>Location: {location}</p>}
            {bio && <p>Bio: {bio}</p>}
            <p>Followers: {followers}</p>
            <p>Following: {following}</p> 
        </div>
    )
}
export default Follower