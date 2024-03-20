export const ReservBlankFinished = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] relative mx-10 my-10">
      <img src="/iconretroshop.svg" alt="" className="size-24" />
      <h1 className="text-2xl font-bold text-center capitalize">No hay reservas finalizadas</h1>
      <p className="text-lg font-semibold text-gray-700 text-center px-5">Hmm parece que aún no has hecho ninguna reserva, haz tu primera reserva!!!</p>
    </div>
  );
};
