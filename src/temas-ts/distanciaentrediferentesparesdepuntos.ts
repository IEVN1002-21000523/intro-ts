// Clase Punto, que representa un punto en el plano
class Punto {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// Clase Triangulo que hereda de Punto
class Triangulo {
    punto1: Punto;
    punto2: Punto;
    punto3: Punto;

    // Constructor que inicializa los tres puntos del triángulo
    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }

    // Método para verificar si los tres puntos forman un triángulo válido
    esTriangulo(): boolean {
        // Aplicamos la fórmula del determinante para calcular el área
        const area = 0.5 * Math.abs(
            this.punto1.x * (this.punto2.y - this.punto3.y) +
            this.punto2.x * (this.punto3.y - this.punto1.y) +
            this.punto3.x * (this.punto1.y - this.punto2.y)
        );

        // Si el área es mayor que 0, es un triángulo válido
        return area > 0;
    }

    // Método para imprimir si es un triángulo o no
    imprimirResultado() {
        if (this.esTriangulo()) {
            console.log("Los puntos forman un triángulo válido.");
        } else {
            console.log("Los puntos no forman un triángulo, están alineados.");
        }
    }
}

// Pruebas

// Caso 1: Los puntos forman un triángulo válido
let puntoA = new Punto(0, 0);
let puntoB = new Punto(4, 0);
let puntoC = new Punto(2, 3);
let triangulo1 = new Triangulo(puntoA, puntoB, puntoC);
triangulo1.imprimirResultado();  // Debería decir que es un triángulo válido

/* Caso 2: Los puntos no forman un triángulo (están en la misma línea)
let puntoD = new Punto(1, 1);
let puntoE = new Punto(2, 2);
let puntoF = new Punto(3, 3);
let triangulo2 = new Triangulo(puntoD, puntoE, puntoF);
triangulo2.imprimirResultado();  // Debería decir que no es un triángulo
*/
