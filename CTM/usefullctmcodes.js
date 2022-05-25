/**
* Ejecutar el script de CTM cuando ocurre un cambio dentro del sitio web
* Este código es útil para swappear números que son creados dinámicamente
*/

// funcion autoinvocable para correr el observer
(function (){
  const ObservePhone = new MutationObserver(function(mutations) {
    // guardamos todos los elementos anchor que contengan href tel
    // esto es necesario ya que CTM necesita un elemento para intentar swappear
  	const phone = document.querySelectorAll("a[href*='tel']");
    // ejecutamos el swap por cada numero de telefono, para que CTM lo swappee
  	phone.forEach(el => __ctm.main.runNow(el)); 
  });

  // Elemento donde ocurrirá el cambio
  const element = document.querySelector(`#wpsl-stores`);
  // Observamos los cambios en todo el subtree e hijos del elemento seleccionado
  // Ser específico con el elemento a escuchar, para evitar problemas de rendimiento
  ObservePhone.observe(element, { 
  	subtree : true,
  	childList: true,
  	attributes: false,
  });
})();

/**
* Este código funciona de cierta forma similar al anterior, sin embargo en este caso lo que hacemos
* es extraer los pool numbers cargados por el api de CTM, y colocarlos en un elemento en específico
* este script es util con páginas que sobre escriben el numero de teléfono después de que CTM ya lo swapeo
*/

window.addEventListener('load', function() {
  //function para formatear el numero
  const formatNumber = (number) => {
    const cleand = cleaned = ('' + number).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null;
  }
      //checamos si CTM está trackeando o no
  if (window.__ctm_tracked) {
    //seteamos un timeout de 3 segundos para volver a colocar el numero de CTM
    window.setTimeout(function() {
      // Selector del target number, o el numero del website
      const TellSelector = document.querySelector(".selectordelnumero");
      //extraemos el pool number cargados por la api de CTM
      const poolNumbers = JSON.stringify(window.__ctm_tracked_numbers).match(/\d+/g).join('');
      //cambiamos el numero target por el poolnumber
      TellSelector.innerText = `${formatNumber(poolNumbers)}`;
      //agregamos el href con el pool number para que el numero sea clickeable
      TellSelector.setAttribute("href", `${formatNumber(poolNumbers)}`);      
    }, 3000);
  }
});



      
