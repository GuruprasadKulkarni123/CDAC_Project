import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const FAQS = () => {

    return (

        <div style={{ backgroundColor: "lightyellow", width: '100%', height: '100%' }}>

            <Header></Header>
            <h1 style={{ textAlign: "center", backgroundColor: "chocolate" }}><b><u>Frequently Asked Questions</u></b></h1>
            <div>
                <div className="container" >
                    <ul>

                        <li><b>LIC's e-Services:</b></li>
                        <li>Do I have to pay any charges for e-Services?<br />
                            We are delighted to offer these facilities free of charge to our valuable customers.</li>
                        <br />
                        <li>Who can avail LIC's e-Services?<br />
                            All our valuable customers who have a policy on his/her life or on the life of his/her minor children. Registration on LIC Portal is mandatory for availing LIC's e-Services.</li>
                        <br />
                        <li>How do I register for e-services?
                            <ul>
                                <li><b>a. If already registered on LIC Portal:</b>
                                    <ul>
                                        <li>Click on e-Services, login with your user-id and password.</li>
                                        <br />
                                        <li>Register your policies for availing the e-services by filling up the form provided.</li>
                                        <br />
                                        <li>Print the form, sign it and upload the scanned image of the form.</li>
                                        <br />
                                        <li>Upload the scanned image of PAN Card or Aadhaar Card or Passport.</li>
                                        <br />
                                        <li>The file size of the scanned image should be less than 100 KB and the image should be in any of the following formats:<br />
                                            .bmp, .png, .jpg, .jpeg, .gif, .tiff</li>
                                        <br />
                                        <li>After verification by our offices, an acknowledgement e-mail and SMS will be sent to you. "Now you are ready to avail our e-services."</li>
                                    </ul>
                                </li>
                                <li><b>b. If not registered on LIC Portal:</b>
                                    <ul>
                                        <li>Visit <a href="http://www.licindia.in">www.licindia.in</a> , click on the tab "new User", select your own user-id and password and provide all the necessary information. Now you are a registered Portal user.</li>
                                        <br />
                                        <li>For availing e-Services, click on the tab "e-Services", login with the user-id created and register your policies for availing the e-services by filling up the form provided.</li>
                                        <br />
                                        <li>Print the form, sign it and upload the scanned image of the form.</li>
                                        <br />
                                        <li>Upload the scanned image of PAN Card or Aadhaar Card or Passport</li>
                                        <br />
                                        <li>After verification by our offices, an acknowledgement e-mail and SMS will be sent to you. Now you are ready to avail our e-services.</li> </ul>
                                </li>



                            </ul>
                        </li>
                        <li>Can I add policies on the lives of my family members?<br />
                            You can register policies on the life of your minor children in addition to policies on your own life. As soon as the children become major, separate user-id needs to be created for them to avail e-services for the policies on their lives.</li>
                        <br />
                        <li>How do I add my new policy number for e-Services?<br />
                            Login through your user-id and add the new policies through "Enroll policies" option provided on the Home Page of LIC's e-Services.</li>
                        <br />
                        <li>In case of any problems encountered during registration for e-Services, whom to contact for assistance?<br />
                            Any of our 73 Customer Zones can be contacted between 8 am to 8 pm on weekdays (working days only). List of phone numbers and email ids is available on our website <a href="http://www.licindia.in" >www.licindia.in</a></li>

                    </ul>


                </div>

            </div>
            <Footer></Footer>
        </div>


    )
}

export default FAQS;