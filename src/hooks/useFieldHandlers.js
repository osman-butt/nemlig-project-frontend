function useFieldHandlers(setState, setProductData) {
    function addField(fieldType) {
      const field = fieldType === 'prices' ? { price: "", starting_at: "", is_campaign: false, ending_at: "" } :
                    fieldType === 'images' ? { image_url: "" } :
                    0; // for 'label' and 'category'
  
      setState(prevState => {
        const newState = [...prevState, field];
        if (setProductData) {
          setProductData(prevData => ({ ...prevData, [fieldType]: newState }));
        }
        return newState;
      });
    }
  
    function removeField(fieldType, index) {
      setState(prevState => {
        const newState = prevState.filter((_, i) => i !== index);
        if (setProductData) {
          setProductData(prevData => ({ ...prevData, [fieldType]: newState }));
        }
        return newState;
      });
    }
  
    return { addField, removeField };
  }

  export default useFieldHandlers;