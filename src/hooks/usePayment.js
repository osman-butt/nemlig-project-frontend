import { useState } from "react";

function usePayment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const formatCreditCardNumber = input => {
    // Remove any non-numeric characters
    const numericOnly = input.replace(/\D/g, "");

    // Split the string into groups of 4 digits
    const groups = numericOnly.match(/(\d{1,4})/g);

    // Join the groups with a space
    const formattedNumber = groups ? groups.join(" ") : "";

    return formattedNumber;
  };

  const handleCardNumberChange = input => {
    // Format the input and set the state
    const formattedNumber = formatCreditCardNumber(input);
    if (formattedNumber.length < 20) setCardNumber(formattedNumber);
  };

  const handleExpiryChange = input => {
    const str = input.replace("/", "");
    const month = str.slice(0, 2);
    console.log(month);
    if (Number(month) < 13) {
      const year = str.slice(2, 4);
      console.log(year);
      !year ? setExpiry(month) : setExpiry(month + "/" + year);
    }
  };

  const handleCvcChange = input => {
    if (Number(input) < 999) {
      setCvc(input);
    }
  };
  return {
    cardNumber,
    expiry,
    cvc,
    handleCardNumberChange,
    handleExpiryChange,
    handleCvcChange,
  };
}

export default usePayment;
