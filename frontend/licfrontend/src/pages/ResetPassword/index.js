import { useNavigate } from "react-router"
import { useState } from "react"
import { toast } from 'react-toastify'
import axios from 'axios'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './index.css'


const ResetPassword = () => {
    //const { userId, firstName, lastName } = sessionStorage
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')


    const navigate = useNavigate()

    const resetPassword = () => {
        if (email.length == 0)
            toast.warning('please enter email');
        else if (password.length == 0)
            toast.warning('please enter password');
        else if (ConfirmPassword.length == 0)
            toast.warning('please confirm the password');
        else if (ConfirmPassword != password)
            toast.warning('password does not match');
        else {
            const url = "http://localhost:8080/resetpassword"
            const data = { "email": email, "password": password }

            axios.put(url, data).then((Response) => {
                const result = Response.data;

                console.log(result)

                if (result.status == "error") {
                    toast.error("Invalid Email");
                }
                else {
                    toast.success("Password updated")
                    navigate("/user/signin");
                }

            })
        }
    }

    return (

        <div style={{ backgroundColor: "lightyellow" }}>

            <Header></Header>


            <div
            style={{
              textAlign: "center",
              color: "yellow",
              backgroundColor: "darkblue",
              fontSize: 24,
            }}
          >
           Reset Your Password Here
          </div>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <br />
                    <br />
                    <div className="card" id="card4">
                        <div className="form" style={{ borderRadius: 10, borderWidth: 1, borderColor: "black", width: "80%", paddingLeft: 110 }}>
                            <div className="mb-3">
                                <label htmlFor="" className="label-control" >
                                    Email address<span class="required" style={{ color: "red" }}>*</span>
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
                                    Enter New Password<span class="required" style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    type="password"
                                    className="form-control"
                                >
                                </input>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="" className="label-control">
                                    Confirm Password<span class="required" style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value)
                                    }}
                                    type="password"
                                    className="form-control"
                                >
                                </input>
                            </div>

                            <br />
                            <div >
                                <button onClick={resetPassword} className="btn btn-success" style={{ width: 150 }}>Reset Password</button>
                                <br></br>
                                <br></br>

                            </div>


                        </div>

                    </div>

                    <br />
                    <br />
                </div>
                <div className="col"></div>

            </div>
            <div style={{ paddingTop: 200 }}>
            </div>
            <Footer></Footer>
        </div>
    )
}



export default ResetPassword