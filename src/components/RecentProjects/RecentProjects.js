import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/20/full/1584724669-8489.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="Link-Style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={12} md={6} lg={4}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/20/full/1584724669-8489.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="Link-Style" to="/ProjectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>

                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-03/20/full/1584724669-8489.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="Link-Style" to="/projectDetails">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default RecentProjects;