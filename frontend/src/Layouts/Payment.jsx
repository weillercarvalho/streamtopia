import CreditCard from "../Components/CreditCard/CreditCard";
import styled from "styled-components";
import { useContext } from "react";
import { userContext } from "../Hooks/userContext";
import { useEffect } from "react";
import { ImagePayment } from "../Components/Style/Father";

export default function Payment() {
  const { packageValue } = useContext(userContext);
  useEffect(() => {

  }, [packageValue]);
  return (
    <>
      <ImagePayment
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Payment:"
        alt="Typing SVG"
      ></ImagePayment>
      <PaymentFather>
        <CreditCard />
      </PaymentFather>
    </>
  );
}

const PaymentFather = styled.section`
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(209, 208, 232);
  background: linear-gradient(
    90deg,
    rgba(209, 208, 232, 1) 0%,
    #121216 60%,
    rgba(0, 204, 245, 1) 130%
  );
`;

