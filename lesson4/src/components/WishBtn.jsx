import React from "react";
import { useWishlist } from "react-use-wishlist";

const WishBtn = ({ myProduct }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleFunc = (product) => {
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      addWishlistItem(product);
    }
  };
  return (
    <div>
      <button onClick={() => toggleFunc(myProduct)}>
        {inWishlist(myProduct.id) ? "ici dolu urek" : "ici bos urek"}
      </button>
    </div>
  );
};

export default WishBtn;
