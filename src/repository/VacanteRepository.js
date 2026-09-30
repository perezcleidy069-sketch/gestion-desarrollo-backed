import {conectarDB} from '../config/data.js';

class VacanteRepository {
  async guardar(vacante) {
    const db = await conectarDB();
    const query = 'INSERT INTO Vacante(titulo_cargo, experiencia_minima_requerido, estado) VALUES (?, ?, ?)';
    const [resultado] = await db.execute(query, [
      vacante.titulo_cargo,
      vacante.experiencia_minima_requerido,
      vacante.estado
    ]);

    return {
      id: resultado.insertId,
      titulo_cargo:vacante.titulo_cargo,
      experiencia_minima_requerido:vacante.experiencia_minima_requerido,
      estado: vacante.estado
    };
  }

  async obtenerTodos() {
    const db = await conectarDB();
    const query = 'SELECT * FROM Vacante';
    const [filas] = await db.execute(query);
    return filas;
  }

  async obtenerID(id) {
    const db = await conectarDB();
    const query = 'SELECT * FROM Vacante WHERE id = ?';
    const [filas] = await db.execute(query, [id]);

    if (filas.length === 0) {
      return null;
    }
    return filas[0];
  }

  async actualizar(alimentacion) {
    const db = await conectarDB();
    const query = 'UPDATE Vacante SET titulo_cargo= ?, experiencia_minima_requerida = ?,  estado = ? WHERE id = ?';
    const [resultado] = await db.execute(query, [
        vacante.titulo_cargo,
        vacante.experiencia_minima_requerido,
        vacante.estado
    ]);

    return resultado.affectedRows > 0;
  }

  async eliminar(id) {
    const db = await conectarDB();
    const query = 'DELETE FROM Vacante WHERE id = ?';
    const [resultado] = await db.execute(query, [id]);

    return resultado.affectedRows > 0;
  }
}

export default CandidatoRepository