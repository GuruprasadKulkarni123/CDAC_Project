import Footer from '../../Footer/Footer'
import Header2 from '../../Header2/Header2'
import axios from "axios";
import { useState, useEffect } from "react";

const ComplaintStatus = () => {
    const { userId } = sessionStorage
    const [complaint, setComplaint] = useState([]);

    const loadPolicyDetails = () => {
        const url = `http://localhost:8080/getusercomplaint/${userId}`;
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
            <div style = {{backgroundColor : "lightyellow", backgroundSize: "100%",height: "100%", paddingBottom:2}}>

            <h3 style={{ textAlign: "center", backgroundColor : "darkblue", color : "whitesmoke"}}>Your Complaint Status </h3>
            <div className="container" >
                <table className="table table-bordered" style={{ textAlign: "center", marginTop : "4%", borderColor: "black" }}>
                    <thead>
                        <tr>
                            <th scope="col">Complaint Id</th>
                            <th scope="col">Customer's First Name</th>
                            <th scope="col">Customer's Last Name</th>
                            <th scope="col">Email Address</th>
                            <th scope="col">Complaint Details</th>
                            <th scope="col">Complaint Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {complaint.map((data) => (
                            <tr key={data.complaintId}>
                                <td>{data.complaintId}</td>
                                <td>{data.cusFirstName}</td>
                                <td>{data.cusLastName}</td>
                                <td>{data.email}</td>
                                <td> {data.details}</td>
                                <td> {data.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <center>
        <a type="button" style={{ margin: '5%' }} class="btn btn-primary" href="/aftersignin" >Back</a>
      </center>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default ComplaintStatus