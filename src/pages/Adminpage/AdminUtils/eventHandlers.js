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

function handleIsCampaignChange(setProductData, setPrices) {
  return function (index) {
    return function (value) {
      setProductData((prevState) => {
        const updatedPrices = [...prevState.prices];
        updatedPrices[index] = { ...updatedPrices[index], is_campaign: value };
        return { ...prevState, prices: updatedPrices };
      });
      if (setPrices) {
        setPrices((prevPrices) => {
          const updatedPrices = [...prevPrices];
          updatedPrices[index] = { ...updatedPrices[index], is_campaign: value };
          return updatedPrices;
        });
      }
    };
  };
}

function handleSelectChange(setProductData) {
  return function (name, value) {
    setProductData((prevState) => ({
      ...prevState,
      [name]: [Number(value)],
    }));
  };
}

export { handleInputChange, handleImageChange, handlePriceOrDateChange, handleIsCampaignChange, handleSelectChange };
