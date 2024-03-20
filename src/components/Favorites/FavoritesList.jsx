import { Link } from "react-router-dom";
import Reservation from "../Reservation";
import { FavoriteBlank } from "../FavoriteBlank";

const FavoritesList = ({ products }) => {
  console.log(products);
  if (!products) {
    return <FavoriteBlank />;
  }

  return (
    <ul className="w-full flex flex-col gap-1">
      {products.map((products) => (
        <Link to={`/products/product/?id=${products.id}`} key={products.id}>
          <li className="flex bg-[#D9D9D9] h-24 w-full justify-between items-center border-y-[0.5px] border-[#7C7C7C]  ">
            <Reservation reservation={products} />
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default FavoritesList;
