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
import { cursor } from "sisteransi";

const StyledShoppingCart = styled.div`
  border: 1px solid grey;
  margin-top: 20px;
  margin-right: 20px;
  padding: 20px 15px;
`;

function ShoppingCart({
  shoppingCartItems,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart
}) {
  return (
    <StyledShoppingCart>
      <p>Shopping Cart</p>
      {shoppingCartItems.length === 0 && <p>You have no items in your cart</p>}
      {shoppingCartItems.length > 0 && (
        <>
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
          <p>
            Total:
            {shoppingCartItems
              .reduce((acc, cur) => {
                const totalForItem = (cur.quantity * cur.salePrice) / 100;
                acc += totalForItem;
                return acc;
              }, 0)
              .toFixed(2)}
          </p>
        </>
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
