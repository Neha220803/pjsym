import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutbg from '../images/aboutimg.png';
import about1 from '../images/about1.png';
import vismispic from '../images/vismis.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../../index.css';
import { Footer } from '../resuable/footer';

export const AboutUsPage = () => {
    return (
        <div>
            <img alt="mission img" src={aboutbg} className="img-fluid w-100" />
            <section>
                <Container>
                    <Row>
                        <div className='d-flex my-2 justify-content-start'><h1>About Us</h1></div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={5}>
                            <img src={about1} alt="About1" className="img-fluid" style={{ maxHeight: '550px' }} />
                        </Col>
                        <Col md={7}>
                            <p>“We cannot confine ourselves just to Catholics. Rather we have to reach out to the youth of all religions and no religion. This is where the true wealth of human kind is. That is where the destiny of our world is being shaped. Therefore, that is where the Lord wishes that WE Jesuits be present actively and effectively as men on the frontiers of service to His Kingdom”
                                In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their potentialities while accompanying them in the process of understanding and responding to the existing realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based on the Gospel values in order to build a just and humane and ecologically sensitive society.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div style={{ backgroundColor: "#124076", color: "white" }}>
                <Container>
                    <Row>
                        <img alt="mission img" src={vismispic} className="justify-content-center my-5" style={{ maxWidth: '1000px' }} />
                    </Row>
                </Container>
                <Container>
                    <Row className='lead pb-4'>
                        Rooted and grounded in the love of Jesus Christ, the charism of the Society of Jesus, and in the lives of our people, we Patna Jesuits continue the mission of Jesus through the service of faith and promotion of justice. This involves building human communities based on the Gospel values of freedom, fellowship and justice. We do this by making a preferential option for the poor, deep insertion into the cultures of our people and through dialogue with other members of other faiths and with all those working for an ecologically sensitive and just society
                        Vision and Mission of the Patna Jesuit Youth ministry 22nd April 2012 promulgated In order to continue the mission of Jesus Christ among the youth, we the Patna Jesuits rooted and grounded in His Love, strive to empower the youth, especially the unorganized youth and lend support to youth movements by harnessing their potentialities while accompanying them in the process of understanding and responding to the existing realities of our land in a constructive way. This involves igniting the fire of dynamism, creativity and search for meaningfulness in life based on the Gospel values in order to build a just and humane and ecologically sensitive society
                    </Row>
                </Container>
            </div>


            <Container>
                <div className='mt-4 d-flex justify-content-center'><h1>History</h1></div>
                <div className='my-4'>

                    <VerticalTimeline lineColor={"black"}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            date="2011 - present"
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Creative Director
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project
                                Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2010 - 2011"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Art Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                San Francisco, CA
                            </h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, SEO, Online
                                Marketing
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2008 - 2010"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Los Angeles, CA
                            </h4>
                            <p>User Experience, Visual Design</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006 - 2008"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Web Designer</h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                San Francisco, CA
                            </h4>
                            <p>User Experience, Visual Design</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="April 2013"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Content Marketing for Web, Mobile and Social Media
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Online Course
                            </h4>
                            <p>Strategy, Social Media</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="November 2012"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Agile Development Scrum Master
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Certification
                            </h4>
                            <p>Creative Direction, User Experience, Visual Design</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2002 - 2006"
                            contentStyle={{ borderTop: "3px solid  rgb(33, 150, 243)" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Bachelor of Science in Interactive Digital Media Visual Imaging
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                Bachelor Degree
                            </h4>
                            <p>Creative Direction, Visual Design</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                        //    icon={<StarIcon />}
                        />
                    </VerticalTimeline>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
