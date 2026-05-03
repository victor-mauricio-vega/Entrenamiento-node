## Instalar herramientas globales
### Compilador de TypeScript
- npm install -g typescript

### Ejecutar TypeScript sin compilar
- npm install -g ts-node

### Reinicio automático del servidor en desarrollo
- npm install -g nodemon

## Inicializar el proyecto
### Inicializar proyecto Node.js
- npm init -y

### Inicializar configuración de TypeScript
- tsc --init

## Dependencias principales
### Dependencias de producción
- npm install express       # Framework para API REST
- npm install cors          # Permite solicitudes entre dominios
- npm install dotenv        # Manejo de variables de entorno
- npm install pg            # Cliente de PostgreSQL

### Dependencias de desarrollo (tipados)
- npm install -D @types/express
- npm install -D @types/cors
- npm install -D @types/dotenv
- npm install -D @types/pg

### Validación de datos
- npm install class-validator class-transformer

## Migraciones (Base de datos)
### Generar migración automáticamente
- npm run migration:generate --name=<nombre del migracion>

### Crear migración vacía (manual)
- npm run migration:create --name=<nombre del migracion>

### Ejecutar migraciones
- npm run migration:run

### Listar migraciones ejecutadas
- npm run migration:show

### Revertir última migración
- npm run migration:revert 

### Eliminar todas las tablas y migraciones
- npm run migration:drop


