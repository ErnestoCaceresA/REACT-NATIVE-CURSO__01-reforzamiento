import { useReducer, useEffect } from 'react'

//interface que va a usar el initialState y el authReducer (a diferencia del type este se puede expander y asi)
interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

type LoginPayload = {
    username: string,
    nombre: string;
}

type AuthAction =  //el authAction puede ser o uno u otro 
    | { type: 'logout' }
    | {type: 'login' , payload: LoginPayload} 

//initial state (estado inicial)
const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//Reducer (tiene que retornar el initialState modificado)
const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        case 'login':
            return{
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }

        default:
            return state;
    }

}


export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])

    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                nombre: 'Ernesto',
                username: 'Strider'
            } 
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout',
        })
    }

    if (validando) {
        return (
            <>
                <h3>LOGIN</h3>
                <div className='alert alert-info'>
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>LOGIN</h3>

            {
                (token)
                    ? <div className='alert alert-success'>Autenticado como: {nombre} </div>
                    : <div className='alert alert-danger'>No autenticado</div>
            }

            {
                (token)
                    ? (
                        <button className="btn btn-danger" onClick={logout}>
                            Logout
                        </button>
                    )
                    :(
                        <button className="btn btn-primary" onClick={login}>
                            Login
                        </button>
                    )
            }

           

            
        </>
    )
}
