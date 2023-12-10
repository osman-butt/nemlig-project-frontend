import  SelectField from "../InputFields/SelectFields.jsx";

export default function CategoryFields({ categories, categoryData, handleCategoryChangeInstance, removeCategoryField, addCategoryField }) {
  return (
    <>
      {categories.map((_, index) => (
        <div key={index}>
          <SelectField
            name={`categories`}
            value={categories[index] || ""}
            onChange={(event) => handleCategoryChangeInstance(index)(event.target.value)}
            options={categoryData.map((category) => ({ id: category.category_id, name: category.category_name }))}
            placeholder="Vælg kategori"
          />
          <div className="flex flex-row justify-between font-bold">
            <button type="button" onClick={() => removeCategoryField(index)}>Fjern kategori</button>
            <button type="button" onClick={() => addCategoryField()}>Tilføj kategori</button>
          </div>
        </div>
      ))}
    </>
  );
}