import PropTypes from 'prop-types';

// import { Fragment } from "react";

const newMessage = {
    name: 'Diego',
    edad: 20
};

const person = {
    name: 'Rodrigo',
    edad: 15
}

const numbers = [1,2,3,4,5,6,7,8,9];

const getSaludo = (a, b) => { //Mientras estas funciones no dependan de nada van afuera
    return a+b;
}

export const FirstApp = ( {title, subtitle, nombre} ) => {

    

    const name = 'Diego Pacori'; // si el name es usado por una funcion, estas se deben crear aqui

    return (

        <>
            <h1>{ title }</h1>
            <p> { subtitle } </p>
            <p> { nombre } </p>
        </>
        //Cabe resaltar que siempre se espera un nodo padre

        // Usando Fragmentos (Forma antigua)
        // <Fragment>
        //     <h1>Diego Pacori: Primer Componente en React</h1>
        //     <p>Hola soy un Cacahuate</p>
        // </Fragment>        

        //Forma moderna (sin importa el Fragment) usando un agrupador
        // <>
        //     <h1>{ props.title }</h1>
        //     <h1>{ getSaludo(10, newMessage.name) }</h1>
        //     <p>Hola soy un Cacahuate</p>
        // </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: "No se ha enviado ningun titulo",
    subtitle: "No hay subtitulos manos",
    nombre: "Diego Pacori"
}