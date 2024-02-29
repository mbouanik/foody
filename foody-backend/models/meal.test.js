const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Meal = require("./meal.js");
const defaultImg =
  "https://st.depositphotos.com/1169330/3838/i/450/depositphotos_38389483-stock-photo-recipe-book.jpg";
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("./_testCommon.js");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("create and delete", function () {
  test("create meal", async () => {
    const newMeal = {
      title: "t1",
      calories: 23,
      carbs: "23g",
      protein: "23g",
      fat: "23g",
      image: defaultImg,
      user_id: "u1",
      id: 234,
    };

    const res = await Meal.addMeal(newMeal);
    expect(res).toEqual(newMeal);
  });

  test("remove meal", async () => {
    const meal = await db.query(`SELECT * FROM meals WHERE user_id='u1'`);
    const { id, user_id } = meal.rows[0];

    const res = await Meal.removeMeal({ id, user_id });
    expect(res).toEqual({ id: id, user_id: user_id });
  });
});
