function handleInputChange(setProductData) {
  return function (name, value) {
    setProductData((prevState) => ({
      ...prevState,
      [name]: name === "inventory_stock" ? Number(value) : value,
    }));
  };
}

function handleImageChange(setProductData, setImages) {
  return function (name, index) {
    return function (value) {
    setProductData((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages[index] = { ...updatedImages[index], [name]: value };
      return { ...prevState, images: updatedImages };
    });
    if (setImages){
      setImages((prevImages) => {
        const updatedImages = [...prevImages];
        updatedImages[index] = { ...updatedImages[index], [name]: value };
        return updatedImages;
      })
    }
  };
  };
}


function handlePriceOrDateChange(setProductData, setPrices) {
  return function (name, index) {
    return function (value) {
      setProductData((prevState) => {
        const updatedPrices = [...prevState.prices];
        updatedPrices[index] = { ...updatedPrices[index], [name]: name === "price" ? Number(value) : value };
        return { ...prevState, prices: updatedPrices };
      });
      if (setPrices) {
        setPrices((prevPrices) => {
          const updatedPrices = [...prevPrices];
          updatedPrices[index] = { ...updatedPrices[index], [name]: name === "price" ? Number(value) : value };
          return updatedPrices;
        });
      }
    };
  };
}

function handleSelectChange(setProductData, setLabels) {
  return function (index) {
    return function (value){
    setProductData((prevState) => {
      const updatedLabels = [...prevState.labels];
      updatedLabels[index] = Number(value)
      return { ...prevState, labels: updatedLabels };
    });
    if (setLabels){
      setLabels((prevLabels) => {
        const updatedLabels = [...prevLabels];
        updatedLabels[index] = Number(value)
        return updatedLabels;
      })
    }
    }
  };
}

function handleCategoryChange(setProductData, setCategories){
  return function (index){
    return function (value){
      setProductData((prevState) => {
        const updatedCategories = [...prevState.categories];
        updatedCategories[index] = Number(value)
        return { ...prevState, categories: updatedCategories };
      });
      if (setCategories){
        setCategories((prevCategories) => {
          const updatedCategories = [...prevCategories];
          updatedCategories[index] = Number(value)
          return updatedCategories;
        })
      }
  }
}
}

export { handleInputChange, handleImageChange, handlePriceOrDateChange, handleSelectChange, handleCategoryChange };
