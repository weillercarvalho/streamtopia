import { useNavigate } from "react-router-dom";
import { SignInFather } from "../Components/Style/Father";
import Render from "../Components/Button3D/Render";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Hooks/userContext";
import { StyledContainer } from "../Components/Toastify/Toast";
import { toast } from "react-toastify";
import { signin } from "../Services/Services";

export default function SignIn() {
  const navigate = useNavigate();
  const { token } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/purchase");
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (password.length < 6) {
      toast.info("Password too short!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      toast.info("6 Characters at least!", {
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
    }
    const body = {
      email: email,
      password: password,
    };
    signin(body)
      .then((r) => {
        console.log(r);
        localStorage.setItem(
          `streamtopia`,
          JSON.stringify({ token: r.data.token })
        );
        setEmail("");
        setPassword("");
        navigate("/purchase");
      })
      .catch((r) => {
        console.log(r);
        setEmail("");
        setPassword("");
      });
  }
  function changePage() {
    navigate("/signup");
  }
  return (
    <>
      <SignInFather>
        <section>
          <span style={{ color: "black" }}>Stream</span>
          <span>topia</span>
        </section>

        <img
          src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&center=true&vCenter=true&width=435&lines=Streamtopia.;Best+place+for+the+best+trailers."
          alt="Typing SVG"
        ></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insert your email here:"
          ></input>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insert your password here:"
          ></input>
          <h1 onClick={changePage}>Get Started!</h1>
          <Render name="sign in" />
        </form>
        <StyledContainer />
      </SignInFather>
    </>
  );
}
