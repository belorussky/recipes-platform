import { object, string, number } from "zod"
import { z } from "zod";
 
export const signInSchema = object({
  email: string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string()
    .min(1, "Password is required")
    .min(6, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const ingredientSchema = object({
  name: string().min(1, "This field is required"),
  category: z.enum([
    "VEGETABLES",
    "FRUITS",
    "MEAT",
    "DIARY",
    "SPICES",
    "OTHER"
  ]),
  unit: z.enum([
    "GRAMS",
    "KILOGRAMS",
    "LITERS",
    "MILILITERS",
    "PIECES"
  ]),
  pricePerUnit: number()
    .min(0, "The price must be more than zero")
    .nullable(),
  description: z.string().optional()
});