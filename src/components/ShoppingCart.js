import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  incrementItemInCart,
  decrementItemInCart,
  removeItemFromShoppingCart
} from "../actions/shoppingCart";
import { ShoppingCartItem } from "./ShoppingCartItem";

const StyledShoppingCart = styled.div``;

function ShoppingCart({
  shoppingCartItems,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart
}) {
  return (
    <StyledShoppingCart>
      <p>Shopping Cart</p>
      {shoppingCartItems.map(
        ({ id, name, quantity, quantityAvailable, salePrice }) => (
          <ShoppingCartItem
            key={id}
            id={id}
            name={name}
            itemQuantity={quantity}
            quantityAvailable={quantityAvailable}
            salePrice={salePrice}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItemFromCart}
          />
        )
      )}
    </StyledShoppingCart>
  );
}

ShoppingCart.propTypes = {
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  results: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    incrementQuantity(id) {
      return dispatch(incrementItemInCart(id));
    },
    decrementQuantity(id) {
      return dispatch(decrementItemInCart(id));
    },
    removeItemFromCart(id) {
      return dispatch(removeItemFromShoppingCart(id));
    }
  };
}

let ShoppingCartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

export { ShoppingCartContainer as ShoppingCart };
