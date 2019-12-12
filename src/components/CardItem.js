import React, { memo } from "react";
import styled from "styled-components";

const StyledCardItem = styled.div`
  border: 1px solid grey;
  display: inline-block;
  text-align: center;

  p.retailPrice {
    text-decoration: line-through;
  }

  p.salePrice {
    font-size: 3.2rem;
  }
`;

const CardItem = memo(function CardItem({
  item: { id, imageUrl, name, quantityAvailable, retailPrice, salePrice },
  itemInCart,
  addToCart
}) {
  console.log(quantityAvailable);
  return (
    <StyledCardItem>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p className="retailPrice">{(retailPrice / 100).toFixed(2)}</p>
      <p className="salePrice">{(salePrice / 100).toFixed(2)}</p>
      {itemInCart && (
        <button
          onClick={() =>
            addToCart({ id, name, quantity: 1, salePrice, quantityAvailable })
          }
        >
          Add to cart
        </button>
      )}
    </StyledCardItem>
  );
});

export { CardItem };
