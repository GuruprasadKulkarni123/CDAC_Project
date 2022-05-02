import axios from "axios";
import { useState, useEffect } from "react";
import Header2 from '../../Header2/Header2'
import Footer from "../../Footer/Footer";

const MyPolicies = () => {
  const { userId } = sessionStorage;

  const [policies, setPolicies] = useState([]);

  const loadPolicyDetails = () => {
    const url = `http://localhost:8080/getuserpolicies/${userId}`;
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
    <div style={{ backgroundColor: "lightgoldenrodyellow", width: '100%', height: '100%' }}>
      <Header2 />
      <div className="row">
        <nav class="navbar navbar-light" style={{ backgroundColor: 'yellow' }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="/aftersignin" paddingTop="10">
              <img src={require('../../../images/dashboard1.jpg')} alt="" width="35" height="35" class="d-inline-block align-text-top" />
              <u>DashBoard</u>
            </a>

            <a class="navbar-brand" href="/downloadforms"> <u>Download Form</u></a>
            <a class="navbar-brand" href="/buypolicy"> <u>Buy new policy</u></a>
          </div>
        </nav>
      </div>
      <h3 style={{ textAlign: "center" }}><b><u>My Policies </u> </b> </h3>
      <table className="table table-bordered" style={{ textAlign: "center", borderBlockColor: "black", border: 10 }}>
        <thead>
          <tr>
            <th scope="col">Policy Id</th>
            <th scope="col">Policy Number</th>
            <th scope="col">Sum Assured (Rs.)</th>
            <th scope="col">Policy Name</th>
            <th scope="col">Type</th>
            <th scope="col">Installments No's</th>
            <th scope="col">Premium Amount (Rs.)</th>
            <th scope="col">Maturity Date</th>
            <th scope="col">Information</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((data) => (
            <tr key={data.policyId}>
              <td>{data.policyId}</td>
              <td>{data.policyNum}</td>
              <td>{data.sumAssured}</td>
              <td>{data.policyName}</td>
              <td>{data.type}</td>
              <td>{data.installmentsNo}</td>
              <td>{data.premiumAmount}</td>
              <td>{data.maturityDate}</td>
              <td>{data.info}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <center>
        <a type="button" style={{ margin: '5%' }} class="btn btn-primary" href="/aftersignin" >Back</a>
      </center>
      

      <Footer />
    </div>
  );
};

export default MyPolicies;
