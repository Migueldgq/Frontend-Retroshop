/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <p className="text-2xl font-bold text-red">{message}</p>
      <Link to="/">Volver a la pagina principal</Link>
    </>
  );
};
