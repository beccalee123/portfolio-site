import React from "react";

import "../../base-styles/base.scss";
import "./funWithCode.scss";

export const FunWithCode = () => {
  return (
    <div id="funWithCode">
      <h2>Fun with Code</h2>
      <div id="projects">
        <div className="project">
          <a href="https://codepen.io/beccalee123/details/gOvaVJy">
            <img
              src={require("./assets/single-div-kirby.png")}
              alt="Kirby floating on an aqua background"
            />
            Single Div Kirby
          </a>
        </div>
        <div className="project">
          <a href="https://codepen.io/beccalee123/pen/yLpoqGo">
            <img
              src={require("./assets/gradient-star.gif")}
              alt="Spinning twinkly star in the night sky"
            />
            Radial-Gradient Star Animation
          </a>
        </div>
        <div className="project">
          <a href="https://codepen.io/beccalee123/pen/yLpREXr">
            <img
              src={require("./assets/laser-ripple.gif")}
              alt="Very soothing lasers rippling through the sky"
            />
            Laser Ripple Animation
          </a>
        </div>
        <div className="project">
          <a href="https://codepen.io/beccalee123/pen/wvpRQvj">
            <img
              src={require("./assets/yupyupyup2.gif")}
              alt="Lasers appear in a starry sky. When they disappear, 
                two fuzzy muppet aliens appear. The lasers reappear and when they're gone, so are the muppet aliens"
            />
            Alien Muppet Animation
          </a>
        </div>
      </div>
      <div id="more">
        <a href="https://codepen.io/beccalee123/">More on Codepen</a>
      </div>
    </div>
  );
};
