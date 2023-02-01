import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Hooks/userContext";
import image from "../../assets/images/s.svg";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import imagepirates from "../../assets/images/piratesimage1.jpg";
import imageavenger from "../../assets/images/avengersimage.png";
import imagematrix from "../../assets/images/matriximage.png";
import moviepirates from "../../assets/video/piratestrailer.webm";
import movieavengers from "../../assets/video/avengerstrailer.webm";
import moviematrix from "../../assets/video/matrixtrailer.webm";
import { homeScreen } from "../../Services/Services";
import closeimage from "../../assets/images/x.png";

export default function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <div className="titlegenrer">
        <span style={{ color: "#00ccf5" }}>Action</span> <span>Section</span>
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  const { avatar, defaultuser } = useContext(userContext);
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  function reload() {
    window.location.reload();
  }

  return (
    <div className="nav nav__container">
      <img className="nav__logo" src={image} alt="" onClick={reload}></img>
      <p className="firstName">Hi, {defaultuser}</p>
      <p className="secondName" onClick={logout}>
        Logout
      </p>
      <section className="avatar__dimensions">{avatar}</section>
    </div>
  );
}

function Banner() {
  const { setClick1, setClick2, setClick3, setRoll } = useContext(userContext);
  function turnOffMovie() {
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setRoll(true);
  }
  return (
    <>
      <header>
        <div className="movie_screen_container">
          <TestCarousel />
          <img
            className="closeimage"
            onClick={turnOffMovie}
            src={closeimage}
          ></img>
        </div>
      </header>
    </>
  );
}

function TestCarousel() {
  const {
    click1,
    setClick1,
    click2,
    setClick2,
    click3,
    setClick3,
    setRoll,
    roll,
  } = useContext(userContext);
  function avengerMovie() {
    setClick1(!false);
    setRoll(false);
  }
  function matrixMovie() {
    setClick2(!false);
    setRoll(false);
  }

  function piratesMovie() {
    setClick3(!false);
    setRoll(false);
  }
  return (
    <Carousel
      autoPlay={roll}
      infiniteLoop={true}
      autoFocus={true}
      showArrows={false}
      showThumbs={false}
    >
      {click1 ? (
        <>
          <Player autoPlay={true} playsInline poster="" src={movieavengers} />
        </>
      ) : (
        <>
          <div className="movie" onClick={avengerMovie}>
            <img src={imageavenger} />
            <p className="legendtest">Avengers Endgame</p>
          </div>
        </>
      )}
      {click2 ? (
        <>
          <Player autoPlay={true} playsInline poster="" src={moviematrix} />
        </>
      ) : (
        <>
          <div className="movie" onClick={matrixMovie}>
            <img src={imagematrix} />
            <p className="legendtest">Matrix Resurrections </p>
          </div>
        </>
      )}
      {click3 ? (
        <>
          <Player autoPlay={true} playsInline poster="" src={moviepirates} />
        </>
      ) : (
        <>
          <div className="movie" onClick={piratesMovie}>
            <img src={imagepirates} />
            <p className="legendtest">Pirates of Caribbean</p>
          </div>
        </>
      )}
    </Carousel>
  );
}

function Footer() {
  const [allmovies, setAllmovies] = useState([]);
  useEffect(() => {
    homeScreen()
      .then((r) => {
        console.log(r.data);
        setAllmovies(r.data);
      })
      .catch((r) => {
        console.log(r);
      });
  }, []);
  return (
    <>
      <div className="footerline">
        {allmovies?.map((value, index) => {
          return (
            <Footerline key={index} image={value.image} name={value.name} />
          );
        })}
      </div>
    </>
  );
}

function Footerline({ image, name }) {
  return (
    <section className="imagefather">
      <img className="imageimage" src={image}></img>
      <h2 className="imagename">{name}</h2>
    </section>
  );
}
