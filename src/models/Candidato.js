class Candidato{
    constructor(nombre, email, anos_experiencia){
        this.nombre=nombre;
        this.email=email;
        this.anos_experiencia=anos_experiencia

    }
    obtenerDatos(){
        return{
            nombre:this.nombre,
            email:this.email,
            anos_experiencia:this.anos_experiencia
        }
    }
}

export default Candidato;