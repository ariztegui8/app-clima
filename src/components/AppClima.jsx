import React from 'react'
import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppClima = () => {

  const {resultado, cargando , noResultado} = useClima()

  return (
    <>
        <main className='grid container'>
            <Formulario />

            {
              cargando ? <Spinner /> :
              resultado?.name ? <Resultado /> :
              noResultado ? <h3 className='text-center'>{noResultado}</h3> :
              <h3 className='text-center'>Consulta tu Clima al Instante</h3>
            }
        </main>
    </>
  )
}

export default AppClima