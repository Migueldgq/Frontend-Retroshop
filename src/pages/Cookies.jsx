import { Link } from "react-router-dom";
import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";


export const Cookies = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 p-5 m-5 ">

        <img src="/retroshop.svg" alt="" className="h-[100px] p-4" />
        <Link to="/">
              <ForwardRoundedIcon className=" hidden lg:flex lg:absolute top-0 left-0 rotate-180 z-5000 text-[40px] text-blue-900" />
            </Link>
        <div className="">
            <h2 className="font-semibold capitalize"> responsabilidad y compromiso
Política de cookies</h2>
            <p className="text-justify indent-14 px-7">De conformidad con la normativa española que regula el uso de cookies en relación a la prestación de servicios de la sociedad de la información, recogida en el apartado segundo del artículo 22 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, tras su modificación por el Real Decreto Ley 13/2012 del 30 de marzo, le informamos sobre las cookies utilizadas en el sitio web retroShop, y el motivo de su uso. Asimismo, le informamos que de conformidad con la ley (i) el USUARIO da su consentimiento para poder utilizarlas si modifica la configuración de su navegador deshabilitando las restricciones que impiden la entrada de cookies y (ii) que el referido consentimiento no será preciso para la instalación de aquellas cookies que sean estrictamente necesarias para la prestación de un servicio expresamente solicitado por el USUARIO.</p>
            <h2 className="font-semibold capitalize">– ¿QUE SON LAS COOKIES?</h2>
            <p className="text-justify indent-14 px-7">Las cookies son pequeños archivos de texto que se instalan en el navegador del ordenador del USUARIO para registrar su actividad enviando una identificación anónima que se almacena en el mismo, con la finalidad de que la navegación sea más sencilla, permitiendo por ejemplo, el acceso a los USUARIOS que se hayan registrado previamente, el acceso a las áreas, servicios o promociones reservados exclusivamente a ellos sin tener que registrarse en cada visita. Se pueden utilizar también para medir la audiencia, parámetros del tráfico y navegación, tiempo de sesión, y/o controlar el progreso y número de entradas. Las cookies se asocian únicamente a un usuario anónimo y su ordenador o dispositivo y no proporcionan referencias que permitan conocer sus datos personales.</p>
            <h2 className="font-semibold capitalize">– TIPOS DE COOKIES UTILIZADAS POR ESTE SITIO WEB</h2>
            <p className="text-justify indent-14 px-7">Las cookies utilizadas en nuestro sitio web, son de sesión y de terceros, y nos permiten almacenar y acceder a información relativa al idioma, el tipo de navegador utilizado, y otras características generales predefinidas por el usuario, así como, seguir y analizar la actividad que lleva a cabo, con el objeto de introducir mejoras y prestar nuestros servicios de una manera más eficiente y personalizada Retroshop no utiliza cookies publicitarias o de publicidad comportamental.
La utilización de las cookies ofrece ventajas en la prestación de servicios, puesto que, facilita al usuario la navegación y el acceso a los diferentes servicios que ofrece este sitio web; evita al usuario tener que configurar las características generales predefinidas cada vez que accede al sitio web; favorece la mejora del funcionamiento y de los servicios prestados a través de este sitio web, tras el correspondiente análisis de la información obtenida a través de las cookies instaladas.
</p>
<p className="text-justify indent-14 px-7">
NOTA: En alguna página de este sitio web se muestra contenido embebido o invocado a través del cual se pueden estar instalando cookies de terceros. Aunque la página es revisada cada cierto tiempo puede ser que el listado de cookies no esté actualizado. Si desea hacer alguna pregunta sobre las cookies que se instalan a través de este sitio web, contacte con nosotros.
</p>
        </div>
    </div>
 
  );
};
