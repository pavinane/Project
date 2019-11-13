import React from 'react';
import './profile.scss';
import img from './ImagesInsta/vijay.jpg';
import img1 from './ImagesInsta/ins1.jpg';
import img2 from './ImagesInsta/ins2.jpg';
import img3 from './ImagesInsta/ins3.jpg';
import img4 from './ImagesInsta/ins4.jpg';
import img5 from './ImagesInsta/ins5.jpg';
import img6 from './ImagesInsta/ins6.jpg';
import img7 from './ImagesInsta/ins7.jpg';
import img8 from './ImagesInsta/ins8.jpg';
import img9 from './ImagesInsta/ins9.jpg';
import img10 from './ImagesInsta/ins10.jpg';
import img11 from './ImagesInsta/ins11.jpg';
import img12 from './ImagesInsta/ins12.jpg';
import img13 from './ImagesInsta/ins13.jpg';
import img14 from './ImagesInsta/ins14.jpg';
import img15 from './ImagesInsta/ins15.jpg';
import img16 from './ImagesInsta/ins16.jpg';
import img17 from './ImagesInsta/ins17.jpg';
import img18 from './ImagesInsta/ins18.jpg';
import img19 from './ImagesInsta/ins19.jpg';
import img20 from './ImagesInsta/ins20.jpg';
import img21 from './ImagesInsta/ins21.jpg';
import Navi from './Navi';

class Prof extends React.Component {
  render() {
    return (
      <div className="nav-1">
        <Navi />
        <div className="prof">
          <div className="sides">
            <div className="prf-right">
              <img src={img} alt="" />
            </div>
            <div className="prf-left">
              <div className="id-name">
                <div className="name-1">
                  <h1>nanepavi97</h1>
                </div>
                <div className="e-p">
                  <button type="button">edit profile</button>
                </div>
                <i className="fas fa-cog" />
              </div>
              <div className="pff">
                <div className="post">21 post</div>
                <div className="followers">89 followers</div>
                <div className="following">363 following</div>
              </div>
              <div className="slogan">
                <h1>Páví Ñañ Ê 18/4/97</h1>
                <p>
                  alwayz classy ,nevr trashy,N a little bit sassy
                  <br />
                  🎂Candle on April 18🍾
                  <br />
                  ⛓Mechanical Engineer 🔩
                  <br />
                  Thalapathy rasigan
                </p>
              </div>
            </div>
          </div>
          <div className="grids">
            <Grid1 />
            <Grid2 />
            <Grid3 />
          </div>
        </div>
      </div>
    );
  }
}

const Titl = ({ sc }) => (
  <div className="grd-names">
    {sc.map((crd) => (
      <div className="sli-crd2">
        <h3>
          <i className={crd.i} />
          {crd.h3}
        </h3>
      </div>
    ))}
  </div>
);
const Pict = ({ pi }) => (
  <div className="pic-names">
    {pi.map((pp) => (
      <div className="sli-pic">
        <img src={pp.img} alt="" />
        <div className="lk-cht">
          <i className={pp.icon}>{pp.n1}</i>
          <i className={pp.icon1}>{pp.n2}</i>
        </div>
      </div>
    ))}
  </div>
);
class Grid1 extends React.Component {
  render() {
    return (
      <Titl
        sc={[
          {
            h3: 'post',
            i: 'fas fa-th',
          },
          {
            h3: 'igtv',
            i: 'fas fa-tv',
          },
          {
            h3: 'saved',
            i: 'far fa-bookmark',
          },

          {
            h3: 'tagged',
            i: 'far fa-user-circle',
          },
        ]}
      />
    );
  }
}
class Grid3 extends React.Component {
  render() {
    return (
      <div className="g-3">
        <div className="tech">
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
        <div className="indus">
          <h2>© 2019 INSTAGRAM</h2>
        </div>
      </div>
    );
  }
}
class Grid2 extends React.Component {
  render() {
    return (
      <div className="g-2">
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
              img: img2,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img15,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img16,
              icon: 'fa fa-heart',
              n1: '38',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img5,
              icon: 'fa fa-heart',
              n1: '45',
              icon1: 'fa fa-comment',
              n2: '12',
            },
            {
              img: img13,
              icon: 'fa fa-heart',
              n1: '52',
              icon1: 'fa fa-comment',
              n2: '1',
            },
            {
              img: img9,
              icon: 'fa fa-heart',
              n1: '25',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: img3,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img7,
              icon: 'fa fa-heart',
              n1: '31',
              icon1: 'fa fa-comment',
              n2: '0',
            },
            {
              img: img10,
              icon: 'fa fa-heart',
              n1: '48',
              icon1: 'fa fa-comment',
              n2: '7',
            },
            {
              img: img11,
              icon: 'fa fa-heart',
              n1: '28',
              icon1: 'fa fa-comment',
              n2: '5',
            },
            {
              img: img12,
              icon: 'fa fa-heart',
              n1: '71',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: img6,
              icon: 'fa fa-heart',
              n1: '18',
              icon1: 'fa fa-comment',
              n2: '4',
            },
            {
              img: img8,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '18',
            },
            {
              img: img14,
              icon: 'fa fa-heart',
              n1: '20',
              icon1: 'fa fa-comment',
              n2: '2',
            },
            {
              img: img4,
              icon: 'fa fa-heart',
              n1: '40',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img21,
              icon: 'fa fa-heart',
              n1: '55',
              icon1: 'fa fa-comment',
              n2: '8',
            },
            {
              img: img17,
              icon: 'fa fa-heart',
              n1: '30',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img18,
              icon: 'fa fa-heart',
              n1: '27',
              icon1: 'fa fa-comment',
              n2: '10',
            },
            {
              img: img19,
              icon: 'fa fa-heart',
              n1: '21',
              icon1: 'fa fa-comment',
              n2: '15',
            },
            {
              img: img20,
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
export default Prof;
