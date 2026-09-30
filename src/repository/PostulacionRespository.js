import {conectarDB} from '../config/data.js';

class PostulacionRepository {
  async guardar(postulacion) {
    const db = await conectarDB();
    const query = 'INSERT INTO Candidato(id_candidato, id_vacante, fuente_Postulacion, puntaje, prioridad, estado, fecha_creacion, fecha_actualizada) VALUES (?, ?, ?, ?, ?,?,?,?)';
    const [resultado] = await db.execute(query, [
      postulacion.id_candidato,
      postulacion.id_vacante,
      postulacion.fuente_Postulacion,
      postulacion.puntaje,
      postulacion.prioridad,
      postulacion.estado,
      postulacion.fecha_creacion,
      postulacion.fecha_actualizada
    ]);

    return {
      id: resultado.insertId,
      id_candidato:postulacion.id_candidato,
      id_vacante:postulacion.id_vacante,
      fuente_Postulacion:postulacion.fuente_Postulacion,
      puntaje:postulacion.puntaje,
      prioridad:postulacion.prioridad,
      estado:postulacion.estado,
      fecha_creacion:postulacion.fecha_creacion,
      fecha_actualizada: postulacion.fecha_actualizada
    };
  }

  async obtenerTodos() {
    const db = await conectarDB();
    const query = 'SELECT * FROM Postulacion';
    const [filas] = await db.execute(query);
    return filas;
  }

  async obtenerID(id) {
    const db = await conectarDB();
    const query = 'SELECT * FROM Postulacion WHERE id = ?';
    const [filas] = await db.execute(query, [id]);

    if (filas.length === 0) {
      return null;
    }
    return filas[0];
  }

  async actualizar(postulacion) {
    const db = await conectarDB();
    const query = 'UPDATE Postulacion SET fuente_Postulacion = ?, puntaje = ?, prioridad =?, WHERE id = ?';
    const [resultado] = await db.execute(query, [
        postulacion.fuente_Postulacion,
        postulacion.puntaje,
        postulacion.prioridad,
        postulacion.estado
    ]);

    return resultado.affectedRows > 0;
  }

  async eliminar(id) {
    const db = await conectarDB();
    const query = 'DELETE FROM Postulacion WHERE id = ?';
    const [resultado] = await db.execute(query, [id]);

    return resultado.affectedRows > 0;
  }
}

export default PostulacionRepository;