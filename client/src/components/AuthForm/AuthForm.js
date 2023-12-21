import React, { useRef, useState,useEffect } from "react";
import "./AuthForm.css";
import { ImageJson } from "./ImageJson";

const AuthForm = () => {
  const containerRef = useRef(null);

  const handleSignUpClick = () => (
    containerRef.current.classList.add("right-panel-active"),
    setSelectedImage([])
  )
  const handleSignInClick = () => (
    containerRef.current.classList.remove("right-panel-active"),
    setSelectedImage([])
  )

  const [selectedImage, setSelectedImage] = useState([]);
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);
  const handleImageClick = (id) => {
    setSelectedImage((prevSelectedImage) => [...prevSelectedImage, id]);
  };
  return (
    <body>
      {/* Animated Wave Background */}
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      {/* Log In Form Section */}
      <section>
        <div className="container" id="container" ref={containerRef}>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Sign Up</h1>
              <label>
                <input type="text" placeholder="Name" />
              </label>
              <label>
                <input type="email" placeholder="Email" />
              </label>
              <div className="password">
              {ImageJson.map((image, index) => (
                <div
                  key={`s${index + 1}`}
                  className={`passimg ${
                    selectedImage === `s${index + 1}` ? "selected" : ""
                  }`}
                  onClick={() => handleImageClick(image.value)}
                >
                  <img
                    src={image.image}
                    alt={`Image ${index + 1}`}
                    className="patimg"
                  />
                </div>
              ))}
              </div>
              <button style={{ marginTop: "9px" }}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <label>
                <input type="email" placeholder="Email" />
              </label>
              <div className="password">
              {ImageJson.map((image, index) => (
                <div
                  key={`s${index + 1}`}
                  className={`passimg ${
                    selectedImage === `s${index + 1}` ? "selected" : ""
                  }`}
                  onClick={() => handleImageClick(image.value)}
                >
                  <img
                    src={image.image}
                    alt={`Image ${index + 1}`}
                    className="patimg"
                  />
                </div>
              ))}
              </div>
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Log in</h1>
                <p>Sign in here if you already have an account </p>
                <button
                  className="ghost mt-5"
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Create Account!</h1>
                <p>Sign up if you still don't have an account ... </p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={handleSignUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default AuthForm;
