--CAMBIOS REALIZADOS--

//////////////////////////////////////////////////////

*RegisterPage.jsx*

<!-- .then((data) => {
        if (data) {
          console.log(data);
          console.log(data.message);
          setStatusMessage(data.message);
          setShowPopup(true);
        }
      }) -->

en ese cachito de codigo se enviaba como status message (data.message) pero es undefined, entonces el popUp cargaba sin ningun mensaje. Lo cambié a setStatusMessage(data.error)

**PENDIENTES DE ESTA PAGINA**

-Customizar mensajes de error del Joi porque cuando tira cualquier error de validacion del Joi excepto el de si el email ya está en uso, lo tira en inglés y para mantener la consistencia del idioma de la página deberían aparecer en español

///////////////////////////////////////////////////////////

*RegisterPage y LoginPage*

Cambiamos algunas cosas de el estilo

///////////////////////////////////////////////////

*Detailed Product Page*

Esta ya casi finalizada, muestra información del producto + vendedor

**PENDIENTES DE ESTA PAGINA**

Añadir media valoracion vendedor a la info del vendedor

/////////////////////////////////////////


No se si se me escapa algo más.

//////////////////////////////////////

**PENDIENTES RESTO DE PROYECTO**

- Modificar estilos de paginas para q no produzcan scroll innecesario

- Revisar la confirmacion de cuenta a través del link q se envía por correo porque cree un usuario nuevo y no se confirmaba la cuenta dando click  al enlace  del correo

- Boton fav en pagina main



