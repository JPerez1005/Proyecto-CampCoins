let listaDePersonas = JSON.parse(localStorage.getItem('personas')) || [];
let listaDeConceptos = JSON.parse(localStorage.getItem('conceptos')) || [];
const d=document;

class Persona {
    constructor(id, nombre, telefono, correo, grupo, campcoins_acumulados) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.grupo = grupo;
        this.campcoins_acumulados = campcoins_acumulados;
    }

    // Método para crear una nueva persona
    static crearPersona(id, nombre, telefono, correo, grupo) {
        const nuevaPersona = new Persona(id, nombre, telefono, correo, grupo);
        // Agregar la nueva persona a una lista de personas (puedes usar un array).
        listaDePersonas.push(nuevaPersona);
        alert('persona creada');
        localStorage.setItem('personas',JSON.stringify(listaDePersonas));
    }

    // Método para leer (obtener) una persona por su ID
    static obtenerPersonaPorId(id) {
        return listaDePersonas.find((persona) => persona.id === id);
    }

    // Método para actualizar los datos de una persona
    actualizarPersona(nombre, telefono, correo, grupo) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.grupo = grupo;
        localStorage.setItem('personas',JSON.stringify(listaDePersonas));
    }

    // Método para eliminar una persona por su ID
    static eliminarPersona(id) {
        const index = listaDePersonas.findIndex((persona) => persona.id === id);
        if (index !== -1) {
            listaDePersonas.splice(index, 1);
            localStorage.setItem('personas', JSON.stringify(listaDePersonas));
            alert('se eliminó');
        }
    }

    /* static comprarMascota(mascota)
    {
        let id=prompt('digite el id del usuario que va a comprar la mascota: ');
        let usuarioEncontrado = false;

        for (let i = 0; i < listaDePersonas.length; i++) {
            const persona = listaDePersonas[i];
            if (id == persona.id) {
                usuarioEncontrado = true;
                persona.campcoins_acumulados.push(mascota);
                localStorage.setItem('personas', JSON.stringify(listaDePersonas));
            }
        }
        if (usuarioEncontrado==false) {
            alert('no se encontró el usuario');
        }
    } */

    static agregarCampcoins(conceptoValor)
    {
        let id=prompt('digite el id del estudiante al que se le asignaran puntos: ');
        let usuarioEncontrado = false;

        for (let i = 0; i < listaDePersonas.length; i++) {
            const persona = listaDePersonas[i];
            if (id == persona.id) {
                usuarioEncontrado = true;
                let puntosEstudiante = parseFloat(persona.campcoins_acumulados);
                let puntosAsignados = parseFloat(conceptoValor.puntos);

                if (!isNaN(puntosEstudiante) && !isNaN(puntosAsignados)) {
                    persona.campcoins_acumulados = puntosEstudiante + puntosAsignados;
                    console.log(persona.campcoins_acumulados);
                } else {
                    alert('Error al sumar puntos: los valores no son numéricos.');
                }
                localStorage.setItem('personas', JSON.stringify(listaDePersonas));
            }
        }
        if (usuarioEncontrado==false) {
            alert('no se encontró el usuario');
        }
    }

    /* static comprarJuego(juego) {
        let idUser = prompt('Digite el id del usuario que va a comprar el juego:');
        console.log(idUser);
        let usuarioEncontrado = false; // Variable para rastrear si se encontró el usuario
    
        for (let i = 0; i < listaDePersonas.length; i++) {
            const persona = listaDePersonas[i];
            if (idUser == persona.id) {
                usuarioEncontrado = true;
                persona.videojuegos.push(juego);
                let puntospersona = parseFloat(persona.puntos);
                let puntosJuego = parseFloat(juego.puntosFidelizacion);

                if (!isNaN(puntospersona) && !isNaN(puntosJuego)) {
                    persona.puntos = puntospersona + puntosJuego;
                    console.log(persona.puntos);
                } else {
                    alert('Error al sumar puntos: los valores no son numéricos.');
                }
                localStorage.setItem('personas', JSON.stringify(listaDePersonas));
            }
        }
    
        if (!usuarioEncontrado) {
            alert('No se encontró el usuario');
        }
    } */
}

class Concepto {
    constructor(id,concepto,puntos)
    {
        this.id=id;
        this.concepto=concepto;
        this.puntos=puntos;
    }

    static crearConcepto(id,concepto,puntos) {
        const nuevoConcepto = new Concepto(id,concepto,puntos);
        // Agregar la nueva persona a una lista de personas (puedes usar un array).
        listaDeConceptos.push(nuevoConcepto);
        alert('concepto creado');
        localStorage.setItem('conceptos',JSON.stringify(listaDeConceptos));
    }

    static obtenerConceptoPorId(id) {
        return listaDeConceptos.find((concepto) => concepto.id === id);
    }

    actualizarConcepto(concepto,puntos) {
        this.concepto=concepto;
        this.puntos=puntos;
    }

    static eliminarConcepto(id) {
        const index = listaDeConceptos.findIndex((concepto) => concepto.id === id);
        if (index !== -1) {
            listaDeConceptos.splice(index, 1);
            localStorage.setItem('conceptos', JSON.stringify(listaDeConceptos));
        }
    }
}

function agregarPersonas()
{
    let estudianteId=d.getElementById('estudianteId').value,
        estudianteNombre=d.getElementById('estudianteNombre').value,
        estudianteTelefono=d.getElementById('estudianteTelefono').value,
        estudianteCorreo=d.getElementById('estudianteCorreo').value,
        estudianteGrupo=d.getElementById('estudianteGrupo').value;
    
    Persona.crearPersona(estudianteId, estudianteNombre, estudianteTelefono, estudianteCorreo, estudianteGrupo);
    d.getElementById('estudianteId').value='';
    d.getElementById('estudianteNombre').value='';
    d.getElementById('estudianteTelefono').value='';
    d.getElementById('estudianteCorreo').value='';
    d.getElementById('estudianteGrupo').value='';
    /* mostrarPersonas(); */
}

