import React, {useState} from 'react'

const Formulario = ({guardarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const [error, guardarError] = useState(false)

    const { artista, cancion} = busqueda

    //funcion a cada input para leer su congenido
    const actualizarState = e => {
        const {name,value} = e.target
        guardarBusqueda({
            ...busqueda,
             [name] : value
        })
    }

    //funcion para buscar busqueda
    const submitMusica = e => {
        e.preventDefault()

        //comporbando la validez del submit
        if(artista.trim() === '' || cancion.trim() === ''){
            guardarError(true)
            return
        }
        guardarError(false)
        //todo bien, para al componente  app
        guardarBusquedaLetra(busqueda)
    }

    return (
        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>: null}
            <div className="container">
                <div className="row">
                    
                    <form 
                    onSubmit={submitMusica}
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de letras</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label >Artista</label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="nombre artista"
                                        onChange={actualizarState}
                                        value={artista}
                                        />
                                    </div>


                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                        <label >Canción</label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="nombre canción"
                                        onChange={actualizarState}
                                        value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                            type="submit"
                            className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>


                    </form>
                </div>
            </div>
        </div>
      );
}
 
export default Formulario;