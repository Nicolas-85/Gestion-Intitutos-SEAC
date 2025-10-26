# 🧩 Sistema de Gestión Integral para Instituto Educativo – SEAC

**Carrera:** Tecnicatura Superior en Desarrollo de Software  
**Materia:** Práctica Profesionalizante I  
**Docente:** Diego Serván  
**Año:** 2025  

---

## 👥 Integrantes del equipo
- Acosta Manuel  
- Alvarez Nicolás  
- Aranda Antony  
- Chamorro Martín  

---

## 🎯 Descripción general

El proyecto **SEAC** (Sistema Educativo de Administración y Control) tiene como objetivo brindar una herramienta digital que optimice la gestión administrativa de un instituto de inglés.

El sistema permite registrar alumnos, docentes y cursos, así como realizar operaciones básicas (CRUD). La aplicación se desarrolló con un enfoque simple, ágil y adaptable a las necesidades institucionales.

---

## ⚙️ Tecnologías utilizadas

- **Node.js** con **Express.js**
- **MySQL Workbench** (para la base de datos)
- **HTML**, **CSS** y **JavaScript** (frontend)
- **Nodemon** (para entorno de desarrollo)

---

## 🧱 Estructura del proyecto
```
Proyecto-SEAC/
│
├── Db/
│ └── conexion.js
│
├── Public/
│ ├── index.html
│ ├── styles.css
│ └── scripts.js
│
├── Routes/
│ └── alumnos.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```
---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/Nicolas-85/Gestion-Intitutos-SEAC.git
cd Gestion-Intitutos-SEAC
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar la base de datos
Crear una base de datos en MySQL Workbench (por ejemplo InstitutoEducativoSEAC)
y ajustar las credenciales en el archivo:

Db/conexion.js
```JS
import mysql from 'mysql2';

export const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'InstitutoEducativoSEAC'
});
```

### 💾 Script para crear la base de datos

Antes de ejecutar la aplicación, se debe crear la base de datos y la tabla principal en MySQL.
A continuación se muestra el script SQL necesario para generar la estructura utilizada por el sistema:

```Sql
CREATE DATABASE InstitutoEducativoSEAC;
USE InstitutoEducativoSEAC;

CREATE TABLE alumnos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  dni VARCHAR(20) NOT NULL,
  nacionalidad VARCHAR(50),
  genero VARCHAR(20),
  fecha_nacimiento DATE,
  direccion VARCHAR(100),
  email VARCHAR(100),
  contacto_emergencia VARCHAR(100),
  telefono VARCHAR(20)
);
```

### 4️⃣ Ejecutar el proyecto

Modo desarrollo (con reinicio automático):
```bash
npm run dev
```

Modo normal:
```bash
npm start
```

El sistema se ejecutará en:
http://localhost:3000
