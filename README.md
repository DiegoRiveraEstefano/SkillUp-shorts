Aquí tienes una propuesta de README.md para tu proyecto, incorporando la información del documento que proporcionaste y los detalles técnicos de tu `package.json`.

-----

# SkillUp Shorts (Demo)

Este repositorio contiene el prototipo semi-funcional (solo frontend) de **SkillUp**, una plataforma móvil de microlearning gamificado.  El objetivo es entregar cápsulas de video breves (tipo "shorts" de 30-90 segundos) para fortalecer competencias blandas clave como la comunicación, el liderazgo y el trabajo en equipo. 

## 🚀 Propuesta de Valor

Nuestra propuesta es: **"Transformar el desarrollo de habilidades blandas en una experiencia ágil, entretenida y conectada."** 

Buscamos que los egresados puedan aprender de forma flexible y motivante, utilizando un formato dinámico y cercano. 

## 🤔 ¿Qué problema resuelve?

El proyecto aborda directamente la falta de preparación práctica en habilidades blandas, el estrés de adaptación y la falta de acompañamiento que enfrentan muchos profesionales jóvenes durante su primer año laboral.  SkillUp ofrece un espacio de aprendizaje continuo y motivador para cerrar esta brecha. 

## 🎯 Objetivo del Proyecto

El objetivo de esta solución es mejorar la retención y satisfacción laboral de los egresados (específicamente, de Ingeniería en Informática de Inacap Maipú) durante su primer año de inserción laboral. 

## ✨ Características (Demo)

Esta demo se enfoca en construir la interfaz de usuario (frontend) para las siguientes características clave:

  * **Microlearning en formato "Shorts":** Un feed de cápsulas de video verticales de 30 a 90 segundos. 
  * **Gamificación:** Implementación visual de:
      * Retos semanales. 
      * Insignias por logros. 
      * Un ranking de logros para fomentar la motivación. 
  * **Enfoque en Habilidades Blandas:** Contenido centrado en comunicación, liderazgo y trabajo en equipo. 

## 💻 Stack Tecnológico (Frontend)

Este prototipo está construido con un stack moderno enfocado en alto rendimiento y desarrollo multiplataforma:

  * **Framework Frontend:** Svelte 5 + SvelteKit
  * **Wrapper Nativo:** Tauri v2
  * **Lenguaje:** TypeScript
  * **Build Tool:** Vite
  * **Adaptador:** `@sveltejs/adapter-static`, configurado para generar un sitio estático (Single Page Application - SPA) que Tauri pueda consumir.

## 🚦 Estado Actual

**DEMO SEMI-FUNCIONAL (SOLO FRONTEND)**

La aplicación actual no se conecta a un backend real. Todos los datos (videos, perfiles de usuario, rankings) son simulados (*mocked*) directamente en el frontend para demostrar el flujo de usuario y la interfaz.

## 🛠️ Primeros Pasos

1.  **Clonar el repositorio:**

    ```bash
    git clone [URL-DEL-REPOSITORIO]
    cd skillup-shorts
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Configurar Tauri:**
    (Si es la primera vez, asegúrate de tener los [pre-requisitos de Tauri v2](https://www.google.com/search?q=https://tauri.app/v2/guides/getting-started/prerequisites) instalados en tu sistema).

## 📜 Scripts Disponibles

Basado en el `package.json`:

  * `npm run dev`:
    Inicia el servidor de desarrollo de SvelteKit con Hot-Module-Reloading (HMR).

  * `npm run build`:
    Compila la aplicación SvelteKit usando `adapter-static`. Esto genera la carpeta `build/` que Tauri utilizará.

  * `npm run preview`:
    Previsualiza la build estática localmente.

  * `npm run tauri dev`:
    Inicia la aplicación de escritorio en modo desarrollo. (Se recomienda ejecutar `npm run dev` en una terminal y `npm run tauri dev` en otra).

  * `npm run tauri build`:
    Compila y empaqueta la aplicación de escritorio final para distribución.