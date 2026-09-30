class Postulacion{
    constructor(id_candidato, id_vacante, fuente_Postulacion, puntaje, prioridad, estado, fecha_creacion, fecha_actualizada){
        this.id_candidato=id_candidato;
        this.id_vacante=id_vacante;
        this.fuente_Postulacion=fuente_Postulacion;
        this.puntaje=puntaje;
        this.prioridad=prioridad;
        this.estado=estado;
        this.fecha_creacion=fecha_creacion;
        this.fecha_actualizada=fecha_actualizada;
    }

    obtenerDatos(){
        return{
            id_candidato:this.id_candidato,
            id_vacante:this.id_candidato,
            fuente_Postulacion:this.fuente_Postulacion,
            puntaje:this.puntaje,
            prioridad:this.prioridad,
            estado:this.estado,
            fecha_creacion:this.fecha_creacion,
            fecha_actualizada:this.fecha_actualizada

        };
    }
}

export default Postulacion;