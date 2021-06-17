import React, {useState} from 'react'

//customHook
import { useCounter } from '../hooks/useCounter'

export const ContadorConHook = () => {

    const {valor, acumular, disminuir} = useCounter(30);

    return (
        <>
            <h3>CONTADOR CON HOOK: <small> {valor} </small> </h3>

            <button className="btn btn-primary" onClick={() => acumular(1)}>
                +1
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => disminuir(1)}>
                -1
            </button>
        </>
    )
}
