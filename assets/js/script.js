let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos =[];
let gastoActual = -1;


//Esta funcion se inicia al momento de el que usuario hace click en el boton
function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;

    if (nombreGasto === '' || isNaN(valorGasto)) {
        alert('Por favor, ingrese un nombre de su gasto y valor valido');
        return;

    }

    // Verificar si el gasto es > a 150

    if (valorGasto > 150) {
        alert('Advertencia, Has registrado un monto mayor a 150 USD');

    }

    if (gastoActual === -1) {

        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);

    } else {

        listaNombresGastos[gastoActual] = nombreGasto;
        listaValoresGastos[gastoActual] = valorGasto;
        listaDescripcionesGastos[gastoActual] = descripcionGasto;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';

    }

    actualizarListaGastos();
        
}


function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = ''; 
    let totalGastos = 0; 
    listaNombresGastos.forEach((elemento,posicion) => {
        const valorGasto = Number (listaValoresGastos[posicion]);
        const descripcionGasto = listaDescripcionesGastos[posicion]; // Obtener la descripcion
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                      <br>Descripcion: ${descripcionGasto}
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    <button onclick="modificarGasto(${posicion});">Modificar</button>
                    </li>`;
        //Calculamos el total de gastos
        totalGastos += Number (valorGasto);


    });
    
    listaElementos.innerHTML = htmlLista ;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();

}

function limpiar(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value= '';

}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();


}

function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    gastoActual = posicion;
    document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';

}

function actualizarGasto(){
        
        clickBoton();

}