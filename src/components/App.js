import React, { Suspense } from "react";
import { createGlobalStyle } from "styled-components";

import { useFetch } from "../hooks/useFetch";
import { productList } from "../api";

import mockData from "../mock/mock.json";

// const Products = React.lazy(() => import("./Products"));
import Products from "./Products";

const GlobalStyle = createGlobalStyle`
    html, body {
        font-size: 10px;
        margin: 0;
        padding: 0;
        font-family: "Poppins";
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;

export function App() {
  // const { loading, error, data } = useFetch(productList);

  // let body;
  // if (loading) body = <p>Loading...</p>;
  // else if (error) body = <p>Error</p>;
  // else if (!data) body = <p>No data</p>;

  // return (
  //   <>
  //     <GlobalStyle />
  //     {body ? (
  //       body
  //     ) : (
  //       <Suspense fallback={<p>Loading...</p>}>
  return (
    <>
      <GlobalStyle />
      <Products data={mockData} />
    </>
  );
  //       </Suspense>
  //     )}
  //   </>
  // );
}
