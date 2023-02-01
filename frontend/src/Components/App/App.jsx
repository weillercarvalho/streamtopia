import { useState } from "react";
import SignIn from "../../Layouts/SignIn";
import SignUp from "../../Layouts/SignUp";
import Home from "../../Layouts/Home";
import { Reset } from "styled-reset";
import { Global } from "../Global/Global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivatePage from "../../Services/PrivatePage";
import { userContext } from "../../Hooks/userContext";
import Purchase from "../../Layouts/Purchase";
import Payment from "../../Layouts/Payment";
import UserChoice from "../../Layouts/UserChoice";
import { Example1 } from "../UserScreen/BigHeads";

function App() {
  const [token, setToken] = useState(false);
  const [packageValue, setPackageValue] = useState("1");
  const [avatar, setAvatar] = useState(<Example1 />);
  const [defaultuser, setDefaultuser] = useState("Weiller");
  const [datas, setDatas] = useState([]);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [roll, setRoll] = useState(true);

  const auth = JSON.parse(localStorage.getItem(`streamtopia`));
  if (auth && token === false) {
    return setToken(auth);
  }

  return (
    <>
      <Reset />
      <userContext.Provider
        value={{
          token,
          setToken,
          packageValue,
          setPackageValue,
          avatar,
          setAvatar,
          defaultuser,
          setDefaultuser,
          datas,
          setDatas,
          click1,
          setClick1,
          click2,
          setClick2,
          click3,
          setClick3,
          roll,
          setRoll
        }}
      >
        <Global />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/purchase" element={<PrivatePage><Purchase /></PrivatePage>} />
            <Route path="/payment" element={<PrivatePage><Payment /></PrivatePage>} />
            <Route path="/userchoice" element={<PrivatePage><UserChoice /></PrivatePage>} />
            <Route path="/home" element={<PrivatePage><Home /></PrivatePage>} />
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </>
  );
}

export default App;
