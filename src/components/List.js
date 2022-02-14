import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {url} from '../helpers/url';
import '../styles/List.css';

export const List = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
         axios.delete(url+id)
         .then(response => {
             getData();
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    console.log(registro)
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Nombre del Anime</th>
                    <th>Genero</th>
                    <th>link de descarga</th>
                    <th>Cantidad de Capitulos</th>
                    <th>Imagen</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(r => (
                             <tr key={r.id}>
                                 <td>{r.nombre}</td>
                                 <td>{r.generos}</td>
                                 <td>{r.link}</td>
                                 <td>{r.cap}</td>
                                 <td><img src={r.imagen} width="40" height="50" alt=""/></td>
                                 <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
