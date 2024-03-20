export const FavoriteBlank = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] relative mx-10 my-10">
      <img src="/iconretroshop.svg" alt="" className="size-24" />
      <h1 className="text-2xl font-bold text-center capitalize">No hay productos en favorito</h1>
      <p className="text-lg font-semibold text-gray-700 text-center px-5">Hmmm aún no has añadido ningún producto a favoritos!!!</p>
    </div>
  );
};
