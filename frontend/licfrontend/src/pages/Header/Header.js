import { FcHome,FcContacts,FcAbout } from "react-icons/fc";
import "./index.css";
const Header = () => {
    return (
        <nav class="navbar  navbar-expand-lg " style={{backgroundColor:'lightsteelblue'}}>
            <div class="float-start">
                <img
                    src={require("../../images/LIC-Logo.jpg")}
                    style={{ width: 300, paddingLeft: 50 }}
                />
            </div>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">
                            <FcHome size={40} />
                            <br />
                            Home
                        </a>
                    </li>
                    

                    <li class="nav-item">
                        <a class="nav-link" href="/aboutUs">
                        <FcAbout size={40} />
                            <br />
                            About us
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactUs">
                        <FcContacts size={40}/>
                        <br />
                            Contact us
                        </a>
                    </li>
                </ul>

            </div>
            <div className="float-end">
                <div className="row">
                    <div className="col">


                        <img src={require("../../images/logoamrit.jpg")}></img>
                       
                       

                    </div>
                    <div className="col">


                        <img src={require("../../images/swaccha.png")}></img>
                        

                    </div>

                </div>


            </div>
        </nav>
    );
};

export default Header;
