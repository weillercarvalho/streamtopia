import valid from "card-validator";
import { toast } from "react-toastify";

export default function validateInfo(values) {
  let errors = {};
  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);

  errors.show = true;
  errors.variant = "danger";
  errors.message = ""
  errors.cname = false;
  errors.cnumber = false;
  errors.cexp = false;
  errors.ccvv = false;
  console.log(values.cardSecurityCode)
  //Card CVV expiration
  if (values.cardSecurityCode === "" || !values.cardSecurityCode.trim()) {
    toast.info("Credit card CVC is not complete", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return;
  } else if (creditCard.cvv.isValid) {
    errors.ccvv = true;
  } else {
    toast.info("Credit card CVC is invalid", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    toast.info("Credit card expiration date is not complete", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    toast.info("Credit card expiration date is invalid", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  if (values.cardNumber === null || !values.cardNumber.trim()) {
    toast.info("Credit card number is not complete", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    toast.info("Credit card number is invalid", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  if (values.cardName === null || !values.cardName.trim()) {
    toast.info("Cardholder name is not complete", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    toast.info("Cardholder name is invalid", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  if (
    errors.cname &&
    errors.cnumber &&
    errors.cexp &&
    errors.ccvv
  ) {
    errors.variant = "success";
    errors.message = "Credit Card is valid";
  }

  return errors;
}