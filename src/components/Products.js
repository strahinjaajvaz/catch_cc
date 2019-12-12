import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

import { ProductListHeading } from "./ProductListHeading";
import { initStore } from "../utils/createStore";
import { ProductsContainer } from "./ProductsContainer";
import { ShoppingCart } from "./ShoppingCart";

const StyledContainer = styled.div`
  display: flex;

  div {
    flex: 3;

    & + div {
      flex: 1;
      position: relative;

      & > div {
        position: sticky;
        top: 0;
      }
    }
  }
`;

export default function Products({ data: { metadata, results } }) {
  return (
    <Provider store={initStore()}>
      <>
        <ProductListHeading {...metadata} count={results.length} />
        <StyledContainer>
          <ProductsContainer items={results} />
          <div>
            <ShoppingCart results={results} />
          </div>
        </StyledContainer>
      </>
    </Provider>
  );
}
