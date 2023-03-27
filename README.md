# Next.js OpenJira App

para correo localmente, se necesita la base de datos

```
docker-compose up -d
```

- -D. **detached**

* MongDB URL local

```
mongodb://localhost:27017/entriesdb
```

## Configurar variables de netrono

Renombrar el archivo **.env.template** a **.env**

## Llenar la base datos con informacion de pruebas

llamar a:

```
http://localhost:3000/api/seed
```
