import React from "react";
import useForm from "./useForm";
import { Form, Alert, Row, Col } from "react-bootstrap";
import "./styles.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Render from "../Button3D/Render";
import { useContext } from "react";
import { userContext } from "../../Hooks/userContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledContainer } from "../Toastify/Toast";
import { getPayment, postPayment } from "../../Services/Services";
import { useEffect } from "react";
import { useState } from "react";

const CreditCard = () => {
  const { handleChange, handleFocus, values } = useForm();
  const [data, setData] = useState("");
  const { packageValue } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    getPayment().then(r => {
      setData(r.data);
      console.log(r.data);
    }).catch((r) => {
      console.log(r)
    })
    if (data) {
      navigate("/userchoise")
    }
  },[]);
  function handlePayment(e) {
    e.preventDefault();
    if (values.cardName === "" || !values.cardName.trim()) {
      return toast.info("Cardholder name is not complete", {
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
    if (values?.cardNumber === "" || !values.cardNumber.trim()) {
      return toast.info("Credit card number is not complete", {
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
    if (values?.cardExpiration === "" || !values.cardExpiration.trim()) {
      return toast.info("Credit card expiration date is not complete", {
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
    if (values?.cardSecurityCode === "" || !values?.cardSecurityCode.trim()) {
      return toast.info("Credit card CVC is not complete", {
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
      values?.cardExpiration !== "" &&
      values?.cardName !== "" &&
      values?.cardNumber !== "" &&
      values?.cardSecurityCode !== "" &&
      packageValue !== ""
    ) {
      toast("Done!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const body = {
        lastNumbers: values.cardNumber.substring(-4),
        name: values.cardName,
        expirationDate: values.cardExpiration,
        cvv: values.cardSecurityCode,
        packageValue: packageValue,
      };
      postPayment(body)
        .then((r) => {
          console.log(r);
          navigate("/userchoice");
        })
        .catch((r) => {
          console.log(r);
        });
    }
  }

  return (
    <div>
      <div className="container">
        <div className="box justify-content-center align-items-center">
          <div className="formDiv">
            <div className="creditCard">
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form onSubmit={handlePayment}>
              <Form.Group className="forms">
                <Form.Control
                  type="text"
                  id="cardName"
                  data-testid="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </Form.Group>
              <Form.Group className="forms">
                <Form.Control
                  type="number"
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onFocus={handleFocus}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="forms">
                    <Form.Control
                      type="text"
                      id="cardExpiration"
                      data-testid="cardExpiration"
                      name="cardExpiration"
                      placeholder="Expiration Date"
                      value={values.cardExpiration}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="forms">
                    <Form.Control
                      type="number"
                      id="cardSecurityCode"
                      data-testid="cardSecurityCode"
                      name="cardSecurityCode"
                      placeholder="Security Code"
                      value={values.cardSecurityCode}
                      onChange={handleChange}
                      onFocus={handleFocus}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Render name="Pay" />
            </Form>
            <StyledContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
