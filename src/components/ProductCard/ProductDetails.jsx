export const ProductDetails = ({ productName, productPrice }) => {
  const isLongName = productName.length > 10;
  return (
    <div className="ml-[10px] mt-[10px]">
      <h1
        className={`font-semibold text-sm ${
          isLongName ? 'truncate overflow-hidden' : ''
        }`}
      >
        {productName}
      </h1>
      <h2 className="font-semibold text-sm">{productPrice}€</h2>
    </div>
  );
};
