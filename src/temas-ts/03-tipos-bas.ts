//funciones

function sumar(){
        var num1 =6;
        var num2 =6;
        var resultado = num1+num2;
        console.log(`EL resultado es:+ ${resultado}`)
       
}

function dospuntos(){
    var x1 =-3;
    var x2=-5;
    var y1=6;
    var y2=1;
    var resultado =Math.pow((x2-x1),2)+Math.pow((y2-y1),2);
    console.log(`EL resultado es:+ ${resultado}`)
}


//
function restar(a:number,b:number):number{
    return a- b ;
}
const res=restar(10,2)
console.log(res)



interface Mascota{
    nombre:string;
    edad: number;
    mostrarEdad:()=>void
}
function calcular(mascota:Mascota,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad());
}
const nuevaMascota:Mascota={
    nombre:"Miau",
    edad: 5,
    mostrarEdad()
    {
    console.log(`la edad de ${this.nombre} es ${this.edad}`)


    }
}
calcular(nuevaMascota,4)
