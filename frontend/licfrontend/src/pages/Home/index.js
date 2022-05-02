import React from "react";
import { Link } from "react-router-dom";
import Background from '../../images/licoffice.webp';
import Header from '../Header/Header'
import BootstrapCarousel from '../BootstrapCarousel' 
import "./index.css"

const Home = () => {
  return (
    <div>

      <Header></Header>


      <marquee style={{ color: "yellow", backgroundColor: "darkblue" }}>
        "Individual Pension Policyholders/ Annuitants can submit Digital Life
        Certificate through mobile app Jeevan Saakshya. App can be downloaded
        from play store" "Revised Working Hours of All Offices of LIC Of India
        from 10.05.2021, pursuant to Notification S.O.1630(E) Dated 15th April
        2021 wherein the CENTRAL GOVERNMENT has Declared Every Saturday as a
        Public Holiday for Life Insurance Corporation of India."
      </marquee>


      <BootstrapCarousel></BootstrapCarousel>  


      <div style={{ height: 1000, backgroundImage: `url(${Background})`, backgroundRepeat : "no-repeat", backgroundSize : "100%"}}>
        <div>
        <div
          className="row"
          style={{
            paddingTop: 100,
            textAlign: "center",
            backgroundColor: "lightyellow",
            opacity: 0.9,
            width: "99.6%",
            marginLeft: 5,
            paddingBottom: 50,
          }}
        >
          <div className="col-1"></div>
          <div className="col-4">
            <table
              className="table table-bordered"
              style={{ borderStyle: "solid", borderColor: "black" }}
            >
              <tr>
                <td style={{ backgroundColor: "darkblue" }}>
                  <h1
                    style={{ color: "white", textAlign: "center", height: 80 }}
                  >
                    Online Services
                  </h1>
                </td>
              </tr>

              <tr>
                <td style={{ height: 60 }}>
                  <Link to="/user/signin" style={{ fontSize: 20 ,color:"darkslateblue"}}>
                  <b>Already Registered User</b> 
                  </Link>
                </td>
              </tr>

              <tr>
                <td style={{ height: 60 }}>
                  <Link to="/user/signup" style={{ fontSize: 20 ,color:"darkslateblue" }}>
                    <b>New User</b>
                  </Link>
                </td>
              </tr>

              <tr>
                <td style={{ height: 60 }}>
                  <Link to="/agent/signin" style={{ fontSize: 20 ,color:"darkslateblue" }}>
                    <b>Agent Sign In</b>
                  </Link>
                </td>
              </tr>
            </table>
          </div>
          <div className="col-1"></div>

          <div className="col">
            <div style={{ fontSize: 18, textAlign: "justify" }}>
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 28,
                  backgroundColor: "darkblue",
                  height: 40,
                }}
              >
                Things You Must Know
              </h2>
              In our country, which is one of the most populated in the world,
              the prominence of insurance is not as widely understood, as it
              ought to be. What follows is an attempt to acquaint readers with
              some of the concepts of life insurance, with special reference to
              LIC.
              <br/>
              <br/>
              <div>
               <b>Disclaimer : </b> This is not a part of our grievance redressal system. For any grievance, write to servicing Branch Office or use other available channels.
                Kindly do not share your login credentials to any private app or utilities. This may lead to permanent disablement of your portal profile. Please change your login password including MPIN at regular interval. LIC has not authorized any private app to use our data.
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{
            paddingTop: 40,
            textAlign: "center",
            backgroundColor: "lightyellow",
            opacity: 0.9,
            width: "99.6%",
            marginLeft: 5,
            paddingBottom: 50
          }}
        >
          <div className="col">
            <a class="navbar-brand" href="#">
              <img
                src={require("../../images/family.jpg")}
                class="d-inline-block align-text-top"
              ></img>
              <br></br>
            </a>
          </div>

          <div className="col">
            <a class="navbar-brand" href="#">
              <img
                src={require("../../images/lic-jeevan-labh-policy-2.png")}
                class="d-inline-block align-text-top"
              ></img>
            </a>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "yellow",
            backgroundColor: "darkblue",
            fontSize: 24,
          }}
        >
          Zindagi ke saath bhi, Zindagi ke baad bhi
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 22,
            color: "darkblue",
            backgroundColor: "lightyellow",
            opacity: 0.9,         
          }}
        >
          Copyright © 2022 - All Rights Reserved -
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 22,
            color: "darkblue",
            backgroundColor: "lightyellow",
            opacity: 0.9,         
          }}
        >
          Content on this website is published and managed by D2 project group.
        </div>
      </div>

 

        
      </div>
    </div>
  );
};

export default Home;
