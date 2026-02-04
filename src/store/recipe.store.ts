import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from "@/actions/recipe";
import { IRecipe } from "@/types/recipe";
import { create } from "zustand";

interface IActionResult {
    success: boolean;
    recipe?: IRecipe;
    error?: string;
}

interface IRecipeState {
    recipes: IRecipe[];
    isLoading: boolean;
    error: string| null;
    loadRecipes: () => Promise<void>;
    addRecipe: (formData: FormData) => Promise<IActionResult>;
    updateRecipe: (id: string, formData: FormData) => Promise<IActionResult>;
    removeRecipe: (id: string) => Promise<void>;
}

export const useRecipeStore = create<IRecipeState>((set) => ({
    recipes: [],
    isLoading: false,
    error: null,
    loadRecipes: async () => {
        set({ isLoading: true, error: null });

        try {
            const res = await getRecipes();
            if (res.success) {
                set({ recipes: res.recipes, isLoading: false });
            } else {
                set({ error: res.error, isLoading: false });
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Error fetching recipes", isLoading: false });
        }
    },
    addRecipe: async (formData: FormData) => {
        set({ error: null });

        try {
            const res = await createRecipe(formData);
            if (res.success) {
                set((state) => ({
                    recipes: [...state.recipes, res.recipe!],
                    isLoading: false
                }));
                return { success: true, recipe: res.recipe };
            } else {
                set({ error: res.error, isLoading: false });
                return { success: false, error: res.error };
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Error adding recipe", isLoading: false });
            return { success: false, error: "Error adding recipe" };
        }
    },
    updateRecipe: async (id: string, formData: FormData) => {
        set({ error: null });

        try {
            const res = await updateRecipe(id, formData);
            if (res.success) {
                set((state) => ({
                    recipes: state.recipes.map((recipe) => recipe.id === id ? res.recipe! : recipe),
                    isLoading: false
                }));
                return { success: true, recipe: res.recipe };
            } else {
                set({ error: res.error, isLoading: false });
                return { success: false, error: res.error };
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Error updating recipe", isLoading: false });
            return { success: false, error: "Error updating recipe" };
        }
    },
    removeRecipe: async (id: string) => {
        set({ error: null });
        try {
            const res = await deleteRecipe(id);
            if (res?.success) {
                set((state) => ({
                    recipes: state.recipes.filter((recipe) => recipe.id !== id),
                    isLoading: false
                }));
            } else {
                set({ error: res?.error, isLoading: false });
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Error daleting recipe", isLoading: false });
        }
    }
}))