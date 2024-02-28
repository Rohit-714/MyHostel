import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // Import axios
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    if (registered) {
      const timeout = setTimeout(() => {
        navigate("/login");
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, [registered, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
  
    // Check if all required fields are filled
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      // If any required field is empty, show an error toast
      toast.error("Please fill all required fields");
      return;
    }
  
    try {
      
      setTimeout(() => {
        
        console.log("Form data:", formData);
  
       
        toast.success("Registered Successfully!");
  
        
        setRegistered(true);
      }, 1000); 
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred. Please try again.");
    }
  };
  
  
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Hostel Management Sign up
                        </p>
                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="formHostelName"
                                name="name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="formHostelName"
                              >
                                Name
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="formHostelEmail"
                                name="email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="formHostelEmail"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="formHostelPassword"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="formHostelPassword"
                              >
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="formHostelConfirmPassword"
                                name="confirmPassword"
                                className="form-control"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                              />
                              <label
                                className="form-label"
                                htmlFor="formHostelConfirmPassword"
                              >
                                Confirm Password
                              </label>
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              id="formHostelAgreeTerms"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formHostelAgreeTerms"
                            >
                              I agree to all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://s3.us-west-2.amazonaws.com/www.bookingninjas.com/img/illustration-2.svg"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignUp;
