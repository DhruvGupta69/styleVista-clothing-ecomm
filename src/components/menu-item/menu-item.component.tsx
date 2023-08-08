import React, { ReactPropTypes } from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

// type myProps = {
//   title: string;
//   imageUrl: string;
//   size?: string;
//   history: {
//     push(url: string): void;
//   };
//   linkUrl: string;
// };

export const MenuItem = (props: any) => {
  return (
    <div
      className={`${props.size} menu-items`}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
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

export default withRouter(MenuItem);
