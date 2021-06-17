
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}
interface Direccion {
    pais: string,
    casaNo: number
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Ernesto',
        edad: 20,
        direccion: {
            pais: 'Canada',
            casaNo: 615
        }
    }


    return (
        <>
            <h3>OBJETOS LITERALES</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
