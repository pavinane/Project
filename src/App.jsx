import React from 'react';
import './App.scss';
// eslint-disable-next-line
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Tail from './Tail';
import Head from './Head';
import Toss from './Toss';
import Comment from './Comment';

const menu = ['home', 'toss', 'comment'];
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
const Home = () => <h1>This is Home</h1>;
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation menus={menu} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/toss" component={Toss} />
            <Route exact path="/tail" component={Tail} />
            <Route exact path="/head" component={Head} />
            <Route exact path="/comment" component={Comment} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
