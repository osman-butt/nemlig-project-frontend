// usage
// Initialize: const {getItem, setItem, removeItem} = useLocalStorage("cart")
// Save to localstorage: setItem(basket)
// Get from localstorage: getItem()
// Remove from localStorage: removeItem()

// implementation
export default function useLocalStorage(key) {
  function setItem(value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }

  function getItem() {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  }

  function removeItem() {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getItem,
    setItem,
    removeItem,
  };
}
