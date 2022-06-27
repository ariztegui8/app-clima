import React from 'react'
import useClima from '../hooks/useClima'

const Formulario = () => {

    const {busqueda, datosBusqueda} = useClima()
    const {ciudad, pais} = busqueda;

  return (
    <div className='formulario'>
        <form>
            <div>
                <label htmlFor='cuidad' className='fw-bold'>Cuidad</label>
                <input 
                    type="text"
                    id='ciudad'
                    name='ciudad'
                    className='w-100 mb-3 p-1 outline'
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>

            <div>
                <label htmlFor='pais' className='fw-bold'>Pais</label>
                <select
                    id='pais'
                    name='pais'
                    className='w-100 mb-3 p-1 text-center outline'
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">--Seleccione un Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input 
                type='submit'
                value='Consultar Clima'
                className='w-100 mt-2 p-1 fw-bold btn-submit'
            />
        </form>
    </div>
  )
}

export default Formulario