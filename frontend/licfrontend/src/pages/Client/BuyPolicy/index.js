import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Header2 from "../../Header2/Header2";
import Footer from "../../Footer/Footer";

const BuyPolicy = () => {
  const [policies, setPolicies] = useState([]);

  const [policyId, setPolicyId] = useState();
  const { userId } = sessionStorage;

  const navigate = useNavigate();

  const loadPolicyDetails = () => {
    const url = `http://localhost:8080/policydetails`;
    axios.get(url).then((Response) => {
      const result = Response.data;
      console.log(result);

      setPolicies(result);
    });
  };

  const buypolicy = () => {
    const url = `http://localhost:8080/buypolicy`;


    const data = {
      policyId: policyId,
      userId: userId,
    };

    axios.post(url, data).then((Response) => {
      const result = Response.data;
      console.log(result);
      if (result == 0) {
        toast.warning("Please select Policy Id");
    }else if (result == -1) {
        toast.error("You have already buyed this policy");
      }
       else {
         toast.success("Buyed policy successfully")
        navigate("/aftersignin");
      }
    });
  };

  useEffect(() => {
    loadPolicyDetails();
  }, []);

  return (
    <div style={{backgroundColor:"lightyellow", width: '100vw', height: '100vh'}}>
      <Header2></Header2>
      <h3 style={{ textAlign: "center" }}><b><u>Buy Policy from here </u> </b> </h3>
      <table className="table table-bordered" style={{ textAlign: "center" , border:5,borderColor:"black"}}>
        <thead>
          <tr>
            <th>Select here for policy</th>
            <th scope="col">Policy Id</th>
            <th scope="col">Sum Assured</th>            
            <th scope="col">Policy Name</th>
            <th scope="col">Type of Policy</th>
            <th scope="col">Installments No's</th>
            <th scope="col">Premium Amount</th>
            <th scope="col">No. of Years</th>
            <th scope="col">Information</th>
          </tr>
        </thead>
        <tbody>
          {/* <div class="form-check">
            <input
             
              type="radio"
              name="flexRadioDefault"
              hidden
            />
           
          </div> */}
          {policies.map((data) => (
            <tr key={data.policyId}>
              <td>
                <input
                  type="radio"
                  name="policyid"
                  value={data.policyId}
                  onChange={(e) => {
                    setPolicyId(e.target.value);
                  }}
                ></input>
                Select Here
              </td>
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
      <div class="text-center" style={{ marginTop: "3%", marginBottom: "20%" }}>
        <button style = {{marginRight : 20}}
          onClick={buypolicy}
          className="btn btn-success"
        >
          Buy Policy
        </button>
        <a type="button" class="btn btn-primary" href="/aftersignin" >Back</a>
      </div>
      
      <Footer/>
    </div>
  );
};

export default BuyPolicy;
