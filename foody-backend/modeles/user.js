const db = require("../db");

class User {
  static async checkeUser(id) {
    console.log(` checkeUser : ${id}`);
    const res = await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
    if (res.rows.length == 0) {
      await db.query(
        `INSERT INTO users (id, diet) VALUES ($1, $2) RETURNING *`,
        [id, ""],
      );
    }
    return this.getCurrentUser(id);
  }

  static async getCurrentUser(id) {
    console.log(`getUser ${id}`);
    const res = await db.query(`SELECT id, diet FROM users WHERE id = $1`, [
      id,
    ]);
    const mealsRes = await db.query(`SELECT * FROM meals WHERE user_id=$1`, [
      id,
    ]);
    const exercisesRes = await db.query(
      `SELECT * FROM exercises WHERE user_id=$1`,
      [id],
    );
    const user = res.rows[0];
    user.meals = mealsRes.rows;
    user.exercises = exercisesRes.rows;
    return user;
  }

  static async updateDiet(id, diet) {
    const res = await db.query(
      `UPDATE users SET diet=$1 WHERE id=$2 RETURNING diet`,
      [diet, id],
    );
    return res.rows[0];
  }
}
module.exports = User;
