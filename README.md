# ST0263 Proyecto Final: Bookstore

Este es el proyecto final para la asignatura ST0263, que implementa una aplicación completa de una tienda de libros en línea (Bookstore) utilizando **React (Frontend)**, **Node.js (Backend)**, y **MongoDB (Base de Datos)**. El proyecto sigue una arquitectura escalable y está preparado para despliegues en Docker y Kubernetes.

# Link de Drive entrega final documento: https://docs.google.com/document/d/1UI6b-tYXnW_oKm8TZdca6pYXUS3o06YSUXUkxChFThI/edit?usp=sharing

## 🚀 Características

- **Backend:** Node.js con Express y MongoDB como base de datos.
- **Frontend:** React para la interfaz de usuario.
- **Base de Datos:** Datos iniciales cargados con libros populares.
- **API REST:** CRUD completo para manejar libros.
- **Docker:** Contenedores para backend y frontend.
- **Kubernetes:** Configuración para despliegue en clúster usando MicroK8s.

---

## 📂 Estructura del Proyecto

```
ST0263-Proyecto-final/
├── backend/               # Código del backend (Node.js)
│   ├── server.js          # Archivo principal del backend
│   ├── seed.js            # Script para cargar datos iniciales
│   ├── models/            # Modelos de MongoDB
│   ├── routes/            # Rutas de la API
│   └── .env               # Variables de entorno para el backend
├── bookstore-frontend/    # Código del frontend (React)
│   ├── public/            # Archivos estáticos (imágenes, favicon, etc.)
│   ├── src/               # Código fuente de React
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Vistas principales de la aplicación
│   │   └── App.js         # Componente principal de React
├── docker-compose.yml     # Configuración para Docker Compose
└── README.md              # Documentación del proyecto
```

---

## 🛠️ Configuración

### **1. Clonar el repositorio**
```bash
git clone https://github.com/mcmoralesr/ST0263-Proyecto-final.git
cd ST0263-Proyecto-final
```

### **2. Configurar el Backend**
1. Navega a la carpeta del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env`:
   ```bash
   touch .env
   ```
   Contenido del archivo `.env`:
   ```env
   MONGO_URI=mongodb+srv://<usuario>:<contraseña>@admin.v2zqy.mongodb.net/BookStore?retryWrites=true&w=majority
   PORT=5000
   ```

4. Carga los datos iniciales:
   ```bash
   node seed.js
   ```

5. Inicia el servidor:
   ```bash
   node server.js
   ```
   El backend estará disponible en `http://localhost:5000`.

### **3. Configurar el Frontend**
1. Navega a la carpeta del frontend:
   ```bash
   cd ../bookstore-frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env`:
   ```bash
   touch .env
   ```
   Contenido del archivo `.env`:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000/api
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```
   El frontend estará disponible en `http://localhost:3000`.

---

## 📦 Despliegue con Docker

1. Construye las imágenes de Docker:
   ```bash
   docker-compose build
   ```

2. Inicia los contenedores:
   ```bash
   docker-compose up
   ```

El backend estará en `http://localhost:5000` y el frontend en `http://localhost:3000`.

---

## 🌐 Despliegue con Kubernetes

1. Instala [MicroK8s](https://microk8s.io/) en tu máquina.
2. Configura los archivos YAML para backend, frontend y base de datos.
3. Aplica los manifiestos de Kubernetes:
   ```bash
   kubectl apply -f k8s/
   ```
