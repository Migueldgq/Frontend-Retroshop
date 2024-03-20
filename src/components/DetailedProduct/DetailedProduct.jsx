/* eslint-disable react/prop-types */
import PersonIcon from "@mui/icons-material/Person";
import { DetailedProductImage } from "./DetailedProductImage.jsx";
import CreateReservation from "../CreateReservation.jsx";
import { FavButton } from "../FavButton.jsx";
import BackButton from "../BackButton.jsx";
import CreateReview from "../../pages/CreateReview.jsx";
import { AverageReview } from "../averageReview.jsx";
//componente que imprime el producto a detalle
const DetailedProduct = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col pb-28 lg:max-w-[700px] lg:border-2 lg:rounded-lg lg:overflow-hidden lg:shadow-lg lg:pb-6 ">
      <div className="w-full relative">
        <DetailedProductImage
          productImg1={data.product.imageURL}
          productImg2={data.product.imageURL2}
        />
        <div className="flex justify-center items-center w-[35px] h-[35px] rounded-full bg-[#D9D9D9] absolute right-4 top-8">
          <FavButton productId={data.product.id} />
        </div>
        <div className="relative bottom-72 left-7 max-w-10">
          <BackButton />
        </div>
      </div>
      <>
        <h1 className="text-2xl capitalize p-2">
          {data.product.name}
        </h1>
        <h2 className="text-2xl  text-gray-700 p-2">
          {data.product.price}€
        </h2>
        <article className="p-2">{data.product.description}</article>
      </>

      <section className="flex items-center mt-5 gap-6 border-y-[0.5px] border-[#7C7C7C]  ">
        {data.seller.avatarURL ? (
          <img
            src={`http://${import.meta.env.VITE_BASE_URL}:3001/${
              data.seller.avatarURL
            }`}
            alt=""
            className="m-2 w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <PersonIcon className="m-2 w-20 h-20 rounded-full fill-slate-200 bg-slate-400" />
        )}
        <div className="flex flex-col">
          <h1 className="font-medium">{data.seller.name}</h1>

          <AverageReview id={data.seller.id} />
        </div>
      </section>
      <div className="flex justify-center mt-4 ">
        {data.reservation.status === "finalizada" ? (
          !data.reservation.review ? (
            <CreateReview
              productId={data.product.id}
              reservationDate={data.reservation.reservationDate}
            />
          ) : (
            <p className="text-center font-medium text-[#3337a3]">
              {" "}
              Retroshop Siempre Contigo!
            </p>
          )
        ) : data.reservation.status === "pendiente" ?  (
          <button disabled className="bg-gray-300 px-10 py-2  rounded-full">
            Reserva ( tiene una solicitud)
          </button>
        ): (
          <CreateReservation productId={data.product.id} />
        )}
      </div>
    </div>
  );
};

export default DetailedProduct;
