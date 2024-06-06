import models from '../models/calificaciones.model.js'

const getCalificaciones = async () => {
    const calificaciones = await models.getCalificaciones()
    return calificaciones
}

const getCalificacionesById= async (id)=>{
    const calificacionesById= await models.getCalificacionesById(id)
    
    return calificacionesById
    }

const postCalificaciones = async (calNueva) => {
    const calificaciones = await models.postCalificaciones(calNueva)
    return calificaciones
}
export default {
    getCalificaciones,
    postCalificaciones,
    getCalificacionesById
}