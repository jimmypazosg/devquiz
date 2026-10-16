// ============================================
// DevQuiz - Banco de preguntas de JavaScript
// ============================================

const questions = [
    {
        question: "¿Cuál es la forma correcta de declarar una variable que no puede ser reasignada?",
        options: [
            "var nombre = 'Juan';",
            "let nombre = 'Juan';",
            "const nombre = 'Juan';",
            "variable nombre = 'Juan';"
        ],
        correct: 2, // Índice de la respuesta correcta (0-based)
        explanation: "'const' declara una constante, lo que significa que su valor no puede ser reasignado después de su declaración. 'let' permite reasignar y 'var' tiene un alcance diferente."
    },
    {
        question: "¿Qué devuelve la expresión '2' + 3 en JavaScript?",
        options: [
            "5",
            "'23'",
            "'5'",
            "NaN"
        ],
        correct: 1,
        explanation: "Al usar el operador + entre un string y un número, JavaScript convierte el número a string y concatena los valores, resultando en '23'."
    },
    {
        question: "¿Qué método se utiliza para agregar un elemento al final de un array?",
        options: [
            "array.unshift()",
            "array.pop()",
            "array.push()",
            "array.shift()"
        ],
        correct: 2,
        explanation: "'push()' añade elementos al final del array. 'pop()' elimina el último, 'unshift()' añade al principio y 'shift()' elimina el primero."
    },
    {
        question: "¿Qué resultado devuelve typeof null en JavaScript?",
        options: [
            "'null'",
            "'undefined'",
            "'object'",
            "'number'"
        ],
        correct: 2,
        explanation: "Curiosamente, typeof null devuelve 'object'. Es un bug histórico de JavaScript que se mantiene por compatibilidad. null representa la ausencia intencional de valor."
    },
    {
        question: "¿Cuál es el valor de 'x' después de ejecutar: let x = 5; x += 3;?",
        options: [
            "3",
            "5",
            "8",
            "53"
        ],
        correct: 2,
        explanation: "El operador += suma el valor de la derecha al de la variable. Es equivalente a x = x + 3, por lo que x pasa a valer 8."
    },
    {
        question: "¿Qué función se usa para mostrar un mensaje emergente al usuario?",
        options: [
            "console.log()",
            "prompt()",
            "alert()",
            "confirm()"
        ],
        correct: 2,
        explanation: "'alert()' muestra un mensaje emergente informativo. 'prompt()' solicita entrada de texto, 'confirm()' un sí/no y 'console.log()' muestra en la consola del navegador."
    },
    {
        question: "¿Cuál es la diferencia entre == y === en JavaScript?",
        options: [
            "No hay diferencia, ambos son iguales",
            "== compara valor y tipo, === solo compara valor",
            "== compara solo valor, === compara valor y tipo",
            "=== es una versión obsoleta de =="
        ],
        correct: 2,
        explanation: "'==' realiza una comparación con conversión de tipo (coerción), mientras que '===' compara valor y tipo estrictamente sin convertir."
    },
    {
        question: "¿Qué bucle se ejecuta al menos una vez antes de evaluar la condición?",
        options: [
            "for",
            "while",
            "do...while",
            "forEach"
        ],
        correct: 2,
        explanation: "'do...while' ejecuta su bloque de código al menos una vez y luego evalúa la condición para decidir si continúa. Los demás evalúan la condición antes de la primera iteración."
    },
    {
        question: "¿Cómo se define una función de flecha (arrow function) en JavaScript?",
        options: [
            "function miFuncion() => {} ",
            "const miFuncion = function() => {}",
            "const miFuncion = () => {}",
            "arrow function miFuncion() {}"
        ],
        correct: 2,
        explanation: "La sintaxis correcta es const miFuncion = () => {}. Las arrow functions tienen una sintaxis más corta y no crean su propio contexto de 'this'."
    },
    {
        question: "¿Qué operador se usa para desestructurar un objeto y extraer sus propiedades?",
        options: [
            "spread (...)",
            "destructure { }",
            "const {propiedad} = objeto",
            "object.extract()"
        ],
        correct: 2,
        explanation: "La sintaxis const {nombre} = persona extrae la propiedad 'nombre' del objeto 'persona'. Es una forma concisa de asignar variables."
    },
    {
        question: "¿Cuál es el resultado de [3, 6, 9].find(n => n > 5)?",
        options: [
            "6",
            "9",
            "[6, 9]",
            "3"
        ],
        correct: 1,
        explanation: ".find() devuelve el primer elemento que cumple la condición, por lo que retorna 6 (el primero mayor a 5)."
    },
    {
        question: "¿Qué devuelve Boolean('')?",
        options: [
            "true",
            "false",
            "undefined",
            "''"
        ],
        correct: 1,
        explanation: "Un string vacío es un valor 'falsy' en JavaScript, por lo que Boolean('') devuelve false."
    },
    {
        question: "¿Cómo se escribe un operador ternario que asigne 'adulto' si edad >= 18, sino 'menor'?",
        options: [
            "if (edad >= 18) 'adulto'; else 'menor';",
            "edad >= 18 ? 'adulto' : 'menor';",
            "edad === 18 ? 'adulto' : 'menor';",
            "ternary(edad >= 18, 'adulto', 'menor')"
        ],
        correct: 1,
        explanation: "El operador ternario es condición ? valorSiVerdadero : valorSiFalso. Es una forma compacta de escribir if/else simples."
    },
    {
        question: "¿Qué hace el spread operator (...) aplicado a un array?",
        options: [
            "Elimina duplicados",
            "Copia o expande los elementos",
            "Ordena el array",
            "Convierte a string"
        ],
        correct: 1,
        explanation: "El spread operator (...) copia o expande los elementos de un array u objeto, útil para clonar o combinar estructuras."
    },
    {
        question: "¿Qué método convierte cada elemento de un array según una función y retorna un nuevo array?",
        options: [
            ".forEach()",
            ".filter()",
            ".map()",
            ".reduce()"
        ],
        correct: 2,
        explanation: ".map() aplica una función a cada elemento y devuelve un nuevo array con los resultados, sin modificar el original."
    },
    {
        question: "¿Cuál es la salida de console.log(typeof [])?",
        options: [
            "'array'",
            "'object'",
            "'list'",
            "'[]'"
        ],
        correct: 1,
        explanation: "En JavaScript, los arrays son objetos internos, por lo que typeof [] devuelve 'object'. Se recomienda Array.isArray() para verificar."
    },
    {
        question: "¿Qué es el 'hoisting' en JavaScript?",
        options: [
            "Un error de sintaxis",
            "El movimiento de declaraciones al inicio del scope",
            "Una técnica de optimización de memoria",
            "Un método para ordenar arrays"
        ],
        correct: 1,
        explanation: "El hoisting es el comportamiento por el que las declaraciones de variables y funciones se elevan al inicio de su scope antes de la ejecución."
    },
    {
        question: "¿Cuál de estas opciones es una forma válida de crear un objeto con propiedades abreviadas?",
        options: [
            "{ nombre: nombre }",
            "{ nombre }",
            "{ 'nombre': nombre }",
            "{ nombre: 'nombre' }"
        ],
        correct: 1,
        explanation: "Cuando la clave y el valor tienen el mismo nombre, puedes usar la notación abreviada { nombre }, equivalente a { nombre: nombre }."
    },
    {
        question: "¿Qué resultado produce '5' == 5?",
        options: [
            "true",
            "false",
            "'55'",
            "Error"
        ],
        correct: 0,
        explanation: "El operador == realiza coerción de tipos, convirtiendo '5' a número, por lo que '5' == 5 es true. Usa === para comparar sin conversión."
    },
    {
        question: "¿Qué devuelve [1, 2, 3].reduce((a, b) => a + b, 0)?",
        options: [
            "6",
            "3",
            "123",
            "undefined"
        ],
        correct: 0,
        explanation: ".reduce() acumula valores: 1+2+3 = 6. El segundo argumento (0) es el valor inicial del acumulador."
    },
    {
        question: "¿Cuál es la diferencia clave entre let y const?",
        options: [
            "const no puede declararse en bloques",
            "const no permite reasignar el identificador",
            "let es más rápido que const",
            "No hay diferencia"
        ],
        correct: 1,
        explanation: "Con const no puedes reasignar la variable (aunque si es objeto, puedes modificar sus propiedades). Explicitamente constante."
    }
];
