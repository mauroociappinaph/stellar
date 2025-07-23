# 🌟 Stellar - Generador de Diseño con IA

Una aplicación web moderna que utiliza inteligencia artificial para generar paletas de colores y combinaciones tipográficas únicas para proyectos de diseño web.

![Stellar Preview](https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=1200&auto=format&fit=crop)

## ✨ Características

- 🎨 **Generación de Paletas de Colores:** Crea paletas de 5 colores con recomendaciones de uso
- 🔤 **Sugerencias Tipográficas:** Selecciona Google Fonts complementarias automáticamente
- 📋 **Funcionalidad de Copia:** Copia códigos hex al clipboard con un clic
- 💾 **Exportación JSON:** Descarga diseños completos para usar en proyectos
- 🎯 **Interfaz Intuitiva:** Diseño responsive con tema espacial
- ⚡ **Carga Dinámica:** Carga automática de Google Fonts

## 🚀 Tecnologías

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **IA:** Google Gemini 2.5 Flash API
- **Deployment:** Vercel

## 🛠️ Instalación y Uso

1. **Clona el repositorio:**

   ```bash
   git clone <repository-url>
   cd stellar
   ```

2. **Instala dependencias:**

   ```bash
   npm install
   ```

3. **Configura la API Key:**

   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu API key de Google Gemini:
     ```
     GEMINI_API_KEY=tu_api_key_aqui
     ```

4. **Ejecuta en desarrollo:**

   ```bash
   npm run dev
   ```

5. **Build para producción:**
   ```bash
   npm run build
   ```

## 🎯 Casos de Uso

- Diseñadores web buscando inspiración rápida
- Desarrolladores que necesitan paletas cohesivas
- Equipos de producto definiendo sistemas de diseño
- Estudiantes aprendiendo sobre teoría del color

## 📁 Estructura del Proyecto

```
stellar/
├── components/           # Componentes React
│   ├── icons/           # Iconos SVG
│   ├── Header.tsx       # Navegación
│   ├── LandingPage.tsx  # Página principal
│   ├── GeneratorPage.tsx # Página de generación
│   └── ...
├── services/            # Servicios API
│   └── geminiService.ts # Integración con Gemini
├── types.ts            # Definiciones TypeScript
├── App.tsx             # Componente principal
└── index.tsx           # Punto de entrada

```

## 🌐 Demo

[Ver Demo en Vivo](https://stellar-design-generator.vercel.app)

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

---

Desarrollado con ❤️ usando React, TypeScript y Google Gemini AI
