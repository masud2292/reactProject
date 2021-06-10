import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://thumbs.dreamstime.com/b/confident-smiling-businessman-professional-coach-looking-camera-office-business-men-wear-glasses-stand-arms-crossed-happy-161910127.jpg"/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription" >first i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://media.istockphoto.com/photos/happy-businessman-coach-teacher-webinar-speaker-looking-at-camera-picture-id1164377499?k=6&m=1164377499&s=612x612&w=0&h=la-tjx5jnj-9MtshV4I0eW2n-WP8NFw_FjVEe6R0J_w="/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">first i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=6&m=1016761216&s=612x612&w=0&h=j-DyZTSqmnhoHKsJdGmiMPnungpHiq9UTrvx4UylMQI="/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">first i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>



                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;