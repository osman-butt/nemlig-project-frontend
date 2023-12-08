import { useState } from "react";

export default function Snackbar() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  const handleAddToBasket = () => {
    // Logic for adding item to basket goes here
    // For example:
    // addToBasket(item);

    // Update state to show the snackbar and mark item as added
    setShowSnackbar(true);
    setItemAdded(true);

    // Hide snackbar after 3 seconds (adjust timeout as needed)
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const handleUndo = () => {
    // Logic for removing item from basket goes here
    // For example:
    // removeFromBasket(item);

    // Update state to hide snackbar and mark item as not added
    setShowSnackbar(false);
    setItemAdded(false);
  };

  return (
    <div>
      <button onClick={handleAddToBasket}>Add to Basket</button>
      {showSnackbar && (
        <div>
          <span>Item added to basket</span>
          <button onClick={handleUndo}>Undo</button>
        </div>
      )}
    </div>
  );
}
