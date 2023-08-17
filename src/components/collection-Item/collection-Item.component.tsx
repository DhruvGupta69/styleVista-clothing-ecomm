import React from "react";
import "./collection-Item.styles.scss";
import CustomButton from "../custon-Button/custom-Button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";
import { Dispatch } from "redux";
import { CartActionTypes, Item } from "../../redux/cart/types";

interface Props {
  item: Item;
  addItem: (item: Item) => CartActionTypes;
}

const CollectionItem: React.FC<Props> = ({ item, addItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}$</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted={true}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  addItem: (item: Item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
