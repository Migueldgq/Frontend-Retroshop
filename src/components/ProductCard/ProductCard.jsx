import { FavButton } from "../FavButton";
import { ProductCategory } from "./ProductCategory";
import { ProductDetails } from "./ProductDetails";
import { ProductImage } from "./ProductImage";

export const ProductCard = ({
  productCategory,
  productImg1,
  productImg2,
  productName,
  productPrice,
  productId,
}) => {
  return (
    <div className="ProductCard bg-[#999999] w-[154px] h-[222px] border-2 rounded-xl shadow-xl relative">
      <ProductCategory productCategory={productCategory} />
      <ProductImage productImg1={productImg1} productImg2={productImg2} />
      <ProductDetails productName={productName} productPrice={productPrice} />
      <div className="flex justify-center items-center w-[22px] h-[22px] rounded-full bg-[#D9D9D9] absolute left-[120px] top-[190px]">
        <FavButton productId={productId} />
      </div>
      {console.log(productId)}
    </div>
  );
};
