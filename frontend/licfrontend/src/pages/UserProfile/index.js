import { useNavigate } from "react-router";
import axios from "axios";
import Footer from "../Footer/Footer";
import './userfrofile.css'
import {MdLogout} from 'react-icons/md'

const UserProfile = () => {
  const {
    userId,
    firstName,
    lastName,
    address,
    contact,
    email,
    age,
    birthDate,
    gender,
  } = sessionStorage;

  const navigate = useNavigate();

  const logoutUser = () => {
    navigate("/logout");
  };
  return (
    <div>
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
                        Logout <MdLogout/>
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

      <div id="banner">
      <div id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-2 "></div>
            <div className="col-md-9">
              <br></br>
              <div className="card" style ={{borderRadius : 10}}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Your Profile</h4>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <table className="table table-hover table-sm table-properties">
                        <tbody>
                          <tr>
                            <th>First Name</th>
                            <td
                              style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "20rem",
                              }}
                            >
                              {firstName}
                            </td>
                          </tr>
                          <tr>
                            <th>Last Name</th>
                            <td>{lastName}</td>
                          </tr>
                          <tr>
                            <th>Email</th>
                            <td>{email}</td>
                          </tr>
                          <tr>
                            <th>Contact</th>
                            <td>{contact}</td>
                          </tr>
                          <tr>
                            <th>Address</th>
                            <td>{address}</td>
                          </tr>
                          <tr>
                            <th>Gender</th>
                            <td>{gender}</td>
                          </tr>
                          <tr>
                            <th>Birthdate</th>
                            <td>{birthDate}</td>
                          </tr>
                          <tr>
                            <th>Age</th>
                            <td>{age}</td>
                          </tr>
                          <tr>
                            <a class="text-center" href="/changeprofile">
                              <button
                                type="submit"
                                style={{ marginTop: "3%" }}
                                class="btn btn-success"
                              >
                                Change the profile
                              </button>
                            </a>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
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

export default UserProfile;
