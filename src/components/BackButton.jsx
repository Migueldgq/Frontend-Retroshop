import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    // SI la ruta de la que vienes empieza con tal
    if (
      location.pathname.includes(
        "/products/productSeller" || "products/product"
      )
    ) {
      // entonces retrocede 3 pasos
      navigate(-3);
    } else {
      //SIno retrocede un paso
      navigate(-1);
    }
  };

  return (
    <Link onClick={goBack}>
      <ArrowBackIcon className="size-10 lg:hidden" />
    </Link>
  );
};

export default BackButton;
