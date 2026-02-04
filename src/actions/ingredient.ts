"use server";

import { ingredientSchema } from "@/schema/zod";
import prisma from "@/utils/prisma";
import { success, ZodError } from "zod";

export async function createIngredient(formData: FormData) {
    try {
        const data = {
            name: formData.get("name") as string,
            category: formData.get("category") as string,
            unit: formData.get("unit") as string,
            pricePerUnit: formData.get("pricePerUnit")
                ? parseFloat(formData.get("pricePerUnit") as string)
                : null,
            description: formData.get("description") as string,
        }

        const validateData = ingredientSchema.parse(data);
        const ingredient = await prisma.ingredient.create({
            data: {
                name: validateData.name,
                category: validateData.category,
                unit: validateData.unit,
                pricePerUnit: validateData.pricePerUnit,
                description: validateData.description
            }
        })

        return { success: true, ingredient };
    } catch (error) {
        if (error instanceof ZodError) {
            return { error: error.issues.map((e) => e.message).join(", ") };
        }
        console.error("Ingredient creation error", error);
        return { error: "Error when creating an ingredient" };
    }
}

export async function getIngredients() {
    try {
        const ingredients = await prisma.ingredient.findMany();
    
        return { success: true, ingredients };
    } catch(error) {
        console.error("An error in obtaining the ingredients", error);
        return { error: "An error in obtaining the ingredients" };
    }
}

export async function deleteIngredient(id: string) {
    try {
        const ingredient = await prisma.ingredient.delete({
            where: { id }
        });
    
        return { success: true, ingredient };
    } catch(error) {
        console.error("An error occurred while deleting an ingredient", error);
        return { error: "An error occurred while deleting an ingredient" };
    }
}
