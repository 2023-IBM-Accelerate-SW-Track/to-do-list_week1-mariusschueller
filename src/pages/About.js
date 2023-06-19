import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/mariusimage.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          alt="Profile Pic"
          src={profile_pic}
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Marius Schueller</div>
        <div className="brief_description">
          Here is a little about me. I go to Vanderbilt University and love to play piano, and I also compete in ultimate frisbee.
        </div>
      </div>
    </div>
  </div>
    )
  }
}