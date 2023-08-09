import React from "react";
import CollectionItem from "../collection-Item/collection-Item.component";
import "./preview.styles.scss";

const CollectionPreview = (props: any) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item: any, idx: number) => idx < 4)
          .map(({ id, ...otherItemProps }: { id: any }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
