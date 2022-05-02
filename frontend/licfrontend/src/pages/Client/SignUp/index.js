
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { toast } from 'react-toastify'
import './index.css'




const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [role, setRole] = useState("")
  const [gender, setGender] = useState("")


  // used to navigate from one component to another
  const navigate = useNavigate()

  const signupUser = () => {
    const checkemail = (email) => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    };

    if (firstName.length == 0) {
      toast.warn("Please enter first name");
    } else if (lastName.length == 0) {
      toast.warn("Please enter last name");
    } else if (address.length == 0) {
      toast.warn("Please enter address");
    } else if (contact.length != 10) {
      toast.warn("Contact no. should be 10 digits");
    } else if (email.length == 0) {
      toast.warn("Please enter email");
    } else if (!checkemail(email)) {
      toast.error("email should contain  @ and end with '.com'")
    } else if (password.length == 0) {
      toast.warn("Please enter password");
    } else if (age.length == 0) {
      toast.warn("Please enter age");
    } else if (birthDate.length == 0) {
      toast.warn("Please enter birthDate");
    } else if (gender.length == 0) {
      toast.warn("Please enter gender");
    } else if (role.length == 0) {
      toast.warn("Please enter role");
    } else {
      const url = "http://localhost:8080/user/signup"

      const data = {
        "firstName": firstName,
        "lastName": lastName,
        "address": address,
        "contact": contact,
        "email": email,
        "password": password,
        "age": age,
        "birthDate": birthDate,
        "role": role,
        "gender": gender
      }

      axios.post(url, data).then((Response) => {
        const result = Response.data;
        console.log(result)
        if (result.status == "error") {
          toast.warning(result.error)
        } else if (!result) {
          alert("Something went wrong");
        }
        else {
          navigate("/user/signin");
        }
      })
    }
  }

  return (
    <div>
      <Header></Header>
      <br></br>

      <div class="card" id="card2">
        <h1 className="title" style={{ color: 'darkblue', paddingTop: 50 }}><u><b>Signup</b></u></h1>

        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form" style={{ width: 400 }}>
              <div className="mb-3">
                <label  className="label-control">
                  First Name<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setFirstName(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Last Name<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Address<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Contact No<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input minLength={10} maxLength={10}
                  onChange={(e) => {
                    setContact(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Email Address<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Password<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type="password"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label  className="label-control">
                  Age<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={(e) => {
                    setAge(e.target.value)
                  }}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label for="birth-date">Birth Date<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <br></br>
                <input style={{ width: '100%' }}
                  onChange={(e) => {
                    setBirthDate(e.target.value)
                  }}
                  id="birth-date" name="birth-date" type="date"
                />
              </div>

              <div>
                <label for="radio-male">Gender<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <br></br>

                <input onChange={(e) => {
                  setGender(e.target.value)
                }} id="radio-male" type="radio" name="gender" value="Male" />Male

                <input onChange={(e) => {
                  setGender(e.target.value)
                }} id="radio-female" type="radio" name="gender" value="Female" style={{ marginLeft: 100 }} />Female

                <input onChange={(e) => {
                  setGender(e.target.value)
                }} id="radio-other" type="radio" name="gender" value="Other" style={{ marginLeft: 100 }} />Other

              </div>


              <div className="mb-3">

                <label for="role">
                  Select Role As agent or client<span class="required" style={{ color: "red" }}>*</span>
                </label>
                <br></br>

                <select style={{ width: '100%' }}
                  onChange={(e) => {
                    setRole(e.target.value)
                  }}>
                  <option>Select Here</option>
                  <option id="role" name="role" value="agent">agent</option>
                  <option id="role" name="role" value="client">client</option>
                </select>

              </div>

              <div className="mb-3">
                <div>
                  Already have an account? <Link to="/user/signin">Signin here.</Link>
                </div>

                <br></br>
                <center>
                <button style ={{width : 100, fontSize: 20}} onClick={signupUser} className="btn btn-primary">
                  Signup
                </button>
                </center>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <br></br>

      <Footer></Footer>
    </div>
  )
}

export default Signup
