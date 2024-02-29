const db = require("../db.js");
const defaultImg =
  "https://st.depositphotos.com/1169330/3838/i/450/depositphotos_38389483-stock-photo-recipe-book.jpg";

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");

  await db.query(
    `INSERT INTO users (id, diet)
        VALUES ('u1', 'ketogenic')`,
  );
  await db.query(`
    INSERT INTO meals (title, user_id, id, calories, carbs, protein, fat, image )
    VALUES ('m1', 'u1', ${1}, ${120}, '12g', '23g', '10g', 
'https://st.depositphotos.com/1169330/3838/i/450/depositphotos_38389483-stock-photo-recipe-book.jpg') `);

  await db.query(`
      INSERT INTO exercises (name, user_id, muscle, instructions, equipment, difficulty, type)
      VALUES ('e1', 'u1', 'biceps', 'do this', 'dumbell', 'beginner', 'strength') `);
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
};
