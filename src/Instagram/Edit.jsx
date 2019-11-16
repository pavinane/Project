import React from "react";
import "./edit.scss";
import Navi from "./Navi";
import prfimg from "./ImagesInsta/vijay.jpg";
import Footer from "./Footer";
class Edit extends React.Component {
  render() {
    return (
      <div className="edit">
        <div className="edt-1">
          <Navi />
        </div>
        <div className="edt-2">
          <Edp
            dp={[
              {
                a: "Edit Profile"
              },
              {
                a: "Change Password"
              },
              {
                a: "Apps and Website"
              },
              {
                a: "Email and SMS"
              },
              {
                a: "Manage Conatact"
              },
              {
                a: "Privacy and Security"
              },
              {
                a: "Login Activity"
              },
              {
                a: "Email from Instagram"
              }
            ]}
          />
          <div className="lf-co">
            <div className="ps">
              <div className="crd-1">
                <img src={prfimg} alt="" />
                <h2>
                  nanepavi97 <br /> <span>Change Profile Photo</span>
                </h2>
              </div>
              <div className="card-2">
                <div className="aa">
                  <h2>Name</h2>
                  <h2>Username</h2>
                  <h2>Website</h2>
                  <h2>Bio</h2>-<h2>Email</h2>
                  <h2>Phone Number</h2>
                  <h2>Gender</h2>
                  <h2>Similar Account Suggestions</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Edit;

const Edp = ({ dp }) => (
  <div className="edt-prof">
    {dp.map(dpg => (
      <div className="ep-cd">
        <h2>{dpg.a}</h2>
      </div>
    ))}
  </div>
);

class ContactForm extends React.Component {
  state = {
    name: "",
    username: "",
    wesite: "",
    designation: "",
    remember: false,
    number: "",
    email: ""
  };

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      name,
      username,
      website,
      designation,
      remember,
      number,
      email
    } = this.state;

    return (
      <div className="form-input">
        <form onSubmit={this.handleSubmit}>
          <div className="input-form">
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
              placeholder="first name"
            />
            <input
              name="username"
              type="text"
              value={username}
              onChange={this.handleChange}
              placeholder="user name"
            />
            <input
              name="website"
              type="text"
              value={website}
              onChange={this.handleChange}
            />

            <textarea
              name="designation"
              type="text"
              value={designation}
              onChange={this.handleChange}
            />
            <h3>Private Information</h3>
            <input
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
              placeholder="enter  your email"
            />
            <input
              name="number"
              type="text"
              value={number}
              onChange={this.handleChange}
              placeholder="enter your number"
            />
            <p>male</p>
            <div className="in1">
              <input
                name="remember"
                type="checkbox"
                checked={remember}
                onChange={this.handleChange}
              />
              <h4>
                Include your account when recommending similar accounts people
                might want to follow. <span>[?]</span>
              </h4>
            </div>
            <div className="but-in">
              <button onClick={this.handleForSubmit}>Submit</button>
              <h4>Temporarily disable my account</h4>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
