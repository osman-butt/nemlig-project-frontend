// Creates a new object that includes all existing properties from 'productData',
// updates the property specified by 'name' with the new value, and sets this new object as the new state in 'productData'.
function handleInputChange(setProductData) {
  return function (name, value) {
    setProductData((prevState) => ({
      ...prevState,
      [name]: name === "inventory_stock" ? Number(value) : value,
    }));
  };
}

// Creates a copy of the array specified by 'type' from 'productData', updates the item at the given index with the new value,
// (converting to a number if the field is 'price' in 'prices'),
// and sets this new array as the new state for the array specified by 'type' in 'productData'.
function handleArrayChange(setProductData, setArray, type) {
  return function (name, index) {
    return function (value) {
      setProductData((prevState) => {
        const updatedArray = [...prevState[type]];
        updatedArray[index] = { ...updatedArray[index], [name]: type === "prices" && name === "price" ? Number(value) : value };
        return { ...prevState, [type]: updatedArray };
      });
      if (setArray) {
        setArray((prevArray) => {
          const updatedArray = [...prevArray];
          updatedArray[index] = { ...updatedArray[index], [name]: type === "prices" && name === "price" ? Number(value) : value };
          return updatedArray;
        });
      }
    };
  };
}

// Creates a copy of the array specified by 'type' from 'productData', updates the item at the given index with the new value,
//(converted to a number), and sets this new array as the new state for the array specified by 'type' in 'productData'.
function handleSelectChange(setProductData, setArray, type) {
  return function (index) {
    return function (value) {
      setProductData((prevState) => {
        const updatedArray = [...prevState[type]];
        updatedArray[index] = Number(value);
        return { ...prevState, [type]: updatedArray };
      });
      if (setArray) {
        setArray((prevArray) => {
          const updatedArray = [...prevArray];
          updatedArray[index] = Number(value);
          return updatedArray;
        });
      }
    };
  };
}

export { handleInputChange, handleArrayChange, handleSelectChange };
