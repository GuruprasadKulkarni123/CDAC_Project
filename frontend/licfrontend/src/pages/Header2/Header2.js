import { FcContacts,FcAbout } from "react-icons/fc";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router'

const Header2 = () => { const { firstName, lastName } = sessionStorage;

const navigate = useNavigate();

const profile = () => {
  navigate("/profile");
};
const logoutUser = () => {
  navigate("/logout");
};
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

                  <div className="btn-group " role="group" >
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-primary btn-lg dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="true">
                Welcome, {firstName} {lastName}
              </button>
              <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1" >
                <li>
                  <button onClick={profile} className="btn btn-secondary btn-lg dropdown-item">
                    My Profile
                </button>
                </li>
                <li>
                  <li>
                    <button onClick={logoutUser} className="btn btn-secondary btn-lg dropdown-item">
                      Logout <MdLogout/>
                </button>
                  </li>
                </li>
              </ul>
            </div>
                      

                  </div>

              </div>


          </div>
      </nav>
);
};
export default Header2;
