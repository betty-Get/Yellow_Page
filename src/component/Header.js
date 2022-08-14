import React from "react";
import "./header.css";
import Avatar from '@mui/material/Avatar';
import Body from "./Body.js";
import Lists from "./Lists.js";
import TopCatagories from "./TopCatagories";
import Footer from "./Footer";
import flower from "../asset/flower.PNG";

const Header = () => {
  return (
    <div>
      <div className="image_formation" id="image">
        <div className="main">
          <div className="left_side">
            <img src={flower} className="logo" />
          </div>

          <div className="right_side">
            <Avatar src="/broken-image.jpg"  sx={{ width: 24, height: 24 }}/> 
            
            <button>sign in</button>
            <button id="newButton">+ Add Listing</button>
          </div>
        </div>
        <div>
          <Body />
        </div>
      </div>

      <div>
        <Lists />
        <TopCatagories />
        <Footer />
      </div>
    </div>
  );
};

export default Header;
