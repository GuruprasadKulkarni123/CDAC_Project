import Footer from "../../Footer/Footer";
import Header2 from "../../Header2/Header2";
import axios from "axios";
import { useState, useEffect } from "react";

const ClaimStatus = () => {
  const [claim, setStatus] = useState([]);
  const { userId } = sessionStorage;
  const loadPolicyDetails = () => {
    const url = `http://localhost:8080/getuserclaim/${userId}`;
    axios.get(url).then((Response) => {
      const result = Response.data;
      console.log(result);

      setStatus(result);
    });
  };

  useEffect(() => {
    loadPolicyDetails();
  }, []);

  return (
    <div>
      <Header2 />
      <div
        style={{
          backgroundColor: "lightyellow",
          backgroundSize: "100%",
          height: "100%",
          paddingBottom: 2,
        }}
      >
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "darkblue",
            color: "whitesmoke",
          }}
        >
          Your Claim Status
        </h3>

        <div className="container">
          <table
            className="table table-bordered"
            style={{
              textAlign: "center",
              borderColor: "black",
            }}
          >
            <thead>
              <tr>
                <th scope="col">ClaimId</th>
                <th scope="col">Policy Number</th>
                <th scope="col">Claim Status</th>
              </tr>
            </thead>
            <tbody>
              {claim.map((data) => (
                <tr key={data.claimId}>
                  <td>{data.claimId}</td>
                  <td>{data.policyNum}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <center>
            <a
              type="button"
              style={{ margin: "5%" }}
              class="btn btn-primary"
              href="/aftersignin"
            >
              Back
            </a>
          </center>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClaimStatus;
