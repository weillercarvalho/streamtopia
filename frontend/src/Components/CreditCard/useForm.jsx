import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiration: "",
    cardSecurityCode: "",
  });

  const handleCallback = (_ref, isValid) => {
    if (isValid) {
      setValues({
        ...values,
        issuer: _ref.issuer,
      });
    }
  };

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return { handleChange, handleFocus, values };
};

export default useForm;
