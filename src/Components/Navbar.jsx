import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import star from "../Assests/star-regular.svg";
import swim from "../Assests/person-swimming-solid.svg";
import bike from "../Assests/person-biking-solid.svg";
import horse from "../Assests/horse-solid.svg";
import extreme from "../Assests/volcano-solid.svg";
import golf from "../Assests/golf-ball-tee-solid.svg";
import gym from "../Assests/dumbbell-solid.svg";
import lake from "../Assests/sailboat-solid.svg";
import armoury from "../Assests/person-rifle-solid.svg";

class Navbar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <Link to="/featured" style={{ textDecoration: "none" }}>
            <img src={star} alt="featured" />
            <p style={{marginLeft:"-12px"}}>Featured</p>
          </Link>
        </div>
        <div>
          <Link to="/armoury" style={{ textDecoration: "none" }}>
            <img src={armoury} alt="Armoury" />
            <p style={{marginLeft:"-12px"}}>Armoury</p>
          </Link>
        </div>
        <div>
          <Link to="/aquatics" style={{ textDecoration: "none" }}>
            <img src={swim} alt="Aquatics" />
            <p style={{marginLeft:"-12px"}}>Aquatics</p>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={bike} alt="Cycling" />
            <p style={{marginLeft:"-12px"}}>Cycling</p>
          </Link>
        </div>
        <div>
          <Link to="/equestrian" style={{ textDecoration: "none" }}>
            <img src={horse} alt="Equestrian" />
            <p style={{marginLeft:"-20px"}}>Equestrian</p>
          </Link>
        </div>
        <div>
          <Link to="/extreme" style={{ textDecoration: "none" }}>
            <img src={extreme} alt="Extreme" />
            <p style={{marginLeft:"-12px"}}>Extreme</p>
          </Link>
        </div>
        <div>
          <Link to="/golf" style={{ textDecoration: "none" }}>
            <img src={golf} alt="Golf" />
            <p style={{marginLeft:"-12px"}}>Golf</p>
          </Link>
        </div>
        <div>
          <Link to="/gymnastics" style={{ textDecoration: "none" }}>
            <img src={gym} alt="Gymnastics" />
            <p style={{marginLeft:"-20px"}}>Gymnastics</p>
          </Link>
        </div>
        <div>
          <Link to="/lakeandSea" style={{ textDecoration: "none" }}>
            <img src={lake} alt="lake and sea" />
            <p style={{marginLeft:"-20px"}}>Lake & Sea</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
