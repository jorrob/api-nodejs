# API Basic

Este proyecto es una aplicación Express.js básica que demuestra la implementación de una API REST con validación de datos.

## Estructura del Proyecto

```
api-basic/
├── app.js            # Archivo principal de la aplicación
├── validacion/       # Directorio con módulos de validación
│   └── validacion.js # Funciones de validación
├── datos/           # Directorio con datos
│   └── datos.js     # Datos de prueba
├── log/             # Directorio con módulos de logging
│   └── log.js       # Configuración de Morgan
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
git clone https://github.com/jorrob/api-nodejs.git
cd api-basic
```

2. Instala las dependencias:
```bash
npm install
```

Las dependencias principales incluyen:
- express: Framework web para Node.js
- joi: Biblioteca para validación de datos
- morgan: Middleware para logging de peticiones HTTP

## Uso

Para iniciar el servidor:
```bash
node app.js
```

El servidor se ejecutará en el puerto 3000 por defecto (o el puerto especificado en la variable de entorno PORT).

## Endpoints Disponibles

### Usuarios

- GET `/api/usuarios` - Obtiene todos los usuarios
- GET `/api/usuarios/:id` - Obtiene un usuario específico por ID
- POST `/api/usuarios` - Crea un nuevo usuario
- PUT `/api/usuarios/:id` - Actualiza un usuario existente
- DELETE `/api/usuarios/:id` - Elimina un usuario

## Características

- API REST básica
- Validación de datos con Joi
  - Nombre: 3-20 caracteres, solo letras y espacios
  - Correo: formato de email válido
- Logging de peticiones HTTP con Morgan
  - Registro en archivo 'node-api.log'
  - Opción de registro en consola
- Estructura modular y organizada
- Manejo de errores y validaciones
