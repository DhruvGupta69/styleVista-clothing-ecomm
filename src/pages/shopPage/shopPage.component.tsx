import React from "react";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import { Collection } from "../../redux/shop/types";

interface Props {
  collections: Array<Collection>;
}

const ShopPage: React.FC<Props> = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
