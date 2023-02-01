import styled from "styled-components";

const SignInFather = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  span {
    display: flex;
    font-family: "Fira Code", monospace;
    font-size: 30px;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 10% 10% 10% 18%;
    font-family: "Fira Code", monospace;
    font-weight: 400;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    margin-top: 8%;
    width: 1000px;
  }
  section {
    display: flex;
    &:hover {
      cursor: pointer;
    }
    margin-top: -5%;
    margin-left: -80%;
  }
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200%;
    height: 38px;
    margin: 5% 5% 5% -45%;
    font-size: 20px;
    border-radius: 5%;
    ::placeholder {
      font-family: "Fira Code", monospace;
      font-weight: 400;
      font-size: 20px;
      opacity: 0.3;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
    }
  }
`;

const ImagePayment = styled.img`
  width: 1000px;
`;

export { SignInFather, ImagePayment };
