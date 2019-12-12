import React, { memo } from "react";
import styled from "styled-components";

const StyledCardItem = styled.div`
  border: 1px solid grey;
  display: inline-block;
  text-align: center;

  p.name {
    height: 40px;
  }

  p.retailPrice {
    text-decoration: line-through;
  }

  p.salePrice {
    font-size: 3.2rem;
  }

  & > div.imageContainer {
    position: relative;
    & > div {
      opacity: 0;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all 0.3s ease-in-out;

      & > * {
        position: relative;
        bottom: 0;
      }
    }

    &:hover > div {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.4);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const CardItem = memo(function CardItem({
  item: { id, imageUrl, name, quantityAvailable, retailPrice, salePrice },
  itemInCart,
  addToCart
}) {
  return (
    <StyledCardItem>
      <div className="imageContainer">
        <img src={imageUrl} alt={name} />
        <div>
          {itemInCart && quantityAvailable > 0 && (
            <button
              onClick={() =>
                addToCart({
                  id,
                  name,
                  quantity: 1,
                  salePrice,
                  quantityAvailable
                })
              }
            >
              Add to cart
            </button>
          )}
          {quantityAvailable === 0 && <p>Sold out</p>}
        </div>
      </div>
      <p className="name">{name}</p>
      <p className="retailPrice">{(retailPrice / 100).toFixed(2)}</p>
      <p className="salePrice">{(salePrice / 100).toFixed(2)}</p>
    </StyledCardItem>
  );
});

export { CardItem };
