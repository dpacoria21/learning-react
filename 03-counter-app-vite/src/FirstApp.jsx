import { Fragment } from "react";

export const FirstApp = () => {
    return (
        //Cabe resaltar que siempre se espera un nodo padre

        // Usando Fragmentos (Forma antigua)
        // <Fragment>
        //     <h1>Diego Pacori: Primer Componente en React</h1>
        //     <p>Hola soy un Cacahuate</p>
        // </Fragment>        

        //Forma moderna (sin importa el Fragment) usando un agrupador
        <>
            <h1>Diego Pacori: Primer Componente en React</h1>
            <p>Hola soy un Cacahuate</p>
        </>
    );
}