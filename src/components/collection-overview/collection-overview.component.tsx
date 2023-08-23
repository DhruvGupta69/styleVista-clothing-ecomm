import React from "react";
import "./collection-overview.styles.scss";
import CollectionPreview from "../preview/preview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Collection } from "../../redux/shop/types";
import { RootState } from "../../redux/root-reducer";
import { selectCollections } from "../../redux/shop/selector";

interface Props {
  collections: Array<Collection>;
}

const CollectionsOverview: React.FC<Props> = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<RootState, Props>({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
