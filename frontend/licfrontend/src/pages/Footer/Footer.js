import "./index.css";

const Footer = () => {
  return (
    <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></link>

    <div
      style={{
        textAlign: "center",
        color: "yellow",
        backgroundColor: "darkblue",
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
  </div>
  );
};

export default Footer;
