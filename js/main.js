import { d,agregar_estudiante_toggle,agregar_campcoins_toggle,ver_estudiantes_toggle,ver_conceptos_toggle } from "./funcionalidades.js";
import { agregarPersonas,agregarConcepto,mostrarPersonas,mostrarConceptos,modificarPersonas } from "./estudiantes.js";

/* funcionalidades */

let abrir_modal_estudiante=d.getElementById('agregar_estudiante_btn'),
    cerrar_modal_estudiante=d.getElementById('close_estudiante'),
    abrir_modal_campcoins=d.getElementById('abrir_campcoins'),
    cerar_modal_campcoins=d.getElementById('cerrar_campcoins'),
    gestion_estudiantes=d.getElementById('gestion_estudiantes'),
    gestion_conceptos=d.getElementById('gestion_conceptos'),
    no_ver_estudiantes=d.getElementById('no_ver_estudiantes'),
    no_ver_conceptos=d.getElementById('no_ver_conceptos');

/* let agregar_estudiante_btn=d.querySelectorAll('.agregar_estudiante_btn'); */

abrir_modal_estudiante.addEventListener('click',agregar_estudiante_toggle);
cerrar_modal_estudiante.addEventListener('click',agregar_estudiante_toggle);
abrir_modal_campcoins.addEventListener('click',agregar_campcoins_toggle);
cerar_modal_campcoins.addEventListener('click',agregar_campcoins_toggle);
gestion_estudiantes.addEventListener('click',ver_estudiantes_toggle);
no_ver_estudiantes.addEventListener('click',ver_estudiantes_toggle);
gestion_conceptos.addEventListener('click',ver_conceptos_toggle);
no_ver_conceptos.addEventListener('click',ver_conceptos_toggle);

/* Estudiantes */
let crear_estudiante=d.getElementById('crear_estudiante'),
mostrar_personas=d.getElementById('buscar_estudiante'),
modificar_estudiante=d.getElementById('modificar_estudiante');

crear_estudiante.addEventListener('click',agregarPersonas);
mostrar_personas.addEventListener('click',mostrarPersonas);

/* Conceptos */
let agregar_concepto=d.getElementById('agregar_concepto'),
mostrar_conceptos=d.getElementById('buscar_concepto');

agregar_concepto.addEventListener('click',agregarConcepto);
mostrar_conceptos.addEventListener('click',mostrarConceptos);