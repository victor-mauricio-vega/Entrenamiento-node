# Instalar typeScript global
- npm i typescript -g

# motor de ejecución y REPL (Read-Eval-Print Loop) para Node.js que permite ejecutar código TypeScript directamente, sin necesidad de compilarlo a JavaScript previamente
- npm i ts-node -g

# Instalar nodemon ayudar nuestra aplicacion en ejecuccion 
- npm i nodemon -g

# Iniciar nuestro proyecto con typeScript
- tsc --init

# Inicializar nuestro proyecto de node
- npm init -y

# Instalar dependencias a utilizar para api rest
- npm i express
- npm i cors # comunicarse con diferentes origenes
- npm i dotenv # para configuracion de nuestras variables de entorno
- npm i pg # para realizar conexion a nuestra DB postgres

# Instalar dependencias a utilizar para api rest con sus tipados
- npm i @types/express
- npm i @types/cors
- npm i @types/dotenv
- npm i @types/pg

# Generar migracion
- npm run migration:generate --name=<nombre del migracion>

# Generar migracion vacia para realizar modificacion manual
- npm run migration:create --name=<nombre del migracion>

# Correr migracion creadas
- npm run migration:run

#  listar todas las migraciones realizadas
- npm run migration:show

# Reversar ultima migracion realizada
- npm run migration:revert 

# eliminar tablas y migracciones realizadas
- npm run migration:drop


