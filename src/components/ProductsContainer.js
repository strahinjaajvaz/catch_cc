import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addItemToShoppingCart } from "../actions/shoppingCart";

import { CardItem } from "./CardItem";

const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 20px;
  padding: 20px;
  max-width: 75%;
`;

function ProductsList({ items, addToShoppingCart, shoppingCartItems }) {
  return (
    <StyledProductsContainer>
      {items.map(item => (
        <CardItem
          item={item}
          key={item.id}
          addToCart={addToShoppingCart}
          itemInCart={
            !shoppingCartItems.some(
              shoppingcartItem => shoppingcartItem.id === item.id
            )
          }
        />
      ))}
    </StyledProductsContainer>
  );
}

ProductsList.propTypes = {
  items: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    addToShoppingCart(item) {
      return dispatch(addItemToShoppingCart(item));
    }
  };
}

const ProductsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);

export { ProductsListContainer as ProductsContainer };
