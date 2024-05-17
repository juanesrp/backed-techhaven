import { PORT, DATABASE_URL } from "./config/envs";
import app from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const initialize = async () => {
  try {
    console.log("Initializing server");
    await AppDataSource.initialize();
    console.log("Database initialized");
    await preLoadCategories();
    console.log("Categories preloaded2");
    await preLoadProducts();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error initializing server:", error);
  }
};

initialize();
