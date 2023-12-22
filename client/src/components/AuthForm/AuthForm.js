import React, { useRef, useState, useEffect } from "react";
import "./AuthForm.css";
import { ImageJson } from "./ImageJson";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const baseURL = `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api`;

  const [selectedImages, setSelectedImages] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const pass = selectedImages.join("");
  const containerRef = useRef(null);

  useEffect(() => {
    console.log(selectedImages);
  }, [selectedImages]);

  const handleSignUpClick = () => (
    containerRef.current.classList.add("right-panel-active"),
    setSelectedImages([])
  );
  const handleSignInClick = () => (
    containerRef.current.classList.remove("right-panel-active"),
    setSelectedImages([])
  );

  const handleSignIn = async (e) => {
    
    e.preventDefault();
    if (!userDetails.email) {
      toast.error("Please provide valid email address.", { autoClose: 3000 });
      return;
    }
    // Validate password
    if (!pass || pass.length < 5) {
      toast.error("Password must be at least 5 characters long.", {
        autoClose: 3000,
      });
      return;
    }
    try{
    await axios
      .get(baseURL + "/signIn/" + userDetails.email + "/" + pass)
      .then((response) => {
        // Show Toast Message what we get in Response
        toast.info(response.data.message);
      });
    }catch(error){
      toast.error("Error During SignIn.", { autoClose: 3000 });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Validate user details
    if (!userDetails || !userDetails.name || !userDetails.email) {
      toast.error("Please provide valid user details.", { autoClose: 3000 });
      return;
    }

    // Validate password
    if (!pass || pass.length < 5) {
      toast.error("Password must be at least 5 characters long.", {
        autoClose: 3000,
      });
      return;
    }

    try {
      await axios
        .post(baseURL + "/signup", {
          name: userDetails.name,
          email: userDetails.email,
          password: pass,
        })
        .then((response) => {
          // Show Toast Message SignUp Successfully
          toast.success("successfully Signed Up", { autoClose: 3000 });
        });
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Signup failed. Please try again.", { autoClose: 3000 });
    }
  };

  const handleUserDetails = (e) => {
    const { value, name } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleImageClick = (id) => {
    if (selectedImages.length < 5) {
      setSelectedImages((prevSelectedImages) => [...prevSelectedImages, id]);
    }
  };

  const removeImage = (id) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((imageId) => imageId !== id)
    );
  };

  return (
    <>
      {/* Animated Wave Background */}
      <ToastContainer />
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
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userDetails.name}
                  onChange={handleUserDetails}
                />
              </label>
              <label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserDetails}
                />
              </label>
              {/* Selected Image */}
              <div className="selected-image-segment">
                {selectedImages.length > 0 && <span>Selected Images:</span>}
                <br />
                {selectedImages.map((selectedImage, index) => (
                  <img
                    key={index}
                    src={
                      ImageJson.find((image) => image.value === selectedImage)
                        ?.image
                    }
                    alt={`Selected Image`}
                    onClick={() => removeImage(selectedImage)}
                  />
                ))}
              </div>
              <div className="password">
                {ImageJson.map((image, index) => (
                  <div
                    key={`s${index + 1}`}
                    className={`passimg ${
                      selectedImages === `s${index + 1}` ? "selected" : ""
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
              <span
                style={{ color: "red", margin: "5px", marginLeft: "-45px" }}
              >
                Select your Graphical password*
              </span>
              <button style={{ marginTop: "9px" }} onClick={handleSignUp}>
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleUserDetails}
                />
              </label>
              {/* Selected Image */}
              <div className="selected-image-segment">
                {selectedImages.length > 0 && <span>Selected Images:</span>}
                <br />
                {selectedImages.map((selectedImage, index) => (
                  <img
                    key={index}
                    src={
                      ImageJson.find((image) => image.value === selectedImage)
                        ?.image
                    }
                    alt={`Selected Image`}
                    onClick={() => removeImage(selectedImage)}
                  />
                ))}
              </div>
              <div className="password">
                {ImageJson.map((image, index) => (
                  <div
                    key={`s${index + 1}`}
                    className={`passimg ${
                      selectedImages === `s${index + 1}` ? "selected" : ""
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
              <span
                style={{ color: "red", margin: "5px", marginLeft: "-45px" }}
              >
                Select your Graphical password*
              </span>
              <a href="#">Forgot your password?</a>
              <button onClick={handleSignIn}>Sign In</button>
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
    </>
  );
};

export default AuthForm;
