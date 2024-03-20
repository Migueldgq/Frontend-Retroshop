import { Link } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";
import { useContext } from "react";

export const LogOutButton = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  const [, setToken] = useContext(authContext);
  return (
    <Link to="/">
      <button
        className="bg-[#D9D9D9] px-10 py-2 font-bold rounded-full active:border-[#FE7193] border-2 hover:bg-[#FE7193]"
        onClick={handleLogOut}
      >
        Cerrar sesión
      </button>
    </Link>
  );
};
