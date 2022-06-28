import axios from "axios"
import { createContext, useState } from "react"

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {


    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    });

    const [cargando, setCargando] = useState(false);

    const [resultado, setResultado] = useState({});
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarClima = async datos =>{
        setCargando(true)
        setNoResultado(false)
       try {
        const {ciudad, pais} = datos
        const key = 'f4f937429920d972edf0eb874155f903';
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`;
        const {data} = await axios(url)
        
        const {lat, lon} = data[0]
        const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
        const {data : clima} = await axios(urlClima)
        setResultado(clima);

       } catch (error) {
            setNoResultado('No hay Resultados')
       } finally{
        setCargando(false)
       }
    }

  return (
    <ClimaContext.Provider
        value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            cargando,
            noResultado
        }}
    >
        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
}

export default ClimaContext