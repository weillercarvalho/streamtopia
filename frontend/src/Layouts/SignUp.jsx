import { useNavigate } from "react-router-dom";
import { SignInFather } from "../Components/Style/Father";
import Render from "../Components/Button3D/Render";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StyledContainer } from "../Components/Toastify/Toast";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../Services/Services";
import { userContext } from "../Hooks/userContext";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useContext(userContext);

  useEffect(() => {
    if (token) {
      navigate("/purchase");
    }
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.info("Passwords do not match!", {
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
    if (name.length < 1) {
      toast.info("Name needs at least 1 letter!", {
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
      name: name,
      email: email,
      password: password
    };
    signup(body)
      .then((r) => {
        console.log(r);
        setPassword("");
        setConfirmPassword("");
        setName("");
        setEmail("");
        navigate("/");
      })
      .catch((r) => {
        console.log(r);
        setPassword("");
        setConfirmPassword("");
        setName("");
        setEmail("");
      });
  }
  function changePage() {
    navigate("/");
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
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            name="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Insert your first name here:"
          ></input>
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
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmpassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password here:"
          ></input>
          <h1 onClick={changePage}>Get Started!</h1>
          <Render name="sign in" />
        </form>
        <StyledContainer />
      </SignInFather>
    </>
  );
}
