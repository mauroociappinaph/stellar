# 🚀 Guía de Deployment - Stellar

## Opciones de Deployment Gratuitas

### 1. 🔷 Vercel (Recomendado)

**Pasos:**

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno:
   - `GEMINI_API_KEY`: Tu API key de Google Gemini
4. Deploy automático en cada push

**Configuración:**

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

### 2. 🟢 Netlify

**Pasos:**

1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Arrastra la carpeta `dist/` o conecta tu repositorio
3. Configura las variables de entorno en Site Settings > Environment Variables:
   - `GEMINI_API_KEY`: Tu API key de Google Gemini

**Configuración:**

- Build Command: `npm run build`
- Publish Directory: `dist`

### 3. 🔴 GitHub Pages

**Pasos:**

1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega script en package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Ejecuta: `npm run build && npm run deploy`

**Nota:** GitHub Pages no soporta variables de entorno del servidor, necesitarás hardcodear la API key (no recomendado para producción).

### 4. 🟡 Firebase Hosting

**Pasos:**

1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Ejecuta: `firebase login`
3. Ejecuta: `firebase init hosting`
4. Configura:
   - Public directory: `dist`
   - Single-page app: `Yes`
5. Deploy: `firebase deploy`

## 🔐 Variables de Entorno

Para que la aplicación funcione correctamente, necesitas configurar:

```
GEMINI_API_KEY=tu_api_key_de_google_gemini
```

### Obtener API Key de Google Gemini:

1. Ve a [Google AI Studio](https://aistudio.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Genera una API key
4. Copia la key y úsala en tu deployment

## 🛠️ Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar build
npm run build && npm run preview
```

## 📋 Checklist Pre-Deployment

- [ ] API Key de Gemini configurada
- [ ] Build exitoso (`npm run build`)
- [ ] Variables de entorno configuradas en la plataforma
- [ ] Dominio personalizado configurado (opcional)
- [ ] HTTPS habilitado
- [ ] Pruebas de funcionalidad completadas

## 🔧 Troubleshooting

**Error: API Key no encontrada**

- Verifica que `GEMINI_API_KEY` esté configurada correctamente
- Asegúrate de que la variable esté disponible en tiempo de build

**Error: Rutas no funcionan**

- Verifica que el routing esté configurado para SPA
- Asegúrate de que todas las rutas redirijan a `index.html`

**Error: Fuentes no cargan**

- Verifica que las Google Fonts se carguen correctamente
- Revisa la consola del navegador para errores de CORS

## 🌐 URLs de Ejemplo

Una vez deployado, tu aplicación estará disponible en:

- Vercel: `https://tu-proyecto.vercel.app`
- Netlify: `https://tu-proyecto.netlify.app`
- Firebase: `https://tu-proyecto.web.app`

¡Tu aplicación Stellar estará lista para generar diseños increíbles! ✨
