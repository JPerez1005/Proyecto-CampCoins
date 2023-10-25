const d=document;

function agregar_estudiante_toggle()
{
    const modal_agregar=d.getElementById('agregar_estudiante');
    modal_agregar.classList.toggle('active');
}

function agregar_campcoins_toggle()
{
    const modal_agregar=d.getElementById('agregar_campcoins');
    modal_agregar.classList.toggle('active');
}

function ver_estudiantes_toggle()
{
    const modal_agregar=d.getElementById('ver_estudiantes');
    modal_agregar.classList.toggle('active');
}

function ver_conceptos_toggle()
{
    const modal_ver=d.getElementById('ver_conceptos');
    modal_ver.classList.toggle('active');
}

export {d,agregar_estudiante_toggle,agregar_campcoins_toggle,ver_estudiantes_toggle,ver_conceptos_toggle};