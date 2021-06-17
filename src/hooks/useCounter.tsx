import {useState} from 'react'

export const useCounter = (inicial:number = 10 ) => {
    
    const [valor, setValor] = useState(inicial);

    const acumular = (numero:number) => {
        setValor(valor + numero);
    }

    const disminuir = (numero:number) => {
        setValor(valor - numero);
    }

    return {
        valor, //valor: valor
        acumular, //acumular: acumular
        disminuir //disminuir: disminuir
    }
}
