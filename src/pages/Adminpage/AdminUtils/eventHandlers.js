function handleInputChange(setProductData) {
  return function(name, value) {
    setProductData(prevState => ({
      ...prevState,
      [name]: ['inventory_stock', 'labels', 'categories'].includes(name) ? Number(value) : value,
    }));
  }
}

function handleImageChange(setProductData) {
  return function(name, value){
    setProductData(prevState => ({
      ...prevState,
      images: [{ ...prevState.images[0], [name]: value }],
    }));
  }
}

function handlePriceOrDateChange(setProductData, setPrices) {
  return function(name, index) {
    return function(value) {
      setProductData(prevState => {
        const updatedPrices = [...prevState.prices];
        updatedPrices[index] = { ...updatedPrices[index], [name]: name === 'price' ? Number(value) : value };
        return { ...prevState, prices: updatedPrices };
      });
      if (setPrices){
      setPrices(prevPrices => {
        const updatedPrices = [...prevPrices];
        updatedPrices[index] = { ...updatedPrices[index], [name]: name === 'price' ? Number(value) : value };
        return updatedPrices;
      });
      }
    }
  }
}

function handleIsCampaignChange(setProductData, setPrices) {
  return function(index) {
    return function(value) {
      setProductData(prevState => {
        const updatedPrices = [...prevState.prices];
        updatedPrices[index] = { ...updatedPrices[index], is_campaign: value };
        return { ...prevState, prices: updatedPrices };
      });
      if (setPrices){
      setPrices(prevPrices => {
        const updatedPrices = [...prevPrices];
        updatedPrices[index] = { ...updatedPrices[index], is_campaign: value };
        return updatedPrices;
        
      });
    }
    }
  }
}

function handleSelectChange(setState) {
  return function (name, value) {
    setState(prevState => ({
      ...prevState,
      [name]: Array.isArray(Number(value)) ? Number(value) : [Number(value)],
    }));
  };
}

export { handleInputChange, handleImageChange, handlePriceOrDateChange, handleIsCampaignChange, handleSelectChange }