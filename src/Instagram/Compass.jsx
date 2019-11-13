import React from 'react';
import Navi from './Navi';
import './compass.scss';
import prfimg from './ImagesInsta/vijay.jpg';
import img1 from './ImagesInsta/ins1.jpg';

class compass extends React.Component {
  render() {
    return (
      <div className="com">
        <div className="cp-card">
          <Navi />
        </div>
        <div className="dec-pep">
          <div className="dp-card">
            <div className="dsc-ppl">
              <h4>discover people</h4>
            </div>
            <div className="S-A">
              <h4>see all</h4>
            </div>
          </div>
          <div className="dp-grid">
            <GDP
              dp={[
                {
                  img: prfimg,
                  n: 'pavi',
                  p: 'Followed by misnaming_luv_98 +…',
                  f: 'follow',
                },
                {
                  img: img1,
                  n: 'pavi',
                  p: 'Followed by',
                  f: 'follow',
                },
                {
                  img: prfimg,
                  n: 'pavi',
                  p: 'Followed by misnaming',
                  f: 'follow',
                },
                {
                  img: prfimg,
                  n: 'pavi',
                  p: 'new to instagram ',
                  f: 'follow',
                },
                {
                  img: prfimg,
                  n: 'pavi',
                  p: 'Follow',
                  f: 'follow',
                },
              ]}
            />
          </div>
        </div>
        <Dpic />
        <DpGrid />
      </div>
    );
  }
}
const GDP = ({ dp }) => (
  <div className="dpg-names">
    {dp.map((dpg) => (
      <div className="dp-cd">
        <img src={dpg.img} alt="" />
        <h4>{dpg.n}</h4>
        <p>{dpg.p}</p>
        <button type="button">{dpg.f}</button>
      </div>
    ))}
  </div>
);

class Dpic extends React.Component {
  render() {
    return (
      <div className="explore">
        <h4>explore</h4>
        <Pict
          pi={[
            {
              img: img1,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img1,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '38',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '45',
              icon1: 'fa fa-comment',
              n2: '12',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '52',
              icon1: 'fa fa-comment',
              n2: '1',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '25',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '31',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '48',
              icon1: 'fa fa-comment',
              n2: '7',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '71',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '18',
              icon1: 'fa fa-comment',
              n2: '4',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '20',
              icon1: 'fa fa-comment',
              n2: '2',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '55',
              icon1: 'fa fa-comment',
              n2: '8',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '27',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: prfimg,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
          ]}
        />
      </div>
    );
  }
}
const Pict = ({ pi }) => (
  <div className="dp-gr">
    {pi.map((pp) => (
      <div className="dp-pic">
        <img src={pp.img} alt="" />
        <div className="dp-cht">
          <i className={pp.icon}>{pp.n1}</i>
          <i className={pp.icon1}>{pp.n2}</i>
        </div>
      </div>
    ))}
  </div>
);
class DpGrid extends React.Component {
  render() {
    return (
      <div className="dp-e">
        <div className="tech-e">
          <ul>
            <li>about us</li>
            <li>support</li>
            <li>press</li>
            <li>api</li>
            <li>jobs</li>
            <li>privacy</li>
            <li>terms</li>
            <li>directory</li>
            <li>profile</li>
            <li>hashtag</li>
            <li> language</li>
          </ul>
        </div>
        <div className="indus-e">
          <h2>© 2019 INSTAGRAM</h2>
        </div>
      </div>
    );
  }
}
export default compass;
