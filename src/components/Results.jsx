import { useEffect, useState } from "react";


const Results = () => {

  const [result, setResult] = useState([]);
  
/* Usamos URLSearchParams para recuperar el index de cada cuenta */
  let query = new URLSearchParams(window.location.search);
  let index = query.get('index')

  /* Usamos useEffect para hacer el llamado a la api con fetch */
    useEffect(() => {
      const API_URL = `https://api.npoint.io/97d89162575a9d816661/cuentas/${index}`

        fetch(API_URL)
            .then(response => response.json())
            .then(data => setResult(data))
            .catch(error => console.log(error))
    }, [index])

    console.log(result)
    
  return (
    <main>
        <h3>Consulta de Saldo</h3>
        <h1>Este es tu saldo actual</h1>
        {
          result.length !== 0 ? (
          <div className="saldoCuenta">
            <h3>Saldo de la cuenta: {result.saldo} </h3>
            <h3>Tipo de cuenta: {result.tipo_letras === 'CA' ? 'Caja de ahorro' : 'Cuenta Corriente'} en {result.moneda === 'u$s' ? 'Dólares' : result.moneda === '$uy' ? 'Pesos Uruguayos' : 'Pesos'}</h3>
            <h3>Número de cuenta: {result.n}</h3>
          </div>
          ) : (
            <span>Cargando...</span>
          )
        }
    </main>
  )
}

export default Results