import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../CSS/CreateRequest.css";
import { API_BASE_URL } from "./apiConfig";

const CreateRequest = () => {
  const [formData, setFormData] = useState({
    reason: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/rails/user_profile/request/2`,
        formData
      );
      console.log(response.data);
      
      setFormData({
        reason: "",
        description: "",
      });
      toast.success("Request created successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="createContainer">
      <div className="container-fluid px-1 py-5 mx-auto ">
        <div className="row d-flex justify-content-center ">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Create Request</h3>
            <p className="blue-text">
              Please answer a few questions so that we can provide you with better
              service.
            </p>
            <div className="Createcard">
              <h5 className="text-center mb-4">Hostel Management Request Form</h5>
              <form className="form-card" onSubmit={handleSubmit}>
                <div className="row justify-content-between text-left"></div>
                <div className="row justify-content-center text-left"> 
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">Reason<span className="text-danger"> *</span></label>
                    <input type="text" name="reason" value={formData.reason} onChange={handleChange} className="form-control" placeholder="Enter reason" />
                  </div>
                </div>

                <br />
                <div className="row justify-content-center text-left"> 
                  <div className="form-group col-sm-6 flex-column d-flex">
                    <label className="form-control-label px-3">
                      Description<span className="text-danger"> *</span>
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter description"
                      rows="4" 
                    />
                  </div>
                </div>
                <div className="row justify-content-center"> 
                  <div className="form-group col-sm-6">
                    <button type="submit" className="btn-block btn-primary">
                      Create Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default CreateRequest;