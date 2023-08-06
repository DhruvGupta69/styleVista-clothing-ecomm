import React from "react";
import "./homePage.styles.scss";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container-menu">
        <div className="menu-items">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">SNEAKERS</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
        <div className="menu-items">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};
