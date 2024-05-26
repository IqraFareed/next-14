import React from "react";

const ProductDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>feature prod</h2>
    </div>
  );
};

export default ProductDetailLayout;
