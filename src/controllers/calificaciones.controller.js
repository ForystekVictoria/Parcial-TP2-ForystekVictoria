import service from '../services/calificaciones.services.js'

const getCalificaciones = async (req, res) => {
    const calificaciones = await service.getCalificaciones()
    res.send(calificaciones)
}

const getCalificacionesById = async (req, res) => {
    try{
        const {id} = req.params 
    const calificacionesById = await service.getCalificacionesById(id)
    res.send(calificacionesById);
    }catch (error){
        console.log("Error");
        res.send({ statusCode: 404, message: "El servidor no puede encontrar el recurso solicitado." });
    }

}


const postCalificaciones = async (req, res) => {
   
    const calificacionNueva = req.body
    const calificaciones = await service.postCalificaciones(calificacionNueva)
    res.send(calificaciones)


    
}

export default {
    
    getCalificaciones,
    postCalificaciones,
    getCalificacionesById
}