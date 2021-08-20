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

const [...tercero]=numeros;
console.log(primero);


//Metodos de Arreglos

const Carrito =
[
    {nombre1:'Monitor 27 Pulgadas', Precio1: 500},
    {nombre1:'Televisión', Precio1:100},
    {nombre1:'Tablet', Precio1: 200},
]

for (let i = 0; i <Carrito.length; I++)
{
    console.log(`${Carrito[i].nombre1}-Precio ${Carrito[1].Precio1}`);
}