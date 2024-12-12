import { useState } from "react"

const Pokemon = (props) => {
    const[nivel,setNivel]=useState(1);

    const onSubirNivel = (event) => {
        setNivel( n => n + 1 )
    }

    const onBajarNivel = (event) => {
        setNivel( n => n - 1 )
    }

    const calcularHP = () => {
        return 70 + (nivel*3)
    }

    const calcularAtaque = () => {
        return 90 + (nivel*2)
    }

    const calcularDefensa = () => {
        return 90 + (nivel*2)
    }

    return <div>
        <h1>Darkrai</h1>
        <h2>Nivel: {nivel} </h2>
        <button onClick={ onSubirNivel}>Subir Nivel</button>
        <button onClick={ onBajarNivel}>Bajar Nivel</button>
        <p>HP: { calcularHP(70)} </p>
        <p>Ataque: { calcularAtaque(90)}</p>
        <p>Defensa: { calcularDefensa(90)}</p>
    </div>

}

export default Pokemon;