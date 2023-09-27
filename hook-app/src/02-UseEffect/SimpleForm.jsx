import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "jorfonse",
        email: "jorfonse@domain.com"
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("first load");
    }, [])

    useEffect(() => {
        console.log("form changed");
    }, [formState])

    useEffect(() => {
        console.log("email changed");
    }, [email])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                name="username"
                value={ username } 
                onChange={ onInputChange }/>
            <input 
                type="text"
                className="form-control"
                placeholder="Email"
                name="email" 
                value={ email }
                onChange={ onInputChange }/>

        </>
    )
}