import { useNavigate } from 'react-router'
import Header2 from '../../Header2/Header2'
import Footer from '../../Footer/Footer'
import { Link } from 'react-router-dom'
import Background from '../../../images/img.jpg';


const AfterAgentSignIn = () => {

  const navigate = useNavigate()

  const profile = () => {
    navigate('/profile')
  }

  const logoutUser = () => {

    navigate('/logout')
  }

  return (

    <div style={{ height: 850, backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
      <Header2/>
      <div className="row">
        <nav class="navbar navbar-light" style={{ backgroundColor: 'yellow', opacity: 0.9 }}>
          <div class="container-fluid">
            <a class="navbar-brand" href="/afteragentsignin" style = {{color : "darkblue"}}> <u><b>Agent DashBoard</b></u>
              <img src={require('../../../images/dashboard1.jpg')} alt="" width="35" height="35" class="d-inline-block align-text-top" />
              
            </a>

            <a class="navbar-brand" href="/downloadforms" style = {{color : "darkblue"}}> <u><b>Download Form</b></u></a>
            <a ></a>
          </div>
        </nav>
      </div>

      <div className="row" style={{ textAlign: "center" }} >
        <div className="col-3" style={{ backgroundColor: "lightsteelblue", height: 588, opacity: 0.7 }}>
          <br />
          <div className="float-start">
            <ul type="square">
              <li>
                <a href="/getallclients" style={{ color: "blue", fontSize: 22, marginTop: 200, textAlign: 'left', marginRight: 70 }}><b>See All Users</b></a>
              </li>
              <br />

              <li>
                <a href="/getallcomplaints" style={{ color: "blue", fontSize: 22, marginTop: 200, textAlign: 'left', marginRight: 10 }}><b>See All Complaints</b></a>
              </li>
              <br />

              <li>
                <a href="/getallclaims" style={{ color: "blue", fontSize: 22, marginTop: 200, textAlign: 'left', marginRight: 60 }}><b>See All Claims</b></a>
              </li>
              <br />

              <li>
                <a href="/agentbenefits" style={{ color: "blue", fontSize: 22, marginTop: 200, textAlign: 'left', marginRight: 15 }}><b>LIC Agent Benefits</b></a>
              </li>

              <br />

            </ul>
          </div>
        </div>


        <div className="col" style={{ paddingTop: 100 }}>

        </div>

        <div className="col" style={{ paddingTop: 20, paddingBottom: 30 }}>
          <a class="navbar-brand" href="/addnewpolicy" style={{ color: "darkblue", fontSize: 28 }}>
            <img src={require('../../../images/Untitled.png')} alt="" width="250" height="200" class="d-inline-block align-text-top" />
            <br></br>
            <u><b style={{ color: "darkblue", fontSize: 28, backgroundColor: "white",marginLeft:30 }}>Add New Policy</b></u>
            <br></br>
            <br></br>

          </a>
          <a class="navbar-brand" href="/allpolicies" >
            <img src="https://play-lh.googleusercontent.com/sg9AFBUQyvM9s9_s-8tH6XbYyOoPTcQRscWfw2NNImWiKUOtK8BjtkmkMFmq3rIVvZ6p" alt="" width="280" height="210" class="d-inline-block align-text-top" />
            <br></br>
            <u><b style={{ color: "darkblue", fontSize: 28, backgroundColor: "white", marginLeft:35 }}>All Policies</b></u>
          </a>

        </div>


        <Footer></Footer> 
        </div>
    </div>


  );
};

export default AfterAgentSignIn