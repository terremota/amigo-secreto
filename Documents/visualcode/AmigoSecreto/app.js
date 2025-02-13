let amigos = []; //Se cre una variable llamada amigos que es un Array(lista) vacía.Este array se utilizá para almacenar los nombres de los amigoa que se agregan.

function agregarAmigo() { // Esta función se encarga de agregar un nombre a la lista de amigos.
    const inputAmigo = document.getElementById('amigo'); // Obtiene el elemento HTML con el id
    const nombreAmigo = inputAmigo.value.trim(); // Obtiene el valor (el texto) que el usuario escribió en el campo

    if (nombreAmigo === "") { // Comprueba si el nombre esta vacío. Si lo está, muestra una alrta y sale de la función (return;)
        alert("Por favor, inserte un nombre");
        return;
    }

    if (amigos.includes(nombreAmigo)) { // Comprueba si el nombre ya está en la lista amigos. Si lo está, muestra una alerta y ventna de la función
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    amigos.push(nombreAmigo); //añade el nombre a la lista amigos
    inputAmigo.value = ""; // Limpia el campo de texto para que el usuario pueda escribir el siguiente nombre.
    actualizarLista(); // Llama la función actulizarLista() para que la lista de nombres en la página web se actualice y muestre el nuevo nombre
}

function actualizarLista() { // Esta función se encarga de actualizar la lista de nombres que se muestra en la página web
    const listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento HTML con el id listaAmigos, donde se muestra el nombre
    listaAmigos.innerHTML = ""; // Borra todos los elementos que están dentro de la lista listaAmigos para que la lista se puda volver a crear desde cero

    amigos.forEach(amigo => { // Registre cada nombre en el array amigos. Para cada nombre:
        const li = document.createElement('li'); //Crea un nuevo lemento <li> (un elemntode lista).
        li.textContent = amigo; // Ponga el nombre dl amigo como texto dentro del elemento <li>.
        listaAmigos.appendChild(li); // Agrege el elemnto <li> a la lista listaAmigos en la pagina web.
    });
}

function sortearAmigo() { // Esta función se encarga de realizar el sorteo y mostrar al amigo secreto
    if (amigos.length === 0) { // Comprueba si hay amigos en la lista. Si no hay, muestra una alerta y ventana de la función
        alert("No hay amigos disponibles para sortear. Agregue al menos uno"); //
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un número alatorio entre 0 y el numero de amigos en la lista. Este número se utiliza como índice para seleccionar un amigo al azar.
    const amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre del amigo que está en la posición indiceAleatorio de la lista amigos

    const resultado = document.getElementById('resultado'); // Obtiene el elemnto HTML con el id resultdo
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // Muestra el nombre del amigo sorteado en el elemnto resultado

    amigos.splice(indiceAleatorio, 1); // Elinima el amigo sortedo de la lista para que no se pueda volcer a sortear.
    actualizarLista(); // Llama a l función actualizarLista() para actualizar la lista de amigos en la página web (ya que a elimindo al amigo).
}