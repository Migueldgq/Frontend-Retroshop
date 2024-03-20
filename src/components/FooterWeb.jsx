import { Link } from "react-router-dom"
import Contact from "./Contact"
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import RadioIcon from '@mui/icons-material/Radio';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

export const FooterWeb = () => {
  return (
    <div className="hidden lg:flex flex-col bg-gray-200 text-grey-700 max-w-screen shadow-[9px_-2px_18px_3px_rgba(133,126,133,1)] mt-[20px]">
     
        <div className=" flex flex-row text-center justify-center px-[10px] " >
        
           <div className=" flex flex-col w-[30vw] gap-10 justify-center items-center  text-md">
           <div className="grid grid-cols-2 gap-4 text-center">
            <Link to="/products?category=Consola">
            <p className="mx-3 text-grey-700  text-shadow-md"><SportsEsportsIcon className='text-[#1D2375]'/> Consolas</p>
          </Link>

          <Link to="/products?category=Videojuegos">
            <p className="mx-3  "> <VideogameAssetIcon className='text-[#1D2375]'/> Videojuegos</p>
          </Link>
          <Link to="/products?category=radio">
          <p className="mx-3  text-grey-700 ">
           <RadioIcon className='text-[#1D2375]'/> Radios
          </p>
          </Link>
        
          <Link to="/products?category=Ordenador">
            <p className="mx-3 text-grey-700 "> <LaptopChromebookIcon className='text-[#1D2375]'/> Ordenadores</p>
          </Link>
          <Link to="/products?category= movil">
          <p className="mx-3  text-grey-700 ">
           <PhoneIphoneIcon className='text-[#1D2375]'/> Móviles
          </p>
          </Link>
          <Link to="/products?category=otros">
          <p className="mx-3  text-grey-700 ">
         
           <DevicesOtherIcon className='text-[#1D2375]'/> Otros
          </p>
          </Link>
          
          </div>
           </div>
           <div className=" flex flex-col w-[30vw]  text-justify p-5 text-sm">
           <div className=" flex  justify-center text-center  ">
            <img  className="w-[80%]"src="/retroshop.svg"/>
            
        </div>
           <p className="text-gray-800"> Tu destino en línea para descubrir y vender tecnología retro. Sumérgete en nuestra vibrante comunidad donde puedes encontrar una amplia variedad de dispositivos vintage, desde consolas de videojuegos hasta gadgets icónicos. nuestra plataforma ofrece una forma fácil y segura de comprar y vender artículos retro. Únete a nosotros para revivir la nostalgia y explorar un mundo de tecnología clásica..</p>
           </div>
           <div className="w-[30vw]">
           <Contact/>
           </div>
    </div>
    <div className=" flex flex-row bg-gray-300 shadow-[9px_-2px_18px_3px_rgba(133,126,133,1)] ">
      {/* bg-gradient-to-r from-blue-700 via-pink-500 to-purple-500' */}
      {/* bg-gradient-to-r from-purple-500 via-pink-500 to-blue-700' */}
        <div className=" flex  justify-center text-center w-[50%]">
            <img  className="w-[30%]"src="/retroshop.svg"/>
            
        </div>
        <div className=" w-[50%] flex gap-5 text-center  justify-center mt-2">
        <span className=" text-sm text-gray-500">© copyright derechos reservados</span>
            <Link to="/profile/policies" className=" text-sm text-gray-500">Política de privacidad</Link>
           <Link className=" text-sm text-gray-500"to="/profile/cookies">Política de cookies</Link>
        </div>
    </div>
</div>

  )
}
