import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon" style={{ marginTop: "20px" }}>
                            <a href="https://www.linkedin.com/in/harneet-singh-980abb221/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/Harneet6147" target="_blank"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/harneet6147/?hl=en" target="_blank"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}


