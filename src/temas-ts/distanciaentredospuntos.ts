// Definimos la clase Punto que representará un punto en el plano cartesiano
class Punto {
    // Atributos x e y para las coordenadas del punto
    x: number;
    y: number;

    // Constructor que inicializa un punto con sus coordenadas x e y
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// Clase Distancia que se encargará de calcular la distancia entre dos puntos
class Distancia {
    // Atributos para almacenar los dos puntos entre los que se calculará la distancia
    punto1: Punto;
    punto2: Punto;

    // Constructor que recibe dos objetos de tipo Punto
    constructor(punto1: Punto, punto2: Punto) {
        this.punto1 = punto1;
        this.punto2 = punto2;
    }

    // Método que calculará la distancia entre los dos puntos usando la fórmula
    calcularDistancia(): number {
        // Calculamos la diferencia entre las coordenadas x de los dos puntos
        const dx = this.punto2.x - this.punto1.x;
        // Calculamos la diferencia entre las coordenadas y de los dos puntos
        const dy = this.punto2.y - this.punto1.y;
        // Aplicamos la fórmula de distancia y retornamos el resultado
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Instanciamos dos objetos de la clase Punto, con sus coordenadas respectivas
let puntoA = new Punto(1, 2);  // Punto A en las coordenadas (1, 2)
let puntoB = new Punto(4, 6);  // Punto B en las coordenadas (4, 6)

// Creamos un objeto de la clase Distancia para calcular la distancia entre puntoA y puntoB
let distancia = new Distancia(puntoA, puntoB);

// Imprimimos en la consola el resultado de la distancia calculada
console.log(`La distancia entre los puntos es: ${distancia.calcularDistancia()}`);
