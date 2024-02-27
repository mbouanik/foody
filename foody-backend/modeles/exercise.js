const db = require("../db");

class Exercise {
  static async addExercise(data) {
    const { user_id, name, equipment, type, muscle, difficulty, instructions } =
      data;

    const res = await db.query(
      `INSERT INTO exercises (user_id, name, equipment, type, muscle, difficulty, instructions)
        VALUES ($1,$2, $3, $4, $5, $6, $7) RETURNING (user_id, name, equipment, type, muscle, difficulty, instructions)`,
      [user_id, name, equipment, type, muscle, difficulty, instructions],
    );
    return res.rows[0];
  }

  static async removeExercise(data) {
    const { name, user_id } = data;
    const res = await db.query(
      `DELETE FROM exercises WHERE name=$1 AND user_id=$2 RETURNING name`,
      [name, user_id],
    );
    return res;
  }
}

module.exports = Exercise;
