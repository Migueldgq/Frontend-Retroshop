import InboxIcon from "@mui/icons-material/Inbox";
import { Link } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';

const PopUp = ({ message, onClose, link }) => {
  // const navigate = useNavigate();

  // function autolink() {
  //   navigate("/profile");
  // }
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-white mt-0 mb-10 gap-5 z-50 overflow-y-hidden">
      <img src="/retroshop.svg" alt="" className="h-[100px] p-4" />

      <div className="bg-white w-600 p-4 rounded-xl flex flex-col justify-center items-center gap-3  border-2 ml-8 mr-8 mb10">
        <InboxIcon className="text-3xl" />
        <p className="text-red-500 w-full h-full text-xl font-bold  text-center">
          {message}
        </p>
      </div>
      <Link to={`${link}`}>
        <button
          onClick={onClose}
          className="w-[278px] h-[33px] bg-[#3337a3] text-white rounded-sm"
        >
          Cerrar
        </button>
      </Link>
    </div>
  );
};

export default PopUp;

//      <div
// className="flex justify-center items-center flex-col pt-4 gap-[20px] ">
// <div className="flex ">
//   <img src="/retroshop.svg" alt="" className="w-[300px] h-[300px]" />
//   <div className="bg-white p-4 rounded shadow-md">
//     <p>{message}</p>
//     <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-3 py-1 rounded">
//       Cerrar
//     </button>

// </div>
// </div>
// </div>
