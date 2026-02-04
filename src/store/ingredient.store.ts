import { createIngredient, deleteIngredient, getIngredients } from "@/actions/ingredient";
import { IIngredient } from "@/types/ingredients";
import { create } from "zustand";

interface IngredientState {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;
    loadIngredients: () => Promise<void>;
    addIngredient: (formData: FormData) => Promise<void>;
    removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>((set) => ({
    ingredients: [],
    isLoading: false,
    error: null,
    loadIngredients: async () => {
        set({ isLoading: true, error: null });

        try {
            const res = await getIngredients();
            if (res.success) {
                set({ ingredients: res.ingredients, isLoading: false });
            } else {
                set({ error: res.error, isLoading: false });
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "An error in obtaining the ingredients", isLoading: false });
        }
    },
    addIngredient:  async (formData: FormData) => {
        set({ isLoading: true, error: null });
        try {
            const res = await createIngredient(formData);

            if (res.success) {
                set((state) => ({
                    ingredients: [...state.ingredients, res.ingredient],
                    isLoading: false
                }));
            } else {
                set({ error: res.error, isLoading: false });
            }
        } catch(error) {
            console.log("error", error);
            set({ error: "Ingredient creation error", isLoading: false });
        }
    },
    removeIngredient: async (id: string) => {
        set({ isLoading: true, error: null });
        try{
            const res = await deleteIngredient(id);
            if (res.success) {
                set((state) => ({
                    ingredients: state.ingredients.filter(
                        (ingredient) => ingredient.id !== id
                    ),
                    isLoading: false
                }));
            } else {
                set({ error: res.error, isLoading: false });
            }
        } catch(error) {
            console.log("error", error);
            set({ error: "An error occurred while deleting an ingredient", isLoading: false });
        }
    }
}))