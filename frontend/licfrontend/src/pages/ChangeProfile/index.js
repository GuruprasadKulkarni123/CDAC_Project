import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import "./changeprofile.css";
import {MdLogout} from 'react-icons/md'

const ChangeProfile = () => {
  const {
    userId,
    firstName,
    lastName,
    address,
    contact,
    email,
    age
  } = sessionStorage;
  const navigate = useNavigate();
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");

  const updateprofile = () => {
    const url = `http://localhost:8080/editprofile/${userId}`;

    const data = { address: Address, contact: Contact, email: Email, age: Age };

    axios.put(url, data).then((Response) => {
      const result = Response.data;

      if (result.status == "error") {
        alert(result.error);
      } else {
        sessionStorage["address"] = result["address"];
        sessionStorage["contact"] = result["contact"];
        sessionStorage["email"] = result["email"];
        sessionStorage["age"] = result["age"];
        toast.success("Profile updated");
        navigate("/profile");
      }
    });
  };
  const logoutUser = () => {
    navigate("/logout");
  };
  return (
    <div >
      <div style={{ backgroundColor: "lightblue" }} >
        <div className="row">
          <div className="col">
            <div class="float-start">
              <img
                src={require("../../images/LIC-Logo.jpg")}
                style={{ width: 300, paddingLeft: 50 }}
              />
            </div>
          </div>

          <div className="col" style={{ paddingTop: 30 }}>
            <div className="float-end">
              <div className="btn-group " role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn btn-primary btn-lg dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Welcome {firstName} {lastName}
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li>
                    <li>
                      <button
                        onClick={logoutUser}
                        className="btn btn-secondary btn-lg dropdown-item"
                      >
                        Logout<MdLogout/>
                      </button>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <nav class="navbar navbar-light" style={{ backgroundColor: "yellow" }}>
            <div class="container-fluid">
              <a class="navbar-brand" href="/aftersignin" paddingTop="10">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                  alt=""
                  width="30"
                  height="24"
                  class="d-inline-block align-text-top"
                />
                Home
              </a>

              <a class="navbar-brand" href="/downloadforms">
                Download Form
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="panel checkout-step">
        <div className="row">
          <div className="col-md-2 "></div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <center> <h4>Your Profile</h4></center>
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10">
                    <form>
                      <div className="form-group row">
                        <label htmlFor="name" className="col-4 col-form-label">
                          First Name:
                        </label>
                        <div className="col-8">
                          <input
                            id="name"
                            name="name"
                            defaultValue={firstName}
                            className="form-control here"
                            type="text"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="lastname"
                          className="col-4 col-form-label"
                        >
                          Last Name:
                        </label>
                        <div className="col-8">
                          <input
                            id="lastname"
                            name="lastname"
                            defaultValue={lastName}
                            className="form-control here"
                            type="text"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="email" className="col-4 col-form-label">
                          Email:
                        </label>
                        <div className="col-8">
                          <input
                            id="email"
                            name="email"
                            placeholder={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            className="form-control here"
                            required="required"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="website"
                          className="col-4 col-form-label"
                        >
                          Address:
                        </label>
                        <div className="col-8">
                          <input
                            id="website"
                            name="website"
                            placeholder={address}
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                            className="form-control here"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="publicinfo"
                          className="col-4 col-form-label"
                        >
                          Contact:
                        </label>
                        <div className="col-8">
                          <input
                            id="website"
                            name="website"
                            placeholder={contact}
                            onChange={(e) => {
                              setContact(e.target.value);
                            }}
                            className="form-control here"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="newpass"
                          className="col-4 col-form-label"
                        >
                          Age:
                        </label>
                        <div className="col-8">
                          <input
                            id="newpass"
                            name="newpass"
                            placeholder={age}
                            onChange={(e) => {
                              setAge(e.target.value);
                            }}
                            className="form-control here"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-4 col-8">
                          <button
                            name="submit"
                            onClick={updateprofile}
                            className="btn btn-primary"
                          >
                            Update My Profile
                          </button>
                          <a type="button" style={{ margin: '5%' }} class="btn btn-primary" href="/aftersignin" >Back</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChangeProfile;
