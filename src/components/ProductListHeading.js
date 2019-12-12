import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledProductListHeading = styled.div``;

const ProductListHeading = ({ query, page, pages, count, total }) => {
  return (
    <StyledProductListHeading>
      <h1>Showing results for "{query}"</h1>
      <p>
        Page {page} of {pages}
      </p>
      <p>
        Showing {count} of {total}
      </p>
    </StyledProductListHeading>
  );
};

ProductListHeading.prototype = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export { ProductListHeading };
