interface Reproductor{
    volumne:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}
interface Detalles{
    autor:string;
    year:number;

}
const reproductor:Reproductor={
    volumne:50,
    segundo:10,
    cancion:"valiente",
    detalles:{
        autor:"paty cantu",
        year:2018
    }

}
/*
console.log(`El Volume actual es: ${reproductor.volumne}`);
console.log(`Lo segundo son : ${reproductor.segundo}`);
console.log(`La cancion es  : ${reproductor.cancion}`);
console.log(`El cantante es : ${reproductor.detalles.autor}`);
console.log(`EL ano es: ${reproductor.detalles.year}`);*/
 const{volumne,segundo,cancion,detalles}=reproductor;
 const{autor, year}=detalles;
 console.log(`El Volume actual es: ${volumne}`);
 console.log(`Lo segundo son : ${segundo}`);
 console.log(`La cancion es  : ${cancion}`);
 console.log(`El cantante es : ${autor}`);
 console.log(`EL ano es: ${year}`);

 //ahora con un string 

 const dbz:string[]=['Goku','Majinbu','Babidy','Freezer'];
 console.log(`Personaje 1 ${dbz[0]}`);
 console.log(`Personaje 2 ${dbz[1]}`);
 console.log(`Personaje 3 ${dbz[2]}`);
 console.log(`Personaje 4 ${dbz[3]}`);
 
 const[a,,b]=dbz;
 console.log(`Personaje primero ${a}`)
 console.log(`Personaje ultimo ${b}`)
 
 



