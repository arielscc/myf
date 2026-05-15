# Ariel Chura

Portafolio personal de Ariel Chura, construido como una aplicación web con Next.js. El sitio presenta el perfil profesional, experiencia, habilidades, educación, certificaciones, proyectos destacados y datos de contacto.

La aplicación tiene contenido en español e inglés, navegación por secciones, soporte de modo de color mediante Chakra UI y assets locales para CV, certificados e imágenes de proyectos.

## Stack

- Next.js 16
- React 19
- Chakra UI 2
- Emotion
- Framer Motion
- React Icons
- ESLint 9
- Prettier 3
- pnpm

## Requisitos

- Node.js >= 22.17.0
- pnpm 11.1.2

Si usas `nvm`, puedes activar la versión del proyecto con:

```bash
nvm use
```

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

La aplicación se levanta en:

```text
http://localhost:3002
```

## Build

```bash
pnpm build
```

## Producción local

Después de generar el build:

```bash
pnpm start
```

## Lint y formato

```bash
pnpm lint
pnpm format
```

## Estructura general

```text
components/       Componentes reutilizables de UI
context/          Contexto React para compartir contenido i18n
i18n/             Contenido traducido en español e inglés
icons/            Iconos personalizados
pages/            Rutas de Next.js y API routes
public/           Assets públicos: imágenes, certificados, CV y favicon
sections/         Secciones principales del portafolio
styles/           Tema de Chakra UI y estilos de componentes
```

## Secciones del sitio

- Inicio y presentación profesional
- Experiencia
- Habilidades
- Educación y certificaciones
- Proyectos destacados
- Contacto

## Producción

No hay un link de producción declarado en este repositorio. Cuando exista una URL pública, agrégala aquí.
