import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Background from '../../../images/lic_agent.png';
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'


const AgentSignin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const signinUser = (event) => {
    event.preventDefault();
    if (email.length == 0)
      toast.warning('please enter email');
    else if (password.length == 0)
      toast.warning('please enter password');
    else {
      const url = "http://localhost:8080/user/signin"
      const data = { "email": email, "password": password }

      axios.post(url, data).then((Response) => {

        const result = Response.data.data;
        console.log(result)

        if (!result) {
          toast.error("Invalid Password or Email");
        }
        else {

          // persist the logged in user's information for future use
          sessionStorage['userId'] = result['userId']
          sessionStorage['firstName'] = result['firstName']
          sessionStorage['lastName'] = result['lastName']
          sessionStorage["address"] = result["address"];
          sessionStorage["contact"] = result["contact"];
          sessionStorage["email"] = result["email"];
          sessionStorage["age"] = result["age"];
          sessionStorage["birthDate"] = result["birthDate"];
          sessionStorage["gender"] = result["gender"];

          sessionStorage['loginStatus'] = 1

          if (result["role"] == "agent") {
            navigate('/afteragentsignin')
            toast.success("you are logged in")
          } else {
            alert("Enter valid agent details")
          }
        }
      })
    }
  }


  return (
    <div>

      <Header></Header>

      <marquee style={{ color: "yellow", backgroundColor: "darkblue" }}>
        "Individual Pension Policyholders/ Annuitants can submit Digital Life Certificate through mobile app Jeevan Saakshya. App can be downloaded from play store"     "Revised Working Hours of All Offices of LIC Of India from 10.05.2021, pursuant to Notification S.O.1630(E) Dated 15th April 2021 wherein the CENTRAL GOVERNMENT has Declared Every Saturday as a Public Holiday for Life Insurance Corporation of India."
      </marquee>



      <div style={{ backgroundImage: `url(${Background})`, width: "100%", height: "575px", backgroundRepeat: "no-repeat" }}>
        <div className="row" style={{ paddingLeft: 800, paddingTop: 50 }}>
        <div class="card" id= "card1">
          <h1 className="title" style={{ color: 'darkblue' }}>Signin</h1>
          <div className="col"></div>
          <div className="col-7">
            <div className="form" style = {{width : "156%", marginLeft:20}}>
              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Email address
              </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="" className="label-control">
                  Password
              </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3" style={{ paddingTop: 10 }}>
                <button onClick={signinUser} className="btn btn-primary" style={{ width: "100%" }}>
                  Signin
              </button>
                <div style={{ marginTop: 20, textAlign: "center", fontSize: 18 }}>
                  <a href="/resetpassword" >Reset Your Password</a>
                </div>
                <hr></hr>
                <div style={{ paddingTop: 20, textAlign: "center" }}>
                  <div style={{ paddingLeft: 20, fontSize: 18 }}>No account yet?</div>
                  <br></br> <Link to="/user/signup"><b>
                    <button className="btn btn-success">Signup here</button>
                  </b></Link>
                </div>

              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AgentSignin
