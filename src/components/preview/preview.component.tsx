import React from "react";
import { Item } from "../../redux/cart/types";
import collectionItemComponent from "../collection-Item/collection-Item.component";
import "./preview.styles.scss";
import CollectionItemComponent from "../collection-Item/collection-Item.component";

interface Props {
  title: string;
  items: Array<Item>;
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default CollectionPreview;
