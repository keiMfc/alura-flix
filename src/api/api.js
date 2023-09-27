import axios from "axios";

const baseURL = 'https://archivos-iniciales-json.vercel.app/';

const api = axios.create({
  baseURL: baseURL,
});

export const getData = async (url, setData) => {
    try {
        const respuesta = await api.get(`${baseURL}${url}`)
        setData(respuesta.data)
    } catch (error) {
        alert('Error al consultar los datos: ' + error.message); 
    }
}

export const postData = async (url, datos) => {
    try {
        const respuesta = await api.post(url, datos); 
        alert('Datos actualizados correctamente');
        console.log('Respuesta del servidor:', respuesta.data); 
    } catch (error) {
        alert('Error al actualizar los datos: ' + error.message); 
    }
}

export const uploadData = async (url, datos) => {
    try {
        const respuesta = await api.put(url, datos); 
        alert('Datos actualizados correctamente');
        console.log('Respuesta del servidor:', respuesta.data);
    } catch (error) {
        alert('Error al actualizar los datos: ' + error.message);
    }
}

export const deleteData = async (id) => {
    try {
        const respuesta = await axios.delete(`${baseURL}${id}`)
        console.log(`${baseURL}${id}`)
        // alert('Los datos se han eliminado!',respuesta,`${baseURL}${id}`)
    } catch (error) {
        alert('Error al eliminar los datos')
    }
}
s