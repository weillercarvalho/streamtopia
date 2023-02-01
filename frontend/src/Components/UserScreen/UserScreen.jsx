import { useContext, useEffect } from "react";
import { userContext } from "../../Hooks/userContext";
import styled from "styled-components";
import { ImagePayment } from "../Style/Father";
import {
  Example1,
  Example2,
  Example3,
  Example4,
  Example5,
  Example6,
} from "./BigHeads";
import { useNavigate } from "react-router-dom";

export default function UserScreen() {
  const { packageValue, setAvatar } = useContext(userContext);
  useEffect(() => {}, [packageValue]);
  const navigate = useNavigate();
  function perpetuatingAvatar(v) {
    setAvatar(v);
    navigate("/home");
  }
  function showUsers(packageValue) {
    if (packageValue === "") {
      navigate("/purchase");
      return;
    }
    if (packageValue === "1") {
      return (
        <>
          <ImagePayment
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Users:"
            alt="Typing SVG"
          ></ImagePayment>
          <UserFather>
            <section onClick={() => perpetuatingAvatar(<Example1 />)}>
              <Example1 />
              <p>Age 0-80</p>
            </section>
          </UserFather>
        </>
      );
    }
    if (packageValue === "3") {
      return (
        <>
          <ImagePayment
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Users:"
            alt="Typing SVG"
          ></ImagePayment>
          <UserFather>
            <section onClick={() => perpetuatingAvatar(<Example1 />)}>
              <Example1 />
              <p>Age 0-12</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example2 />)}>
              <Example2 />
              <p>Age 12-18</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example3 />)}>
              <Example3 />
              <p>Age 18+</p>
            </section>
          </UserFather>
        </>
      );
    }
    if (packageValue === "6") {
      return (
        <>
          <ImagePayment
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Users:"
            alt="Typing SVG"
          ></ImagePayment>
          <UserFather>
            <section onClick={() => perpetuatingAvatar(<Example1 />)}>
              <Example1 />
              <p>Age 0-12</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example2 />)}>
              <Example2 />
              <p>Age 12-18</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example3 />)}>
              <Example3 />
              <p>Age 18+</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example4 />)}>
              <Example4 />
              <p>Age 18+</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example5 />)}>
              <Example5 />
              <p>Age 18+</p>
            </section>
            <section onClick={() => perpetuatingAvatar(<Example6 />)}>
              <Example6 />
              <p>Age 18+</p>
            </section>
          </UserFather>
        </>
      );
    }
  }
  return <>{showUsers(packageValue)}</>;
}

const UserFather = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  section {
    width: 200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5%;
    box-shadow: 2px 2px 2px black;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  p {
    font-family: "Fira Code", monospace;
    font-size: 20px;
    font-weight: bold;
  }
`;
