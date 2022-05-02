import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from '../../Footer/Footer'
import Header2 from '../../Header2/Header2'

const GetAllClaims = () => {
    const [Claims, setClaim] = useState([]);
    const [status, setStatus] = useState("")

    const updateClaim = (id, newStatus) => {
        const url = `http://localhost:8080/updateclaim/${id}`;

        const data = { "status": newStatus }
        axios.put(url, data).then((Response) => {
            window.location.reload();
        });

    }

    const loadPolicyDetails = () => {
        const url = `http://localhost:8080/getallclaim`;
        axios.get(url).then((Response) => {
            const result = Response.data;
            console.log(result);

            setClaim(result);
        });
    };

    useEffect(() => {
        loadPolicyDetails();
    }, []);



    return (
        <div>

            <Header2 />
            <h3 style={{ textAlign: "center" }}>All User Claims </h3>
            <table className="table table-bordered" style={{ textAlign: "center", borderColor : "black" }}>
                <thead>
                    <tr>
                        <th scope="col">ClaimId</th>                      
                        <th scope="col">Policy Number</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Claims.map((data) => (
                        <tr key={data.claimId}>
                            <td>{data.claimId}</td>
                            <td>{data.policyNum}</td>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>

                            <td><input type="text" placeholder={data.status} onChange={(e) => {
                                setStatus(e.target.value)
                            }} /></td>

                            <td><button class="btn btn-warning" onClick={() => updateClaim(data.claimId, status)}>Update</button></td>


                        </tr>
                    ))}


                </tbody>



            </table>
            <center>
            <a
              type="button"
              style={{ margin: "5%" }}
              class="btn btn-primary"
              href="/afteragentsignin"
            >
              Back
            </a>
          </center>



            <br />
            <Footer></Footer>

        </div>






    );
};

export default GetAllClaims;
