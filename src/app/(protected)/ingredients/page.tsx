import IngredientTable from "@/components/UI/tables/ingredients";
import IngredientForm from "@/forms/ingridient.form";

const IngredientsPage = () => {
  return (
    <div>
      <IngredientForm />
      <IngredientTable />
    </div>
  );
};

export default IngredientsPage;