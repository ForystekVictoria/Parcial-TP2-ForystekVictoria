const calificaciones= [
    {
      "id": 1,
      "nombre": "Sofía García",
      "nota": 10
    },
    {
      "id": 2,
      "nombre": "Mateo Rodríguez",
      "nota": 9
    },
    {
      "id": 3,
      "nombre": "Valentina Martínez",
      "nota": 8
    }
  ]

  const getCalificaciones = async () => {
    return calificaciones
  }

  const getCalificacionesById= async (id)=>{
     const calificacion = calificaciones.find((e) => e.id == id);
       
       const mensajeEnviar= `¡Hola ${calificacion.nombre} ! tu nota es : ${calificacion.nota}`

     console.log(mensajeEnviar)
        return mensajeEnviar 

    }
  
  const postCalificaciones = async (nuevaCal) => {
    if(nuevaCal.nota < 1 || nuevaCal.nota >10){
        throw new Error("la calificacion debe estar en un rango de 1 a 10")

    }else{
        nuevaCal.id = calificaciones.length + 1;

    await calificaciones.push(nuevaCal) 
    return nuevaCal
    }
    
  }






export default {
    getCalificaciones,
    postCalificaciones,
    getCalificacionesById
    
    
}