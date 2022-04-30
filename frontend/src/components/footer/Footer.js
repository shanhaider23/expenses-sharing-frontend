import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Linkedin from "../../images/linkedin.png";
import Github from "../../images/github.png";
import "./footer.scss";

function Footer() {
  return (
    <Container>
      <Row className="d-flex justify-content-between  align-items-center">
        <Col>
          <a
            href="https://haider-portfolio.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img src={Linkedin} className="img-linkedin" alt=""></img>
          </a>
          <a
            href="https://haider-portfolio.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img src={Github} className="img-github" alt=""></img>
          </a>
        </Col>
        <Col className="built">
          Built by:
          <a
            href="https://haider-portfolio.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shan-e-Haider Bukhari
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
