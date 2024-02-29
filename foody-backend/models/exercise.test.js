const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Exercise = require("./exercise.js");
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
  const newExercise = {
    name: "curl",
    muscle: "biceps",
    instructions: "New Description",
    difficulty: "beginner",
    user_id: "u1",
    type: "strength",
    equipment: "dumbell",
  };

  test("create a new exercise", async () => {
    const res = await Exercise.addExercise(newExercise);
    expect(res).toEqual(newExercise);
  });

  test("remove exercise", async () => {
    const exercise = await db.query(
      `SELECT * FROM exercises WHERE user_id='u1'`,
    );
    const { name, user_id } = exercise.rows[0];

    const res = await Exercise.removeExercise({
      name: name,
      user_id: user_id,
    });
    expect(res).toEqual({ name: name });
  });
});
