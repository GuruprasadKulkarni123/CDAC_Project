import axios from "axios";
import { useState, useEffect } from "react";
import Header2 from '../Header2/Header2'
import Footer from '../Footer/Footer'

const AllPolicies = () => {
  const [policies, setPolicies] = useState([]);

  const loadPolicyDetails = () => {
    const url = `http://localhost:8080/policydetails`;
    axios.get(url).then((Response) => {
      const result = Response.data;
      console.log(result);

      setPolicies(result);
    });
  };

  useEffect(() => {
    loadPolicyDetails();
  }, []);

  return (
    <div style={{backgroundColor:"lightgray", width: '100%', height: '100%'}}>
      <Header2/>
      <h3 style={{ textAlign: "center"}}><b><u>All Policies </u> </b></h3>
      <table className="table table-bordered"  style={{ textAlign: "center",border:5,borderColor:"black"}}>
        <thead>
          <tr>
            <th scope="col">Policy Id</th>
            <th scope="col">Sum Assured</th>
            <th scope="col">Policy Name</th>
            <th scope="col">Policy Type</th>
            <th scope="col">Installment No</th>
            <th scope="col">Premium Amount</th>
            <th scope="col">No. of Years</th>
            <th scope="col">Policy Info</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((data) => (
            <tr key={data.policyId}>
               <td>{data.policyId}</td>
              <td>{data.sumAssured}</td>
              <td>{data.policyName}</td>
              <td>{data.type}</td>
              <td>{data.installmentsNo}</td>
              <td>{data.premiumAmount}</td>
              <td>{data.noOfyears}</td>
              <td>{data.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div  style={{paddingTop:250}}>

      </div>
      <Footer/>
    </div>
  );
};

export default AllPolicies;
