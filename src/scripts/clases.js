class Persona{
    constructor(nombre, apellido, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
    }
    obtenerDetalles(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Nombre: ${this.apellido}`);
        console.log(`Nombre: ${this.genero}`);
    }
}

class Estudiante extends Persona{
    constructor(nombre, apellido, genero, curso, grupo=[]){
        super(nombre, apellido, genero);
        this.curso = curso;
        this.grupo = grupo;
        this.anadirASuGrupo();
    }
    anadirASuGrupo(){
        this.grupo.push(this.apellido + " " + this.nombre);
    }

    anexarAgrupo(estudiante){
        this.grupo.push(estudiante["apellido"] + " " + estudiante["nombre"]);
    }

    registrar(){
        console.log('Compañeros de grupo:');
        console.log(this.grupo.join(", "));
    }
}

class Profesor extends Persona{
    constructor(nombre, apellido, genero, asignatura, comision){
        super(nombre, apellido, genero);
        this.asignatura = asignatura;
        this.comision = comision;
    }
    asignar(){
        console.log(`Asignado a la comisión de ${this.comision}`);
    }
}

//----- Pruebas -------------------
let estudiante1 = new Estudiante("Juan", "Perez", "V", "Geología");
let estudiante2 = new Estudiante("Liliana", "Barros Gershani", "M", "Geología");
let estudiante3 = new Estudiante("Julian", "Miranda", "F", "Geología");
//estudiante1.anexarAgrupo(estudiante1);
estudiante1.anexarAgrupo(estudiante2);
estudiante1.anexarAgrupo(estudiante3);
estudiante2.anexarAgrupo(estudiante1);
//estudiante2.anexarAgrupo(estudiante2);
estudiante2.anexarAgrupo(estudiante3);
estudiante3.anexarAgrupo(estudiante1);
estudiante3.anexarAgrupo(estudiante2);
//estudiante3.anexarAgrupo(estudiante3);
estudiante1.obtenerDetalles();
estudiante1.registrar();