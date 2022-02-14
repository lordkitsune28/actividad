import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {fileUpload} from '../helpers/fileUpload';
import '../styles/Form.css';

export const Form = () => {

    const [anime, setAnime] = useState({
        nombre: '',
        generos: '',
        link: '',
        cap: '',
        imagen: ''
    })

    const {nombre,generos,link,cap,imagen} = anime;

    const postData = () => {
         axios.post(url,anime)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setAnime({
          ...anime,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            anime.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 
    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Añade tu anime a favoritos</h2>
           <hr/>
               <div>
                   <label>Nombre del anime</label>
                   <input id="inputNombre" name="nombre" value={nombre} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Generos</label>
                   <input id="inputGenero" type="text" name="generos" value={generos} onChange={handleChanged}/>
               </div>
               <div>
                   <label>link de descarga</label>
                   <input id="inputlink" name="link" value={link} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Cantidad de Capitulos</label>
                   <input id="inputCap" type="number" name="cap" value={cap} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
