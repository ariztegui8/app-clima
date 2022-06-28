import useClima from "../hooks/useClima"


const Resultado = () => {

    const {resultado} = useClima()
    const {name, main} = resultado
    const kelvin = 273.15

  return (
    <div className="resultado">
        <h3 className="text-center mb-3">Clima de <span className="result-color">{name}</span></h3>

        <p className="text-center fs-1 result-color">{parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
        <div className="d-flex justify-content-evenly">
            <p className="fw-bold fs-5">Mín: <span className="result-color"> {parseInt(main.temp_min - kelvin)} &#x2103;</span></p>
            <p className="fw-bold fs-5">Máx: <span className="result-color"> {parseInt(main.temp_max - kelvin)} &#x2103;</span></p>
        </div>
        
       
    </div>
  )
}

export default Resultado