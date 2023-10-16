import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Dashboard.jpg";
import projImg2 from "../assets/img/vintageVault.jpg";
import projImg3 from "../assets/img/ocean.jpg";
import projImg4 from "../assets/img/BoStaff Spin.jpg";
import projImg5 from "../assets/img/rust.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Vintage Vault",
            description: "Decentralized App",
            imgUrl: projImg2,
            demo: "https://www.linkedin.com/posts/harneet-singh-980abb221_vintage-vault-where-nfts-bring-vintage-activity-7107203678079455232-5ROg?utm_source=share&utm_medium=member_desktop",
            code: "https://github.com/Harneet6147/Vintage-Vault"
        },
        {
            title: "LinkedIn 3.0",
            description: "Decentralized App",
            imgUrl: projImg1,
            demo: "https://www.linkedin.com/posts/harneet-singh-980abb221_linkedin-30-the-end-of-passwords-the-activity-7076431589538185217-r8JH?utm_source=share&utm_medium=member_desktop",
            code: "https://github.com/Harneet6147/LinkedIn-3.0"
        },
        {
            title: "OceanicCoin Explorer",
            description: "Web3 HTML5 Game",
            imgUrl: projImg3,
            demo: "https://www.linkedin.com/posts/harneet-singh-980abb221_introducing-oceaniccoin-explorer-immerse-activity-7112351146710593536-RalQ?utm_source=share&utm_medium=member_desktop",
            code: "https://github.com/Harneet6147/OceanicCoin-Explorer"
        },
        {
            title: "Spin the BoStaff",
            description: "Decentralized App",
            imgUrl: projImg4,
            demo: "https://www.linkedin.com/feed/update/urn:li:activity:7072139883141566464/",
            code: "https://github.com/Harneet6147/Spin-the-BoStaff"
        },
        {
            title: "Rust Vault",
            description: "Vault having Rust Projects",
            imgUrl: projImg5,
            demo: "https://github.com/Harneet6147/Rust-Projects",
            code: "https://github.com/Harneet6147/Rust-Projects"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>I consistently elevate my abilities by bringing my creative ideas to life through coding. Here's my recent work!</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p></p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p></p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}


