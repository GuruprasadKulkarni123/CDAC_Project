import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Background from '../../images/image2.webp';

const ContactUs = () => {
    return (
        <div>
            <Header></Header>

            <marquee style={{ color: "orange", backgroundColor: "black" }}>
                "Individual Pension Policyholders/ Annuitants can submit Digital Life Certificate through mobile app Jeevan Saakshya. App can be downloaded from play store"     "Revised Working Hours of All Offices of LIC Of India from 10.05.2021, pursuant to Notification S.O.1630(E) Dated 15th April 2021 wherein the CENTRAL GOVERNMENT has Declared Every Saturday as a Public Holiday for Life Insurance Corporation of India."
                </marquee>
            <div style={{ textAlign: "center", backgroundColor: "yellow", color: "blue" }}>
                <h1 >Contact Us</h1>
                <h4 >Address of LIC Central office:</h4>
            </div>

            <div style={{ height: 600, backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                <p style={{ color: 'white' }}>
                    <h2>Life Insurance Corporation Of India</h2>
                    <h2> Central Office</h2>
                    <h2>'Yogakshema'</h2>
                    <h2>Jeevan Bima Marg</h2>
                    <h2>Nariman Point</h2>
                    <h2> Mumbai 400021</h2>
                </p>

            </div>
            <div style={{ paddingTop: 0 }}>


                <h4 style={{ textAlign: "center", backgroundColor: "yellow", color: "blue" }}>Phone Help Line:</h4>
                <h3 style={{ textAlign: "center", color: "blue" }}>Contact LIC Call Center at +91-9156070590 </h3>
                <h3 style={{ textAlign: "center", color: "blue" }}>Services are now available 24*7</h3>
            </div>
        </div>



    )
}
export default ContactUs;