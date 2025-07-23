#!/bin/bash

# 🚀 Script de Deployment Automatizado para Stellar
echo "🌟 Iniciando deployment de Stellar..."

# Verificar que estemos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Verificar que la API key esté configurada
if [ -z "$GEMINI_API_KEY" ] && [ ! -f ".env" ]; then
    echo "⚠️  Advertencia: No se encontró GEMINI_API_KEY. Asegúrate de configurarla en Vercel."
fi

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Ejecutar build
echo "🔨 Construyendo aplicación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en el build. Revisa los errores arriba."
    exit 1
fi

echo "✅ Build exitoso!"

# Deploy a Vercel
echo "🚀 Deployando a Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "🎉 ¡Deployment exitoso!"
    echo "🌐 Tu aplicación Stellar está ahora en línea!"
    echo ""
    echo "📋 Próximos pasos:"
    echo "1. Configura la variable GEMINI_API_KEY en Vercel Dashboard"
    echo "2. Prueba la funcionalidad de generación de diseños"
    echo "3. ¡Comparte tu increíble generador de diseños!"
else
    echo "❌ Error en el deployment. Revisa los logs arriba."
    exit 1
fi
