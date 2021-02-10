import React from "react";
import Follower from "./Follower";

const MyData = (props) => {
  const {
    avatar_url,
    html_url,
    name,
    location,
    bio,
    followers,
    following,
  } = props.state.myData;
  return (
    <div>
      <div>
        <img
          style={{ border: "solid black 4px" }}
          height="200"
          width="200"
          src={avatar_url}
        />
        <h2>{name}</h2>

        <a
          className="App-link"
          href="https://github.com/jossters"
          target="_blank"
          rel="Jossters"
        >
          {html_url}
        </a>

        <p>Location: {location}</p>
        <p>Bio: {bio}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <button onClick={props.toggleFollowers}>
          {props.state.followersToggled ? "Hide Followers" : "See Followers"}
        </button>
      </div>
      {props.state.followersToggled && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignContent: "space-between",
          }}
        >
          {props.state.myFollowersData.map((follower) => {
            console.log(follower);
            return <Follower followerData={follower} key={follower.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyData;
