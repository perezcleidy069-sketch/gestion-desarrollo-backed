class Vacante{
    constructor(titulo_cargo, experiencia_minima_requerida, estado){
        this.titulo_cargo=titulo_cargo;
        this.experiencia_minima_requerida=experiencia_minima_requerida;
        this.estado=estado
    }
    obtenerDatos(){
        return{
            titulo_cargo:this.titulo_cargo,
            experiencia_minima_requerida:this.experiencia_minima_requerida,
            estado:this.estado
        }
    }

}

export default Vacante;
