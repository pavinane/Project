import React from 'react';
import './App.scss';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Tail from './Tail';
// import Head from './Head';
// import Toss from './Toss';
// import Comment from './Comment';
import Instagram from './Instagram/Instagram';
import Profile from './Instagram/Profile';
import Compass from './Instagram/Compass';
import PostCmnt from './Instagram/PstCmnt';
import Login from './Instagram/Login';
import Edit from './Instagram/Edit';
import IGtv from './Instagram/Igtv';

const menu = [
  'login',
  'Instagram',
  'profile',
  'compass',
  'postcmnt',
  'edit',
  'igtv',
];
const Navigation = ({ menus }) => (
  <div className="navigation">
    <ul>
      {menus.map((m) => (
        <Link key={m} to={m === 'home' ? '/' : `/${m}`}>
          <li>{m}</li>
        </Link>
      ))}
    </ul>
  </div>
);
// const Home = () => (
//   <div className="h1">
//     <h1>This is Home</h1>
//   </div>
// );
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation menus={menu} />
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/toss" component={Toss} />
            <Route exact path="/tail" component={Tail} />
            <Route exact path="/head" component={Head} />
            <Route exact path="/comment" component={Comment} /> */}
            <Route exact path="/instagram" component={Instagram} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/compass" component={Compass} />
            <Route exact path="/postcmnt" component={PostCmnt} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/igtv" component={IGtv} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
