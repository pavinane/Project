import React from 'react';
import './navi.scss';

class Navi extends React.Component {
  render() {
    return (
      <div className="n-c">
        <div className="navi-card">
          <div className="insta-icons">
            <h1>
              <i className="fab fa-instagram" />
              <i className="fa fa-minus" />
              𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒
            </h1>
          </div>
          <div className="search">
            <input type="text" placeholder="search" />
          </div>
          <div className="creaters">
            <div className="direction">
              <i className="fa fa-compass" />
            </div>
            <div className="heart">
              <i className="fa fa-heart" />
            </div>
            <div className="profile">
              <i className="fa fa-user" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navi;
