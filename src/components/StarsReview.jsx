import React from "react";

export const StarsReview = ({ review }) => {
  const rating = parseInt(review); // Convertir la revisión a un número entero

  const filledStars = rating >= 1 ? rating : 0; // Estrellas llenas
  const emptyStars = 5 - filledStars; // Estrellas vacías

  return (
    <div className="flex">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="text-yellow-500 text-2xl">
          ★
        </span>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={index} className="text-gray-500 text-2xl">
          ☆
        </span>
      ))}
    </div>
  );
};

 
