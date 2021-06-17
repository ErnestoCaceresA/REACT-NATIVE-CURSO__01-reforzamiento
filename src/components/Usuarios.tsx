import {useEffect, useRef, useState} from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes.interface';

export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]); //tipado el state tiene que ser un arreglo con la estructura de la interface Usuario
    
    const paginaRef = useRef(1);

    useEffect(() => {
        //llamado al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async() => {
        
        const res = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if(res.data.data.length > 0){
            setUsuarios(res.data.data);
            paginaRef.current ++;
        }else{
            alert('No hay mas registros')
        }

        setUsuarios(res.data.data)
        
    }

    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id.toString()}>
                <td>
                    <img 
                        src={usuario.avatar} 
                        alt={usuario.first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                        />
                </td>
                <td>{usuario.first_name} {usuario.last_name} </td>
                <td> {usuario.email} </td>
            </tr>
        )
    }

    return (
        <>
            <h3>USUARIOS AXIOS</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={ cargarUsuarios }>
                Siguiente
            </button>
            <br /><br />
        </>
    )
}
