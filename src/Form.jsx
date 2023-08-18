import { useState } from "react"

const Form = ({onAddProfile}) => {

const [nombre, setNombre] = useState('')
const [mascota, setMascota] = useState('')
const [mensaje, setMensaje] =useState('')

function handleSubmit(e) {
    e.preventDefault()
    if (nombre.trim().length >= 3 && mascota.trim().length >= 6) {
    
        onAddProfile({nombre, mascota})
        setNombre('')
        setMascota('')
        setMensaje('')


    } else {
        setMensaje('Por favor chequea que la información sea correcta')
    }

}

    return (
        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>
            <input type="text" placeholder="Ingresa tu mascota" value={mascota} onChange={(e)=> setMascota(e.target.value)}/>
            <button type="submit">Enviar</button>
            <p>{mensaje}</p>
            

        </form>
    )

}

export default Form
