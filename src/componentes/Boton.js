import React from 'react'
import '../hojas-de-estilo/Boton.css'

function Boton(props) {

const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
};
//si el (valor) del operador no es un numero, y tampoco es un . y si no es un  = , entonces lo consideramos 
//como un operador y retornamos el valor verdadero (true), si cualquira de estos criterios es falso (false)

  return (
    <div
      className = {`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`.trimEnd()}
      onClick= {() => props.manejarClic(props.children)}>
    {props.children}
    </div>
  );
}

export default Boton;