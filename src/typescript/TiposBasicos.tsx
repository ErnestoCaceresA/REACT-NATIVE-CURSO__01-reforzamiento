
export const TiposBasicos = () => {

    // let nombre: string | number = 'Ernesto'; //nombre puede ser string o number 
    let nombre = 'Ernesto' //en este caso ts por defecto tipea la variable nombre como tipo string sin nosotros tener que especificarlo
    const edad: number = 35;
    let estaActivo:boolean = true
    
    const poderes: string[] = [];  //un arreglo que solo permita valores de tipo string, no permitira insertar booleanos o numeros o eso
    const superpoderes: any[] = []; //un arreglo que permite cualquier tipo de datos

    return (
        <>
          <h3>TIPOS BASICOS</h3>  
          { nombre }, { edad }, { (estaActivo) ? 'activo' : 'no activo' }
          <br />
          {poderes.join(', ') }
        </>
    )
}
