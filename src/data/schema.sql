CREATE DATABASE desarrollo_backend;
USE desarrollo_backend;

CREATE TABLE Candidato(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    anos_experiencia VARCHA(20) NOT NULL DEFAULT 'Sin experiencia'
)ENGINE=InnoDB;

CREATE TABLE Vacante(
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo_cargo VARCHAR(100) NOT NULL,
    experiencia_minima_requerido INT NOT NULL,
      estado ENUM('true', 'false') DEFAULT 'true'
)ENGINE=InnoDB;
  

CREATE TABLE Postulacion(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_candidato INT NOT NULL,
    id_vacante INT NOT NULL,
    fuente_Postulacion ENUM('Referido', 'Colaborador', 'Portal de empleo', 'Otro') DEFAULT 'Otro',
    puntaje DECIMAL(2,2) CHECK(puntaje > 0) NOT NULL,
    prioridad ENUM('Bajo', 'Medio ', 'Alto') DEFAULT 'Bajo ' NOT NULL,
    estado ENUM('Recibido', 'En proceso', 'Rechazado', 'Contratado') DEFAULT 'Recibido',
    fecha_creacion DATETIME CURRENT_TIMESTAMP NOT NULL,
    fecha_actualizada DATETIME NOT NULL,

    FOREIGN KEY (id_candidato) REFERENCES Candidato(id),
    FOREIGN KEY (id_vacante) REFERENCES Vacante(id)
)ENGINE=InnoDB;