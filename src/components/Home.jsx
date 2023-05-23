import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

/* Componente Home, en donde estan los resultados de la api */
const Home = () => {


    const API_URL = 'https://api.npoint.io/97d89162575a9d816661'

    useEffect(() => {
        /* Usamos useEffect para hacer el llamado a la api con fetch */
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setCuentas(data.cuentas)) /* Seteamos la respuesta en un estado */
        .catch(error => console.log(error))
    }, [])
    
    const [cuentas, setCuentas] = useState([])
    /* Atraves de este estado vamos a mostrar los resultados en la Home */
    const [indiceInicial, setIndiceInicial] = useState(0);
    const [indiceFinal, setIndiceFinal] = useState(indiceInicial + 5);

    const mostrarSiguientesRespuestas = () => {
        const nuevoIndiceInicial = indiceInicial + 5;
        {indiceInicial > 4 ?  setIndiceInicial(nuevoIndiceInicial - 1) : setIndiceInicial(nuevoIndiceInicial)}
        setIndiceFinal(nuevoIndiceInicial + 4);
    };
    /* Usamos 2 funciones, una para mostrar los resultados anteriores y otra para mostrar los siguientes resultados */
    const mostrarRespuestasAnteriores = () => {
        const nuevoIndiceInicial = Math.max(indiceInicial - 5, 0);
        {indiceInicial>5 ? setIndiceInicial(nuevoIndiceInicial + 1): setIndiceInicial(nuevoIndiceInicial)}
        setIndiceFinal(nuevoIndiceInicial + 5)
    };
    
return (
    <main>
        <h3>Consulta de Saldo</h3>
        <h1>Selecciona la Cuenta a Consultar</h1>
        <div className="cuentas">

        {indiceInicial>3 &&
            <div className="cuenta" onClick={mostrarRespuestasAnteriores}>
                <h2>⬅️ Opciones anteriores</h2>
            </div>
        }
            {cuentas.map((cuenta, index) => (
                <Link className="cuenta" key={index} to={`/results?index=${index}`}>
                    <h2>{
                        cuenta.tipo_letras === 'CA' ? 'Caja de ahorro' : 'Cuenta Corriente'}
                    </h2>
                    <h2>Nro: {cuenta.n}</h2>
                </Link>
            )).slice(indiceInicial, indiceFinal)}

            {indiceInicial<8 &&    
                <div className="cuenta" onClick={mostrarSiguientesRespuestas}>
                    <h2>Más opciones ➡️</h2>
                </div>
            }
        </div>
    </main>
)
}

export default Home