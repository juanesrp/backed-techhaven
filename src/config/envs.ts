import dotenv from "dotenv";
dotenv.config();

export const PORT: number = Number(process.env.PORT) || 3001;
export const DATABASE_URL: string = process.env.DATABASE_URL || "";
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
