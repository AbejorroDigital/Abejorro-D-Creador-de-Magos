# Generador de Magos D&D 2024

Una aplicación web interactiva para generar, gestionar y exportar fichas de personaje de Magos para Dungeons & Dragons (Reglas 2024).

Desarrollado por **Abejorro Digital**.

## Características Principales

- **Generación Aleatoria:** Crea un mago de nivel 1 con estadísticas, trasfondo, hechizos, equipo y baratijas generados aleatoriamente.
- **Cálculo Automático:** Al subir de nivel o modificar las características (Fuerza, Destreza, etc.), la aplicación recalcula automáticamente los Puntos de Golpe, la Clase de Armadura, la Iniciativa, la CD de Salvación de Conjuros y el Bonificador de Ataque.
- **Gestión de Conjuros:** Permite añadir, eliminar y marcar conjuros como "preparados". Incluye validación visual para la cantidad de conjuros preparados y el mínimo de hechizos en el libro según tu nivel.
- **Subclases:** Soporte para las 4 escuelas de magia base de 2024 y las 10 opciones de legado (Legacy).
- **Exportación a PDF:** Descarga tu ficha de personaje en formato PDF o imprímela directamente desde el navegador con un formato limpio y optimizado.
- **Trasfondos Detallados:** Historias de trasfondo (backstories) ricas y complejas para dar ganchos narrativos al Dungeon Master.

## Tecnologías Utilizadas

- **React 18** (con Hooks funcionales)
- **TypeScript** (para tipado estricto y mantenibilidad)
- **Tailwind CSS** (para el diseño responsivo y estilos)
- **Vite** (como empaquetador y servidor de desarrollo)
- **html2pdf.js** (para la exportación a PDF)
- **Lucide React** (para la iconografía)

## Estructura del Proyecto

```text
/
├── index.html          # Punto de entrada HTML
├── package.json        # Dependencias y scripts
├── tailwind.config.js  # Configuración de Tailwind CSS
├── vite.config.ts      # Configuración de Vite
└── src/
    ├── main.tsx        # Punto de entrada de React
    ├── App.tsx         # Componente principal y lógica de estado
    ├── data.ts         # Datos estáticos, tablas de D&D y lógica de generación
    └── index.css       # Estilos globales y directivas de Tailwind
```

## Instalación y Uso Local

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en la dirección indicada (usualmente `http://localhost:3000` o `http://localhost:5173`).

## Documentación del Código

El código fuente (`src/App.tsx` y `src/data.ts`) está completamente documentado en español utilizando el estándar **JSDoc**. Esto facilita la comprensión de la lógica de negocio, las reglas de D&D aplicadas y el mantenimiento futuro de la aplicación.

## Licencia

Este proyecto es de uso libre para la comunidad de rol. Las reglas, nombres de conjuros y mecánicas hacen referencia al sistema de Dungeons & Dragons propiedad de Wizards of the Coast.
