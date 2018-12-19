import React, { Component } from "react";
import "./styles/App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Notifications from "./components/Notifications";
import Profile from "./components/Profile";
import HomeFeed from "./components/subcomponents/Home/HomeFeed";
import HomeTrending from "./components/subcomponents/Home/HomeTrending";
import Settings from "./components/subcomponents/Profile/Settings";
import Post from "./components/Post";
import Friend from "./components/Friend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/notifications" component={Notifications} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/home/feed" component={HomeFeed} />
          <Route exact path="/home/trending" component={HomeTrending} /> */}
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/friend" component={Friend} />
        </Switch>
        <Nav />
      </div>
    );
  }
}

export default App;
