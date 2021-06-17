
export const Funciones = () => {
    
    const sumar = (a: number, b: number ):number[] => {  //simbolizan el tipo de retorno osea en esta funcion tiene que retornar un arreglo de puros numeros
        //dentro de los parentesis poner de que tipado es cada argumento en este caso de number
        return [a, b];
    }
    
    return (
        <>
          <h3>FUNCIONES</h3>  
          <span>El resultado es: { sumar(1, 2).join(', ') } </span>
        </>
    )
}
