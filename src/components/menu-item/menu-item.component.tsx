import React from "react";
import "./menu-item.styles.scss";

type myProps = {
  title: string;
  imageUrl: string;
  size?: string;
};

const MenuItem = (props: myProps) => {
  return (
    <div className={`${props.size} menu-items`}>
      <div
        className="backgroundImage"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
