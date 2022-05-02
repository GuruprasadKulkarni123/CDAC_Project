import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from '../../Footer/Footer'
import Header from '../../Header2/Header2'
import Header2 from "../../Header2/Header2";

const GetAllComplaints = () => {
    const [complaints, setComplaint] = useState([]);
    const [status, setStatus] = useState("")
    const updateComplaint = (id, newStatus) => {
        const url = `http://localhost:8080/updatecomplaint/${id}`;

        const data = { "status": newStatus }
        axios.put(url, data).then((Response) => {
            window.location.reload();
        });

    }

    const loadPolicyDetails = () => {
        const url = `http://localhost:8080/getallcomplaints`;
        axios.get(url).then((Response) => {
            const result = Response.data;
            console.log(result);

            setComplaint(result);
        });
    };

    useEffect(() => {
        loadPolicyDetails();
    }, []);



    return (
        <div>

            <Header2 />
            <h3 style={{ textAlign: "center" }}>All Client Complaints </h3>
            <table className="table table-bordered" style={{ textAlign: "center", borderColor : "black" }}>
                <thead>
                    <tr>
                        <th scope="col">Complaint Id</th>
                        <th scope="col">Customer First Name</th>
                        <th scope="col">Customer Last Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Details</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map((data) => (
                        <tr key={data.complaintId}>
                            <td>{data.complaintId}</td>
                            <td>{data.cusFirstName}</td>
                            <td>{data.cusLastName}</td>
                            <td>{data.email}</td>
                            <td>{data.details}</td>
                            <td>{data.type}</td>

                            <td><input type="text" placeholder={data.status} onChange={(e) => {
                                setStatus(e.target.value)
                            }} /></td>

                            <td><button class="btn btn-success" onClick={() => updateComplaint(data.complaintId, status)}>Update</button></td>
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

export default GetAllComplaints;
