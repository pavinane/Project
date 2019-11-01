import React from 'react';
import { Link } from 'react-router-dom';
import tail from './Images/tail.jpeg';
import head from './Images/head.jpeg';

const CoinFlip = () => (Math.random() < 0.5 ? (
    <div className="head">
      <div className="h1">
        <img src={head} alt="" />
      </div>
      <div className="h2">
        <Link to="/head">
          <button type="button">check the result</button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="tail">
      <div className="t1">
        <img src={tail} alt="" />
      </div>
      <div className="t2">
        <Link to="/tail">
          <button type="button">check the result</button>
        </Link>
      </div>
    </div>
  ));
export default CoinFlip;
// const CoinFlip = () =>
//  Math.random() < 0.5 ? (
//    <div>
//      <img src=”/heads.svg” alt=”Heads” />
//    </div>
//  ) : (
//    <div>
//      <img src=”/tails.svg” alt=”Tails” />
//    </div>
//  );
