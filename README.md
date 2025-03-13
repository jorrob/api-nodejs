# API Basic

Este proyecto es una aplicación Express.js básica que demuestra la implementación de una API REST con validación de datos.

## Estructura del Proyecto

```
api-basic/
├── app.js            # Archivo principal de la aplicación
├── validacion/       # Directorio con módulos de validación
├── public/          # Archivos estáticos
├── .gitignore       # Archivo de exclusión para git
└── README.md        # Este archivo
```

## Requisitos Previos

- Node.js (versión 12 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd api-basic
```

2. Instala las dependencias:
```bash
npm install
```

Las dependencias principales incluyen:
- express: Framework web para Node.js
- joi: Biblioteca para validación de datos

## Uso

Para iniciar el servidor:
```bash
node app.js
```

El servidor se ejecutará en el puerto 3000 por defecto (o el puerto especificado en la variable de entorno PORT).

## Características

- API REST básica
- Validación de datos con Joi
- Servicio de archivos estáticos
- Estructura modular para validaciones
