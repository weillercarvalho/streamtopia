import styled from "styled-components";
import FirstCard from "../Components/BootstrapCard/FirstCard";
import SecondCard from "../Components/BootstrapCard/SecondCard";
import ThirdCard from "../Components/BootstrapCard/ThirdCard";
import { getPayment } from "../Services/Services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Purchase() {
  const [data, setData] = useState("");
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
  return (
    <>
      <PurchaseFather>
        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Purchase:"
          alt="Typing SVG"
        ></img>
        <nav>
          <section>
            <FirstCard />
          </section>
          <section>
            <SecondCard />
          </section>
          <section>
            <ThirdCard />
          </section>
        </nav>
      </PurchaseFather>
    </>
  );
}

const PurchaseFather = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
    height: 300px;
    margin: 2%;
    background-color: var(--color-purchase);
    border-radius: 10px;
    &:active {
      transform: scale(1.05);
    }
  }
  p {
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 15%;
  }
  img {
    margin-top: 8%;
    width: 1000px;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    margin-top: -10%;
  }
`;
