const activo = true;

// let mensaje = '';

// if(!activo) {
//     mensaje = 'Activo';
// }else {
//     mensaje = 'Inactivo';
// }

// Forma con el operador ternario
// const mensaje = (activo) ? 'Activo' : 'Inactivo';

// Pero cuando solo queremos evaluar una condicion (si es verdadero realiza algo sino no hagas nada)
// Usamos el &&

let mensaje = !activo && 'Activo';
console.log(mensaje);