import Header from '../Header/Header'
import Footer from '../Footer/Footer'
const Mission = () => {

    return (
        <div>
            <div style={{ backgroundColor: "lightyellow", width: '100%', height: 700 }}>

                <Header></Header>
                <h1 style={{ textAlign: "center", backgroundColor: "chocolate" }}><b><u>Mission / Vision</u></b></h1>
                <div>
                    <div className="container" >
                        <h4>Mission</h4>
                        <p><strong>"</strong>Ensure and enhance the quality of life of people through financial security by providing products and services of aspired attributes with competitive returns, and by rendering resources for economic development.<strong>"</strong></p>
                        <br />
                        <h4>Vision</h4>

                        <p><strong>"</strong>A trans-nationally competitive financial conglomerate of significance to societies and Pride of India.<strong>"</strong></p>
                        <br />
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>



    )
}

export default Mission;