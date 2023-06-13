import { useEffect} from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, password, email} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario con un Custom Hook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="noleas@outlook.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="contrasena"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        </>
    )
}
