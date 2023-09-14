class Persona{
    constructor(nombre, apellido, genero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.genero = genero;
    }
    obtenerDetalles(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Género: ${this.genero}`);
    }
}

class Estudiante extends Persona{
    curso;
    grupo = [];
    constructor(nombre, apellido, genero, curso){
        super(nombre, apellido, genero);
        this.curso = curso;
        this.anadirASuGrupo();
    }
    anadirASuGrupo(){
        this.grupo.push(this.apellido + " " + this.nombre);
    }

    anexarAGrupo(estudiante){
        this.grupo.push(estudiante["apellido"] + " " + estudiante["nombre"]);
    }

    registrar(){
        console.log('Compañeros de grupo:');
        console.log(this.grupo.join(", "));
    }
}

class Profesor extends Persona{
    asignatura;
    comision = [];
    constructor(nombre, apellido, genero, asignatura){
        super(nombre, apellido, genero);
        this.asignatura = asignatura;
    }
    asignar(comision){
        this.comision = comision;
        
        console.log('Asignado a comisión');
        console.log('Miembros:');
        for(let miembro of comision){
            console.log(miembro);
        }
    }
}

//----- Pruebas -------------------
let estudiante1 = new Estudiante("Juan", "Perez", "V", "Geología");
let estudiante2 = new Estudiante("Liliana", "Barros Gershani", "M", "Geología");
let estudiante3 = new Estudiante("Julian", "Miranda", "F", "Geología");
//estudiante1.anexarAgrupo(estudiante1);
estudiante1.anexarAGrupo(estudiante2);
estudiante1.anexarAGrupo(estudiante3);
estudiante2.anexarAGrupo(estudiante1);
//estudiante2.anexarAgrupo(estudiante2);
estudiante2.anexarAGrupo(estudiante3);
estudiante3.anexarAGrupo(estudiante1);
estudiante3.anexarAGrupo(estudiante2);
//estudiante3.anexarAgrupo(estudiante3);
estudiante1.obtenerDetalles();
estudiante1.registrar();

console.log('\n');

let profesor1 = new Profesor("Nahomi", "Lucero", "M", "Geología");
let profesor2 = new Profesor("Roberto", "Ramos", "V", "Redes de Comunicación");
let profesor3 = new Profesor("Veronica", "Juarez", "M", "Gestión de Repositorios");

let comision1 = [profesor2.apellido + " " + profesor2.nombre, profesor3.apellido + " " + profesor3.nombre];

profesor2.asignar(comision1);