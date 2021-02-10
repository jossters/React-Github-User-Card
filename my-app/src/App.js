import logo from "./Octocat.png";
import "./App.css";
import axios from "axios";
import React from "react";
import MyData from "./MyData";

class App extends React.Component {
  state = {
    myData: [],
    myFollowersUrls: [],
    myFollowersData: [],
    followersToggled: false,
  };
  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    await axios.get("https://api.github.com/users/jossters").then((res) => {
      this.setState({
        myData: res.data,
      });
    });
    await axios
      .get("https://api.github.com/users/jossters/followers")
      .then((res) => {
        this.setState({
          myFollowersUrls: res.data.map((obj) => {
            return obj.login;
          }),
        });
        return this.state.myFollowersUrls;
      })
      .then((urls) => {
        urls.forEach((url) => {
          axios.get(`https://api.github.com/users/${url}`).then((res) => {
            console.log(res);
            this.setState({
              myFollowersData: [...this.state.myFollowersData, res.data],
            });
          });
        });
      });
  };
  toggleFollowers = (e) => {
    if (this.state.followersToggled) {
      this.setState({
        followersToggled: false,
      });
    } else {
      this.setState({
        followersToggled: true,
      });
    }
  };

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="My-data">
            <MyData toggleFollowers={this.toggleFollowers} state={this.state} />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
