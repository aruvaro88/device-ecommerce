# Device E-Commerce

Device E-Commerce es una mini aplicación de tienda de móviles creada como prueba técnica.  
Permite navegar un catálogo de dispositivos, ver sus detalles, seleccionar opciones (color y almacenamiento) y añadirlos a un carrito con contador persistente.

# Features

- Listado de productos (PLP) con filtrado en tiempo real por marca o modelo.
- Ficha de producto (PDP) en dos columnas: imagen + datos.
- Selectores de color y capacidad presentados como botones adaptativos.
- Carrito global con contador persistente en LocalStorage.
- Caché en cliente de datos de API (1 hora de expiración).
- SPA construida con React 18, Vite y Tailwind CSS.
- Suite de tests con Vitest y React Testing Library.

## Installation

Para poder testear este proyecto, lo primero que hay que hacer es descargarlo en tu equipo usando el comando de git git clone:

```bash
git clone https://github.com/aruvaro88/device-ecommerce.git
```

Moverte al directorio del proyecto

```bash
cd device-ecommerce
```

Despues, tendrás que instalar las dependencias que se estan usando en el proyecto, para eso usamos el comando:

```bash
npm install
```

Para lanzar el proyecto usaremos el siguiente comando:

```bash
npm run start
```

Abre una pestaña nueva en tu navegador y pega la siguiente url para poder ver el proyecto: http://localhost:5173/

# Application Components

## App.jsx

Punto de entrada. Envuelve toda la aplicación en CartProvider y monta AppRoutes.

## AppRoutes.jsx

Define rutas con React Router DOM:

- `/` → ProductListPage
- `/product/:id` → ProductDetailPage

## Header.jsx

Barra superior fija con logo, título, icono de carrito con contador y breadcrumb dinámico.

## SearchBar.jsx

Input controlado para filtrar productos. Props: `searchTerm`, `setSearchTerm`.

## OptionSelector.jsx

Botones adaptativos para elegir opciones (color/almacenamiento). Props: `label`, `options`, `selected`, `onSelect`.

## ProductCard.jsx

Tarjeta de producto en la lista. Muestra imagen, marca, modelo, precio y enlace a detalle.

## ProductImage.jsx

Contenedor responsivo para imagen de producto.

## ProductDescription.jsx

Lista de atributos del producto: marca, modelo, precio, CPU, RAM, SO, resolución, batería, cámaras, dimensiones, peso.

## ProductActions.jsx

Panel de acciones en PDP: selectores de color y capacidad y botón “Añadir al carrito” que llama a la API y actualiza el contexto.

## Páginas

### ProductListPage.jsx

- **Ruta:** `/`
- **Función:**
  - Hace fetch a `GET /api/product` (usando caché en cliente con expiración de 1 h).
  - Gestiona un estado local `products` y un `searchString` para filtrar en tiempo real por marca o modelo.
  - Renderiza un encabezado con título y SearchBar, y a continuación una rejilla flexible (`flex wrap`) de `ProductCard` (máximo 4 por fila en escritorio, adaptativo).

### ProductDetailPage.jsx

- **Ruta:** `/product/:id`
- **Función:**
  - Lee el parámetro `:id` de la URL y hace fetch a `GET /api/product/:id` (cache 1 h).
  - Muestra un spinner o texto “Cargando…” si aún no hay datos.
  - Una vez cargado, renderiza dos columnas:
    1. `ProductImage` con la foto del producto.
    2. Un bloque con `ProductDescription`, `ProductActions` (selector de color/almacenamiento y botón de “Añadir al carrito”) y un enlace para volver al listado.

# Test

En la carpeta src/test se han includo test unitarios para algunos de los componentes de la aplicacion. Se pueden lanzar a traves de la terminar con el siguiente comando:

```bash
npm run test
```

# Tecnologías y librerías

- **React 18** + **Vite**
- **Tailwind CSS** para estilos utilitarios
- **React Router DOM** para navegación SPA
- **Context API** y **Custom Hooks** para estado global del carrito
- **LocalStorage** con expiración de 1 hora (`cache.js`)
- **@mui/icons-material** para iconos
- **Vitest** + **React Testing Library** para pruebas
- **ESLint** con configuraciones para React Hooks y Vitest

## File Structure

````bash

├── package-lock.json
├── package.json
├── public
│   └── device_ecommerce_logo_full.svg
├── src
│   ├── App.jsx
│   ├── api
│   │   ├── api.js
│   │   └── cache.js
│   ├── assets
│   ├── components
│   │   ├── Header.jsx
│   │   ├── OptionSelector.jsx
│   │   ├── ProductActions.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductDescription.jsx
│   │   ├── ProductImage.jsx
│   │   └── SearchBar.jsx
│   ├── context
│   │   └── CartContext.jsx
│   ├── hooks
│   │   └── useCart.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── ProductDetailPage.jsx
│   │   └── ProductListPage.jsx
│   ├── routes
│   │   └── AppRoutes.jsx
│   ├── setupTests.js
│   └── tests
│       ├── ProductCard.test.jsx
│       ├── ProductDescription.test.jsx
│       ├── ProductDetailPage.test.jsx
│       ├── ProductImage.test.jsx
│       ├── ProductListPage.test.jsx
│       └── SearchBar.test.jsx
└── vite.config.js```

## License

[MIT](https://choosealicense.com/licenses/mit/)
````
