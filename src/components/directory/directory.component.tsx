import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Section } from "../../redux/directory/types";
import { RootState } from "../../redux/root-reducer";
import { selectDirectorySelctions } from "../../redux/directory/selector";

interface Props {
  sections: Array<Section>;
}

const Directory: React.FC<Props> = ({ sections }) => {
  return (
    <div className="container-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelctions,
});

export default connect(mapStateToProps)(Directory);
