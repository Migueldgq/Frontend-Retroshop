export const ProductCategory = ({ productCategory }) => {
  return (
    <div className="flex items-center justify-center w-[60px] h-[14px] bg-gray-400 bg-opacity-30 absolute left-[85px] top-[10px] rounded-lg z-[2]">
      <p className="text-[10px] font-bold">{productCategory}</p>
    </div>
  );
};
