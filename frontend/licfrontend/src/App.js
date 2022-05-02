import './App.css';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Signin from './pages/Client/SignIn';
import Signup from './pages/Client/SignUp';
import UserProfile from './pages/UserProfile'
import Logout from './pages/Logout'
import MyPolicies from './pages/Client/MyPolicies';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AfterSignIn from './pages/Client/CustomerDashboard';
import RegisterComplaint from './pages/Client/RegisterComplaint';
import RegisterClaim from './pages/Client/RegisterClaim';
import ChangeProfile from './pages/ChangeProfile';
import AgentSignin from './pages/Agent/AgentSignin'
import AfterAgentSignIn from './pages/Agent/AgentDashboard'
import ClaimStatus from './pages/Client/ClaimStatus/claimstatus';
import AgentBenefits from './pages/Agent/AgentBenefits';
import GetAllComplaints from './pages/Agent/GetAllComplaint/allcomplaint';
import GetAllClaims from './pages/Agent/GetAllClaim/allclaim';
import ComplaintStatus from './pages/Client/ComplaintStatus/usercomplaintstatus';
import UsersList from './pages/Agent/UserList';
import AllPolicies from './pages/AllPolicies';
import BuyPolicy from './pages/Client/BuyPolicy';
import AddNewPolicy from './pages/Agent/AddNewPolicy';
import DownloadForms from './pages/DownloadForms';
import ResetPassword from './pages/ResetPassword';
import InsuranceInfo from './pages/InsuranceInfo';
import Terms from './pages/Terms';
import FAQS from './pages/FAQS';
import Mission from './pages/Mission';



const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  return loginStatus == '1' ? <AfterSignIn /> : <Signin />
  // if (loginStatus == '1') {
  //   return <Home />
  // } else {
  //   return <Signin />
  // }
}

function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/AuthorizeUser" element={<AuthorizeUser />} />
          <Route path="/" element={<Home/>} />         
          <Route path="/aboutUs" element={<AboutUs/>} /> 
          <Route path="/contactUs" element={<ContactUs/>} />        
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/logout" element={<Logout/>} />         
          <Route path="/changeprofile" element={<ChangeProfile/>} />
          <Route path="/allpolicies" element={<AllPolicies/>} />
          <Route path="/downloadforms" element={<DownloadForms/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/info" element={<InsuranceInfo/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/faqs" element={<FAQS/>} />
          <Route path="/mission" element={<Mission/>} />


           {/* Client */}
           <Route path="/user/signin" element={<Signin />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/aftersignin" element={<AfterSignIn/>} />
          <Route path="/buypolicy" element={<BuyPolicy/>} />
          <Route path="/mypolicies" element={<MyPolicies/>} />
          <Route path="/regcomplaint" element={<RegisterComplaint/>} />
          <Route path="/getcomplaintstatus" element={<ComplaintStatus/>} />
          <Route path="/regclaim" element={<RegisterClaim/>} />
          <Route path="/getclaimtstatus" element={<ClaimStatus/>} />
         
          {/* Agent */}
          <Route path="/agent/signin" element={<AgentSignin />} />
          <Route path="/afteragentsignin" element={<AfterAgentSignIn/>} />         
          <Route path="/agentbenefits" element={<AgentBenefits/>} />
          <Route path="/getallcomplaints" element={<GetAllComplaints/>} />
          <Route path="/getallclaims" element={<GetAllClaims/>} />         
          <Route path="/getallclients" element={<UsersList/>} />  
          <Route path="/addnewpolicy" element={<AddNewPolicy/>} />         
       
          
           
          

        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  )
}

export default App
