const db = require("../db");

class User {
  static async checkeUser(id) {
    console.log(`${id}`);
    const res = await db.query(`SELECT id FROM users WHERE id = $1`, [id]);
    if (res.rows.length == 0) {
      return (
        await db.query(`INSERT INTO users (id) VALUES ($1) RETURNING id`, [id])
      ).rows[0];
    }
    const user = res.rows[0];
    const mealsRes = await db.query(`SELECT * FROM meals WHERE user_id=$1`, [
      id,
    ]);
    user.meals = mealsRes.rows;
    return user;
  }

  static async getCurrentUser(id) {
    const res = await db.query(`SELECT id FROM users WHERE id = $1`, [id]);
    const user = res.rows[0];
    const meals = await db.query(`SELECT * FROM meals WHERE user_id=$1`, [id]);
    user.meals = meals.rows;
    return user;
  }
}
module.exports = User;
