import axios from "axios";
import { useState, useEffect } from "react";
import Footer from '../../Footer/Footer'
import Header2 from "../../Header2/Header2";


const UsersList = () => {
 // const { userId, firstName, lastName,address,contact,email,role,status} = sessionStorage;

  const [userlist, setUserList] = useState([]);

  const loadUsersDetails = () => {
    const url = `http://localhost:8080/getallclients`;
    axios.get(url).then((Response) => {
      const result = Response.data;
      console.log(result);

      setUserList(result);
    });
  };

  useEffect(() => {
    loadUsersDetails();
  }, []);

  return (
    <div >
     
<Header2/>
<div >
  <div className="col"></div>
  <div className="col">
    
  {/* <nav class="navbar navbar-light" style={{ backgroundColor: 'darkblue', opacity: 0.9 }}>
      <a href="/afteragentsignin"  style={{color:"yellow",backgroundColor:""}}><b><u>Back to Agent AgentDashboard</u></b></a>
      
      <a href ="/logout" style={{color:"yellow",backgroundColor:"darkblue", marginRight:10}}><b><u>LogOut</u></b></a>
    </nav> */}
 


   
  </div>
  <div className="col"></div>
</div>

      <h3 style={{ textAlign: "center", backgroundColor: "darkblue", color : "yellow" }}><b><u>User's List </u></b></h3>
      <table className="table table-bordered" style={{ textAlign: "center", borderColor:"black"}}>
        <thead>
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            
          </tr>
        </thead>
        <tbody>
          {userlist.map((data) => (
            <tr key={data.userId}>
              <td>{data.userId}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.address}</td>
              <td>{data.contact}</td>
              <td>{data.email}</td>
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
      <Footer />
    </div>
  );
};

export default UsersList;
