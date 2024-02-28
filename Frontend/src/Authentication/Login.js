import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both email and password fields are filled
    if (formData.email.trim() && formData.password.trim()) {
      console.log("FromData",formData)
      navigate('/homepage');
    } else {
      toast.error('Please fill in both email and password fields');
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://jurnal.iicet.org/plugins/themes/titanTheme/images/login.webp" className="img-fluid" alt="Phone image" />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form1Example13">Email address</label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <label className="form-label" htmlFor="form1Example23">Password</label>
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="form1Example3"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    name="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Login;
