# DevQuiz - Quiz de JavaScript para principiantes

DevQuiz es una aplicación web interactiva diseñada para aprender y practicar conceptos básicos de JavaScript. El quiz presenta 10 preguntas de opción múltiple, muestra una barra de progreso, brinda retroalimentación inmediata con explicaciones y muestra una puntuación final.

## 🚀 Características

- **10 preguntas** de JavaScript básico (variables, tipos, operadores, estructuras de control, etc.).
- **Una pregunta a la vez** con barra de progreso visual.
- **Respuesta inmediata**: la opción correcta se marca en verde y la incorrecta en rojo.
- **Explicación corta** después de cada respuesta para reforzar el aprendizaje.
- **Pantalla final** con puntuación y mensaje personalizado según el desempeño.
- **Botón para reiniciar** el quiz y volver a intentarlo.
- **HTML semántico** y accesible (uso de `<main>`, `<header>`, `<section>`, atributos `aria-*`).
- **Botones reales** (`<button>`) para una mejor experiencia de teclado y lectores de pantalla.
- **Sin dependencias**: solo HTML, CSS y JavaScript puro (no se usan librerías ni frameworks).

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (con variables y transiciones suaves)
- JavaScript ES6+

## 📂 Estructura del proyecto

```
/devquiz
│   index.html      # Estructura principal de la página
│   style.css       # Estilos y diseño visual
│   questions.js    # Banco de preguntas (10 items) con respuestas y explicaciones
│   app.js          # Lógica de la aplicación (renderizado, navegación, puntuación)
│   README.md       # Este archivo
```

## ▶️ Cómo usar

1. **Clona o descarga** este repositorio.
2. Abre el archivo `index.html` en tu navegador preferido (Chrome, Firefox, Edge, Safari).
   - Puedes hacer doble clic sobre el archivo o usar una extensión como *Live Server* si trabajas con VS Code.
3. Responde cada pregunta seleccionando una opción.
4. Al enviar tu respuesta, verás si fue correcta o incorrecta junto con una explicación.
5. Haz clic en **"Siguiente pregunta"** para continuar o en **"Ver resultados"** al final.
6. Al terminar, verás tu puntuación y un mensaje de retroalimentación.
7. Pulsa **"Volver a empezar"** para jugar nuevamente.

## 🎯 Objetivo educativo

Este quiz está pensado para:
- Estudiantes que están iniciando en JavaScript.
- Repasar conceptos fundamentales de forma lúdica.
- Identificar áreas de mejora mediante las explicaciones proporcionadas.

## 🤝 Contribuciones

Si deseas mejorar el proyecto (añadir más preguntas, mejorar el estilo, corregir errores, etc.), siéntete libre de:
1. Hacer un **fork** del repositorio.
2. Crear una rama (`git checkout -b feature/nueva-feature`).
3. Realizar tus cambios y hacer commit (`git commit -m "Descripción clara"`).
4. Abrir un **Pull Request** hacia la rama `main`.

## 📜 Licencia

Este proyecto es de uso libre y educativo. No se requiere licencia específica; puedes modificarlo y distribuirlo como desees.

---

¡Diviértete aprendiendo JavaScript con DevQuiz! 🎉
