import { db, pool } from "../server/db";
import * as schema from "../server/db/schema";
import { seed } from "drizzle-seed";

const seedDb = async () => {
  await seed(db, schema).refine((funcs) => ({
    todos: {
      columns: {
        title: funcs.valuesFromArray({
          values: [
            "Buy groceries",
            "Walk the dog",
            "Read a book",
            "Write code",
            "Exercise",
          ],
        }),
        description: funcs.valuesFromArray({
          values: [
            "Milk, Bread, Eggs, Cheese",
            "Take Fido for a walk in the park",
            "Finish reading 'The Great Gatsby'",
            "Work on the new project",
            "Go for a run or do a workout",
          ],
        }),
      },
    },
  }));
};

seedDb()
  .then(() => {
    console.log("Database seeded successfully");
    return pool.end();
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    return pool.end();
  });
