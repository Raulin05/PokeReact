import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const Pokemon = (props) => {
    const [nivel, setNivel] = useState(1);
    const [nombre, setNombre] = useState("");
    const [imgFrontUrl, setImgFrontUrl] = useState();
    const [imgBackUrl, setImgBackUrl] = useState();
    const [baseHp, setbaseHp] = useState();
    const [baseAttack, setbaseAtack] = useState();
    const [baseDefense, setbaseDefense] = useState();

    const params = useParams();

    const ID = params.id;

    useEffect(() => {
        //la sinxtaxis moderna async-await
        axios.get("https://pokeapi.co/api/v2/pokemon/" + ID).then(response => {
            setNombre(response.data.name);
            setImgBackUrl(response.data.sprites.back_default);
            setImgFrontUrl(response.data.sprites.front_default);
            setbaseHp(getStat("hp", response.data.stats));
            setbaseAtack(getStat("attack", response.data.stats));
            setbaseDefense(getStat("defense", response.data.stats));
        })
    }, []);

    function getStat(nombreStat, arrayStats) {
        const filteredArray = arrayStats.filter(s => s.stat.name === nombreStat)
        if (filteredArray.length === 0) {
            return -1
        }
        return filteredArray[0].base_stat;
    }

    const onSubirNivel = (event) => {
        setNivel(n => n + 1)
    }

    const onBajarNivel = (event) => {
        setNivel(n => n - 1)
    }

    const calcularHP = () => {
        return baseHp + (nivel * 3)
    }

    const calcularAtaque = () => {
        return baseAttack + (nivel * 2)
    }

    const calcularDefensa = () => {
        return baseDefense + (nivel * 2)
    }

    return <div>
        <h1>{nombre}</h1>
        <img src={imgBackUrl}></img>
        <img src={imgFrontUrl}></img>
        <h2>Nivel: {nivel} </h2>
        <button onClick={onSubirNivel}>Subir Nivel</button>
        <button onClick={onBajarNivel}>Bajar Nivel</button>
        <p>HP: {calcularHP()} </p>
        <p>Ataque: {calcularAtaque()}</p>
        <p>Defensa: {calcularDefensa()}</p>
    </div>

}

export default Pokemon;   