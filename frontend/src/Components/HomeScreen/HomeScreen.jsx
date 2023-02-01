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
  const dataMovies = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGo_72GPJ-07T-ld1WccM2viMEAHQ2w4tRg&usqp=CAU",
      name: "Avengers Endgame",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJy0xKvnmEIlYwNTLvcrG53__U5WkHM6b5nebfoEs1Z8WuRVWV1obMDT5h1YgJn5keKPo&usqp=CAU",
      name: "Pirates of Caribbean 5",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-I3gOgmh8R8udp40Sc4GY-7MuzzqGyfeF1z-g6J9bfCmu50DmNGyB6cHgQBWXsonhE8&usqp=CAU",
      name: "John Wick",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneUUguBhzhj-qa20-bdruqHkgNyR76_5KMXs2L3v33OC0yjzvGNXUDL2FKBBS9aXWNm0&usqp=CAU",
      name: "Black Widow",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4H4-tiUmbEmP24YXFkoZpfxlsxQG8XoPzK-cYTTb3VRNlIpd8oUpf8lsPKCg9OxyFwg&usqp=CAU",
      name: "Black Adam",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTls_rb2tVzT4-99uHPD01kyaib4f0gYrTxED8Zbwdbbt7Wx1VSOHNHXo5D63Xpl4jL1rE&usqp=CAU",
      name: "Wakanda Forever",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDg6jCatZol0Oh9vZJebunGDViBbd19IfFfgfmKwCnifuvqgtZfF1lGeYsStRLrGtt6t8&usqp=CAU",
      name: "Fantastic Four",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZSz5N7XYh_fjoTYVAqsPmZAfhO4MPjQP6vFpMIf8YbMNnKiMqAzOCS2tCLP09-72vwA&usqp=CAU",
      name: "Logan",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGd2ZgdWit9mTTzTgCB7Ku6yY89PgON5GwYg&usqp=CAU",
      name: "X-Men",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjD444hd4Duu1oipUUyNX4ykwhrW3_l08GA&usqp=CAU",
      name: "Doctor Strange",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1iezPP4qYzXKjYduCQBu10ScTXRWVeThUNJsO8_EKnIikjYSwCaTy0IpKfK36bxx-xo&usqp=CAU",
      name: "Wanted",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOsCgqW9LvozJPoAO1nlELiI5MPz3bxamDkjyDKGpNA_F47zJA5kXwsROh_6S0491ry0&usqp=CAU",
      name: "Tron",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPj7rLGcOXfEMMTohu5AnW_QM84E49ZUYJmP0oBhraKiTOM2whBxjlg9Sri69NUU14xA&usqp=CAU",
      name: "Captain Marvel",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA2UbGCFzs13SlPPzDKCiXB2o7ITtnZ6rmMMRAIVreQE1_SQ4slmJDeI3a-0CtJzKkIgo&usqp=CAU",
      name: "Harry Potter",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IHeKGiVPGvIrqdtSUtF6hVmW_0j5z2_QNspoLAN01b_SZYFWgyrsw7JVXOd0oU63STc&usqp=CAU",
      name: "007 Spectre",
    },
  ];
  return (
    <>
      <div className="footerline">
        {dataMovies?.map((value, index) => {
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
