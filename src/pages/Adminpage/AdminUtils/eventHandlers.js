function handleInputChange(setProductData) {
  return function(event) {
    const { name, value } = event.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: ['inventory_stock', 'labels', 'categories'].includes(name) ? Number(value) : value,
    }));
  }
}

  function handleImageChange(setProductData) {
    return function(event){
    setProductData(prevState => ({
      ...prevState,
      images: [{ ...prevState.images[0], image_url: event.target.value }],
    }));
  }
}

  function handlePriceOrDateChange(setProductData) {
    return function(event) {
      const { name, value } = event.target;
      setProductData(prevState => ({
        ...prevState,
        prices: [{ ...prevState.prices[0], [name]: name === 'price' ? Number(value) : value }],
      }));
    }
  }

  function handleIsCampaignChange(setProductData) {
    return function(event) {
    setProductData(prevState => ({
      ...prevState,
      prices: [{ ...prevState.prices[0], is_campaign: event.target.checked }],
    }));
  }
}

function handleSelectChange(setProductData) {
  return function(event) {
    const {name, value} = event.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: name === "labels" ? [...prevState.labels, Number(value)] : [...prevState.categories, Number(value)]
    }));
  }
}

export { handleInputChange, handleImageChange, handlePriceOrDateChange, handleIsCampaignChange, handleSelectChange}