import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
const BootstrapCarousel = () => {


    return (
        <div>

            <Carousel>
                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/LIC-Bima.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item  >


                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/LIC-Foundation.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item  >


                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/LIC_TechTerm.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item  >


                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/LIC_Jeevan-Saakshya.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item  >


                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/LIC_MAH.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item  >


                <Carousel.Item style={{ 'height': "300px", backgroundColor: "darkblue" }} >
                    <img style={{ 'height': "300px" }}
                        className="d-block w-100"
                        src={require("../../images/Corornavirus.jpg")} />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item >             
            </Carousel>
        </div>
    )
}


export default BootstrapCarousel  