import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledShoppingCartItem = styled.div`
  display: flex;
  & > div {
    flex: 1;
  }

  p.quantity {
    font-size: 2rem;
    padding-right: 15px;
    width: 30px;
  }
`;

const ShoppingCartItem = memo(function({
  id,
  name,
  itemQuantity,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  quantityAvailable,
  salePrice
}) {
  console.log(quantityAvailable);
  return (
    <StyledShoppingCartItem>
      <p className="quantity">{itemQuantity}</p>
      <div>
        <p>{name}</p>
        <div>
          <button
            onClick={() => incrementQuantity(id)}
            disabled={itemQuantity >= quantityAvailable}
          >
            +
          </button>
          <button
            onClick={() => decrementQuantity(id)}
            disabled={itemQuantity === 0}
          >
            -
          </button>
          <button onClick={() => removeItem(id)} disabled={false}>
            x
          </button>
        </div>
      </div>
      <p>{((salePrice * itemQuantity) / 100).toFixed(2)}</p>
    </StyledShoppingCartItem>
  );
});

ShoppingCartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  quantityAvailable: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  shoppingCartItem: PropTypes.shape({
    id: PropTypes.string.isRequired
  })
};

export { ShoppingCartItem };
