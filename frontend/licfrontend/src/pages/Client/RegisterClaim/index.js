import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Header2 from '../../Header2/Header2'
import Footer from '../../Footer/Footer'
import Background from '../../../images/image1.webp';


const RegisterClaim = () => {
  const { userId } = sessionStorage
  const [num, setNum] = useState("")

  const navigate = useNavigate();

  
  const registerclaim = () => {

    const url = `http://localhost:8080/registerclaim/${userId}`

    const data = { "policyNum": num,"status":"Pending","userId": userId }

    axios.post(url, data).then((Response) => {
      const result = Response.data;
      console.log(result)
      if (result==1) {
        toast.success("Your claim is successfull")
        navigate("/aftersignin");
      } 
      else{
        toast.warning("Already claimed");    
      }
    })

  }

  return (
<div>
    <Header2></Header2>
    <div style={{ height: "100%", backgroundImage: `url(${Background})`, backgroundRepeat : "no-repeat", backgroundSize : "100%", paddingTop:50, paddingBottom:50}}>
    <div className="container" style = {{backgroundColor: "white", opacity : 0.9}}>
      <table style={{ marginLeft: "auto", marginRight: "auto", width: "70%", marginTop: '0%' }}>
        <thead>
          <th style={{ backgroundColor: "darkblue", textAlign: 'center', padding: "0%" }}>
            <h1 style={{ textAlign: 'center', marginTop: '2%', color : "white" }}>Register Claim</h1>
          </th>
        </thead>
        <tbody >
          <br />
          <br /> 
 
           
         

          {/* <select onChange={(e) => { setNum(e.target.value) }}>{
            buyers.map((data) =>
              <option key={data.policyNum} value={data.policyNum}>{data.policyNum}</option>
            )
          }</select> */}

          <tr  >
            <div class="text-center">
              <b><u>Enter your Policy Number</u></b> 
            <input style = {{width: "60%", marginLeft:60}} type="text" onChange={(e) => { setNum(e.target.value) }} /> 
            <br />
            
            <button type="submit" style={{ marginTop: '5%', marginBottom:250 ,marginRight : 20}} class="btn btn-success" onClick={registerclaim} >Claim</button>
          
            
            <a type="button" style={{ marginTop: '5%', marginBottom:250 }} class="btn btn-primary" href="/aftersignin" >Back</a>
           
              
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

export default RegisterClaim;
