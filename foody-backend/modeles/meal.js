const db = require("../db");

class Meal {
  static async addMeal(meal) {
    const { calories, carbs, fat, image, protein, id, title, user_id } = meal;
    const defaultImg =
      "https://st.depositphotos.com/1169330/3838/i/450/depositphotos_38389483-stock-photo-recipe-book.jpg";
    const res = await db.query(
      `INSERT INTO meals (calories, carbs, fat, image, protein, id, title, user_id )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING calories, carbs, fat, image, protein, id, title, user_id`,
      [
        calories,
        carbs,
        fat,
        image ? image : defaultImg,
        protein,
        id,
        title,
        user_id,
      ],
    );
    return res.rows[0];
  }
  static async removeMeal(id) {
    const res = await db.query(`DELETE FROM meals WHERE id= $1 RETURNING *`, [
      id,
    ]);
  }
}

module.exports = Meal;