function modificarPersonas()
{
    let estudianteId=d.getElementById('estudianteId').value,
        estudianteNombre=d.getElementById('estudianteNombre').value,
        estudianteTelefono=d.getElementById('estudianteTelefono').value,
        estudianteCorreo=d.getElementById('estudianteCorreo').value,
        estudianteGrupo=d.getElementById('estudianteGrupo').value,
        encontrado=false;
    
    for (let i = 0; i < listaDePersonas.length; i++) {
        const persona = listaDePersonas[i];
        if (persona.id==estudianteId) {
            encontrado=true;
            persona.nombre=estudianteNombre;
            persona.telefono=estudianteTelefono;
            persona.correo=estudianteCorreo;
            persona.grupo=estudianteGrupo;
            alert('estudiante modificado');
            d.getElementById('estudianteId').value='';
            d.getElementById('estudianteNombre').value='';
            d.getElementById('estudianteTelefono').value='';
            d.getElementById('estudianteCorreo').value='';
            d.getElementById('estudianteGrupo').value='';
        }
    }
    if (encontrado==false) {
        alert('no se encontró');
    }
}

function agregarConcepto()
{
    let total,
        concepto=d.getElementById('concepto').value,
        puntos=d.getElementById('puntos').value,
        eleccion=d.getElementById('eleccion_puntos').value,
        idConcepto=d.getElementById('idConcepto').value;
    if (eleccion==='quitar') {
        total=(-puntos);
    }else{
        total=puntos;
    }
    Concepto.crearConcepto(idConcepto,concepto,total);
    d.getElementById('concepto').value='';
    d.getElementById('puntos').value='';
}

function modificarConcepto()
{
    let total,
        nuevoconcepto=d.getElementById('concepto').value,
        nuevospuntos=d.getElementById('puntos').value,
        eleccion=d.getElementById('eleccion_puntos').value,
        idConcepto=d.getElementById('idConcepto').value,
        encontrado=false;
    if (eleccion==='quitar') {
        total=(-puntos);
    }else{
        total=puntos;
    }
    for (let i = 0; i < listaDeConceptos.length; i++) {
        const concepto = listaDeConceptos[i];
        if (concepto.id==idConcepto) {
            encontrado=true;
            concepto.concepto=nuevoconcepto;
            concepto.puntos=nuevospuntos;
            alert('concepto modificado');
            d.getElementById('concepto').value='';
            d.getElementById('puntos').value='';
        }
    }
    if (encontrado==false) {
        alert('no se encontró');
    }
}

function mostrarPersonas()
{
    let lista_estudiantes=d.getElementById('lista_estudiantes');

    let buscarId=d.getElementById('buscarId').value;
    let encontrado=false;
    for (let i = 0; i < listaDePersonas.length; i++) {
        const persona = listaDePersonas[i];
        if (parseFloat(persona.id) == buscarId) {
            encontrado=true;
            let datos=`
                <h1>${persona.id}</h1>
                <h2>${persona.nombre}</h2>
                <p>${persona.telefono}</p>
                <p>Correo: ${persona.correo}</p>
                <p>Grupo: ${persona.grupo}</p>
                <br><br>
                <h3>Puntos: ${persona.campcoins_acumulados}</h3>
                <br>
                <br>
                <div class="btns">
                    <button id="eliminarpersona">Eliminar</button>
                </div>
            `;
            /* tablapersonas.style.visibility='visible'; */
            lista_estudiantes.innerHTML=datos;
            break;
        }
    }
    if(encontrado==false)
    {
        alert('no se encontró')
    }
    /* Eliminar estudiantes de la lista */
    const eliminarpersonas = d.getElementById('eliminarpersona');
    eliminarpersonas.addEventListener('click',()=>{
        let buscarId=d.getElementById('buscarId').value;
        Persona.eliminarPersona(buscarId);
        lista_estudiantes.innerHTML='';
    });
}

function mostrarConceptos()
{
    let lista_conceptos=d.getElementById('lista_conceptos');

    let buscar_id_concepto=d.getElementById('buscar_id_concepto').value;
    let encontrado=false;
    for (let i = 0; i < listaDeConceptos.length; i++) {
        const concepto = listaDeConceptos[i];
        if (parseFloat(concepto.id) == buscar_id_concepto) {
            encontrado=true;
            let datos=`
                <h1>${concepto.id}</h1>
                <h2>${concepto.concepto}</h2>
                <br><br>
                <h3>Puntos: ${concepto.puntos}</h3>
                <br>
            `
            let datos5=`
            <br>
            <button class="btn" id="eliminarconcepto">Eliminar</button>
            `;
            /* tablapersonas.style.visibility='visible'; */
            lista_conceptos.innerHTML=datos+datos5;
            break;
        }
    }
    if(encontrado==false)
    {
        alert('no se encontró')
    }
    /* const eliminarpersonas = d.getElementById('eliminarpersona');
    eliminarpersonas.addEventListener('click',()=>{
        let buscarId=d.getElementById('buscarId').value;
        persona.eliminarpersona(listaDePersonas,buscarId);
        tablapersonas.style.visibility='hidden';
    }); */
}

export {agregarPersonas,agregarConcepto,mostrarPersonas,mostrarConceptos,modificarPersonas,modificarConcepto}