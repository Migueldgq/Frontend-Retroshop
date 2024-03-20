export const ProductsBlank = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] relative mx-10 my-10">
      <img src="/iconretroshop.svg" alt="" className="size-24" />
      <h1 className="text-2xl font-bold capitalize">no hay productos</h1>
      <p className="text-lg font-semibold text-gray-700 text-center px-5">Aquí podrás ver todos los productos que tienes a la venta y mas opciones</p>
    </div>
  );
};
