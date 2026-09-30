import {conectarDB} from '../config/data.js';

class CandidatoRepository {
  async guardar(candidato) {
    const db = await conectarDB();
    const query = 'INSERT INTO Candidato(nombre, email, anos_experiencia) VALUES (?, ?, ?)';
    const [resultado] = await db.execute(query, [
      candidato.nombre,
      candidato.email,
      candidato.anos_experiencia
    ]);

    return {
      id: resultado.insertId,
      nombre: candidato.nombre,
      emai: candidato.email,
      anos_experiencia: candidato.anos_experiencia
    };
  }

  async obtenerTodos() {
    const db = await conectarDB();
    const query = 'SELECT * FROM Candidato';
    const [filas] = await db.execute(query);
    return filas;
  }

  async obtenerID(id) {
    const db = await conectarDB();
    const query = 'SELECT * FROM Candidato WHERE id = ?';
    const [filas] = await db.execute(query, [id]);

    if (filas.length === 0) {
      return null;
    }
    return filas[0];
  }

  async actualizar(alimentacion) {
    const db = await conectarDB();
    const query = 'UPDATE Candidato SET nombre = ?, email = ? WHERE id = ?';
    const [resultado] = await db.execute(query, [
        candidato.nombre,
        candidato.email
    ]);

    return resultado.affectedRows > 0;
  }

  async eliminar(id) {
    const db = await conectarDB();
    const query = 'DELETE FROM Candidato WHERE id = ?';
    const [resultado] = await db.execute(query, [id]);

    return resultado.affectedRows > 0;
  }
}

export default CandidatoRepository