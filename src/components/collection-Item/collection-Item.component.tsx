import React from "react";
import "./collection-Item.styles.scss";

const CollectionItem = (props: any) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}$</span>
      </div>
    </div>
  );
};

export default CollectionItem;
