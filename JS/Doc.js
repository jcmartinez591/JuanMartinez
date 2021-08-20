const producto=
{
    nombre:"Monitor 20 Pulgadas",
    precio:300,
    disponible:true
}

const {nombre}=producto;

console.log(nombre);

///Destructuring con arreglos

const numeros =[10,20,30,40,50,60];

const [primero]=numeros;
console.log(primero);
