import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Background from '../../images/licoffice.webp';

const AboutUs = () => {
  return (
    <div>

      <Header></Header>
      <h1 style={{ textAlign: "center", color: "white", backgroundColor : "darkblue" }}>About us</h1>
      <div style={{ height: "100%", backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
        <div>
        <div className="container"  style={{ backgroundColor: "white", opacity: 0.8, paddingTop: 80, height: 800}}>
          <p style={{ textAlign: "justify", marginLeft: 150, marginRight: 120, fontSize: 24 ,color:"black"}}>
            <br></br>

            Every day we wake up to the fact that more than 250 million
            lives are part of our family called LIC.
            <br></br>
            <br></br>

            We are humbled by the magnitude of the responsibility
            we carry and realise the lives that are associated with us
            are very valuable indeed.
            <br></br>
            <br></br>

            Though this journey started over six decades ago,
            we are still conscious of the fact that, while insurance may be
            a business for us, being part of millions of lives every day for
            the past 65 years has been a process called TRUST.
            <br></br>
            <br></br>

            <p style={{ fontWeight: 'bold', fontSize: 24, color: "black", paddingBottom: 200 }}>A true saga Of Trust.</p>


          </p>
          
        </div>
        
        </div>
        <Footer></Footer>
      </div>

      
    </div>
  )
}
export default AboutUs