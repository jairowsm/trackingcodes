/**
* Trackear thank you message que son creados después de enviar un form
*/

// el formulario a observar
const scheduleForm = document.querySelector(".myform");

const observer = new MutationObserver(function(mutations) {
	//el contenedor del thank you message que se creará al enviarse el form
	let confirmationMessage = document.querySelector(".myform-confirmation");
	//checamos si se creo el thank you message
   if (scheduleForm.contains(confirmationMessage)) {
        //tracking code
	   //se desconecta el observer para evitar duplicados
        observer.disconnect();
    }
});

// se ejecuta el observer con sus configuraciones
observer.observe(scheduleForm, {attributes: false, childList: true, characterData: false, subtree:true});


/**
* Trackear thank you message que es creado al cargar la página, pero que se muestra hasta que el form se manda
* Este codigo se ejecuta cuando ocurra un cambio en los estilos, por lo que es necesario que se use como target
* el elemento específico que muestra you message
*/


const listenChange = new MutationObserver(function(mutations) {
	//conversion code
	//desconectamos el observer
	observer.disconnect();
});

// elemento que contiene el thank you message
const element = document.querySelector('.form-success');
//configuramos el observer para escuchar solo los cambios en los estilos del elemento target
listenChange.observe(element, { attributes : true, attributeFilter : ['style'] });


/**
* Trackear thank you message que es creado al cargar la página, pero que se muestra hasta que el form se manda
* Este codigo se ejecuta cuando ocurra un cambio específico en el elemento que contiene el thank you message
* en este caso funcionaría si el thank you message cambia de display none, a display block
*/

const listenChange = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    	//guardamos el display del elemento al momento del cambio
        const tyMessage = mutation.target.style.display;
        //verificamos si el display cambio a block y enviamos la conversion
        // notar que si el elemento cambia visibility, o simplemente se remueve el display:none, este codigo no serviria
        if (tyMessage == 'block') {
          //conversion code
          //desconectamos el observer
          observer.disconnect();
        }
    });    
});

// elemento que contiene el thank you message
const element = document.querySelector('.form-success');
//configuramos el observer para escuchar solo los cambios en los estilos del elemento target
listenChange.observe(element, { attributes : true, attributeFilter : ['style'] });