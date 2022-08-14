import React from "react";
import { Button } from "@mui/material";
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
const footer = () => {
  return (
    <div>
      <div className="coloring">
        <h5 id="topSpace">Tell Your Brand's Story</h5>
        <h6>Many of the benefits of Ethiopian Yellow Pages are free</h6>
        <div className="spacing">
          <h5>Update Buisness</h5>
          <p>description</p>
          <p>payment</p>
          <p>hour of work</p>

          <Button id="modify_color" variant="outlined" size="large">
            Start now
          </Button>
        </div>
      </div>

      <div className="coloring_note">
        <div className="maxWidth">
          <center>
            <h2>Increase Your Exposure</h2>
          </center>

          <p>
            There are nearly 10 million reasons you need a Ethiopian Yellow
            Pages Profile. We introduce you to an audience that is 20% more
            likely to buy.
          </p>
          <center>
          <Button id="modify_but_color" variant="outlined" size="large">
            Get Listed
          </Button>
          </center>
        </div>
      </div>

      <div className="footer">
        <p>1924 9th Street Northwest, Washington D.C 20001.TEL 202-387-9302</p>
        <p>
          Copyright © Ethiopian Yellow Pages 2022, all rights reserved | Powered
          by Ethiopian Yellow Pages
        </p>
        <FacebookOutlinedIcon/>
        <InstagramIcon/>
      </div>
    </div>
  );
};

export default footer;
