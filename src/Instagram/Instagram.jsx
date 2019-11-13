import React from 'react';
import Post from './Post';
import Navi from './Navi';
import './instagram.scss';
import Leftcard from './Leftcard';
import prfimg from './ImagesInsta/vijay.jpg';
// import { Route } from "react-router-dom";

class Title extends React.Component {
  render() {
    return (
      <div className="heading">
        <div className="navi">
          <Navi />
        </div>
        <Contain />
      </div>
    );
  }
}

class Contain extends React.Component {
  render() {
    return (
      <div className="contain">
        <div className="right-card">
          <div className="top">
            <div className="profile">
              {/* <i className="far fa-circle" /> */}
              <img src={prfimg} alt="" />
            </div>
            <h2>nane pavi </h2>
            <i className="fas fa-ellipsis-h" />
          </div>
          <div className="body">
            <Post />
          </div>
        </div>
        <div className="l-c">
          <Leftcard />
        </div>
      </div>
    );
  }
}
export default Title;
