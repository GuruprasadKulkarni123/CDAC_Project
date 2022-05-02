import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./index.css";
import Header2 from "../../Header2/Header2";
import Footer from "../../Footer/Footer";
import Background from "../../../images/image1.webp";

const RegisterComplaint = () => {
  const navigate = useNavigate();
  const { userId, firstName, lastName, email } = sessionStorage;
  const [details, setDetails] = useState("");

  //const [email, setEmail] = useState("")
  const [type, setType] = useState("");

  const registercomplaint = () => {
    if (type.length == "") {
      alert("Please select the complaint type");
    } else if (details.length == "") {
      alert("Please enter complaint details");
    } else {
      const url = `http://localhost:8080/registercomplaint/${userId}`;

      const data = {
        cusFirstName: firstName,
        cusLastName: lastName,
        status: "Pending",
        details: details,
        email: email,
        type: type,
      };

      axios.post(url, data).then((Response) => {
        const result = Response.data;
        if (!result) {
          alert("Something went wrong");
        } else {
          navigate("/aftersignin");
        }
      });
    }
  };

  return (
    <div>
      <Header2></Header2>
      <h1
        style={{
          backgroundColor: "darkblue",
          textAlign: "center",
          paddingBottom: 10,
          color: "white",
        }}
      >
        Register Complaints
      </h1>
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          paddingTop: 20,
          paddingBottom: 50,
        }}
      >
        <div
          className="container"
          style={{ backgroundColor: "white", opacity: 0.9 }}
        >
          <table
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "70%",
              marginTop: "4%",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <label>First Name</label>
                  <input
                    style={{ width: "100%", marginBottom: "2%" }}
                    type="text"
                    defaultValue={firstName}
                    readOnly
                  />

                  <label>Last Name</label>
                  <input
                    style={{ width: "100%", marginBottom: "2%" }}
                    type="text"
                    defaultValue={lastName}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <label>Email</label>
                <br></br>
                <input
                  style={{ width: "100%", marginBottom: "2%" }}
                  type="email"
                  defaultValue={email}
                  readOnly
                />
              </tr>

              <tr>
                <label>Complaint About</label>
                <br></br>
                <select
                  style={{ width: "100%", marginBottom: "2%" }}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option>Select Here</option>
                  <option value="LIC Portal">LIC Portal</option>
                  <option value="Insurance Plan">Insurance Plan</option>
                  <option value="Other">Other</option>
                </select>
              </tr>

              <tr>
                <label>Complaint Details</label>
                <br></br>
                <textarea
                  style={{ width: "100%" }}
                  rows="4"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                ></textarea>
              </tr>

              {/* <tr>
                <label >User Id</label>
                <input style={{ width: "100%", marginBottom: '2%' }} type="text" defaultValue={userId} readOnly />
              </tr> */}

              <tr>
                <div class="text-center" style={{ marginTop: "3%", marginBottom: "20%" }}>
                  <button
                    style = {{marginRight : 20}}
                    type="submit"
                    class="btn btn-warning"
                    onClick={registercomplaint}
                  >
                    Register
                  </button>
                  <a type="button" class="btn btn-primary" href="/aftersignin" >Back</a>
                </div>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterComplaint;
