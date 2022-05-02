import Header2 from '../../Header2/Header2'
import Footer from '../../Footer/Footer'

import "./index.css"


const AfterSignIn = () => {


  return (

    <div style={{ height: 850, backgroundColor: 'lightblue' }}> {/* whole page*/}

        <Header2/>
     

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

      <div className="row" style={{ textAlign: "center" }} >
        <div className="col" style={{ backgroundColor: "darkblue", height: 553 }}>
          <br />
          <ul type="square">
            <li>
              <a href="/regcomplaint" style={{ color: "yellow", fontSize: 24, marginTop: 200, marginRight: 160 }}><b>Register Your Complaint</b></a>
            </li>
            <br />

            <li>
              <a href="/getcomplaintstatus" style={{ color: "yellow", fontSize: 24, marginTop: 200, marginRight: 185 }}><b>Your Complaint Status</b></a>
            </li>
            <br />

            <li>
              <a href="/regclaim" style={{ color: "yellow", fontSize: 24, marginTop: 200, marginRight: 216 }}><b>Register Your Claim</b></a>
            </li>
            <br />

            <li>
              <a href="/getclaimtstatus" style={{ color: "yellow", fontSize: 24, marginTop: 200, marginRight: 240 }}><b>Your Claim Status</b></a>
            </li>
            <br />

          </ul>
        </div>


        <div className="col" style={{ paddingTop: 100 }}>
          <a class="navbar-brand" href="/mypolicies" style={{ color: "purple", fontSize: 24 }}>
            <img src="https://assets.thehansindia.com/h-upload/2020/12/12/1017938-lic.webp" alt="" width="400" height="340" class="d-inline-block align-text-top" />
            <br></br>
            <u>My Policies</u>
          </a>
        </div>

        <div className="col" style={{ paddingTop: 100 }}>
          <a class="navbar-brand" href="/allpolicies" style={{ color: "purple", fontSize: 24 }}>
            <img src="https://play-lh.googleusercontent.com/sg9AFBUQyvM9s9_s-8tH6XbYyOoPTcQRscWfw2NNImWiKUOtK8BjtkmkMFmq3rIVvZ6p" alt="" width="400" height="340" class="d-inline-block align-text-top" />
            <br></br>
            <u>All Policies</u>
          </a>
          

        </div>
       
          
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></link>

    <div
      style={{
        textAlign: "center",
        color: "black",
        backgroundColor: "yellow",
        fontSize: 24,
      }}
    >
      Zindagi ke saath bhi, Zindagi ke baad bhi
    </div>
    <div
      className="text-center text-lg-start text-muted"
      style={{ paddingTop: 1, backgroundColor: "lightsteelblue" ,fontSize:16}}
    >
      <div className="container text-center text-md-start mt-5">
        <div className="row" style = {{color :"black"}}>
          <div className="col">
            <h4 className="text-uppercase fw-bold mb-4">About us</h4>
            <p>
              <a href="/info" className="text-reset">
                Things you must know
              </a>
            </p>
            <p>
              <a href="/info" className="text-reset">
                Why Life Insurance
              </a>
            </p>
            <p>
              <a href="/info" className="text-reset">
                Why Invest
              </a>
            </p>
          </div>

          <div className="col">
            <h4 className="text-uppercase fw-bold mb-4">Useful links</h4>
            <p>
              <a
                href="/terms"
                className="text-reset"
              >
                Terms & Condition
              </a>
            </p>
        
            <p>
              <a href="/faqs" className="text-reset">
                FAQS
              </a>
            </p>
            <p>
              <a href="/mission" className="text-reset">
              Mission / Vision
              </a>
            </p>
          </div>

          <div className="col-3">
             <center><h4 className="text-uppercase fw-bold mb-4">Contact</h4>
            <div>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-youtube"></a>
            </div>
            </center>
          </div>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: 20 }}
      >
        Copyright &copy; 2022 - All Rights Reserved - Content on this website
        is published and managed by D2 project group.
      </div>
    </div>
  </div>    </div>


  );
};

export default AfterSignIn