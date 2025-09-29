import Wrapper from "@/components/layouts/DefaultWrapper";
import ProductsMainArea from "@/components/products/ProductsMainArea";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const ProductsMain = () => {
  return (
    <>
      <MetaData pageTitle="Products">
        <Wrapper>
          <ProductsMainArea />
        </Wrapper>
      </MetaData>
    </>
  );
};

export default ProductsMain;
