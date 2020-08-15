import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardDeck,
  CardSubtitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

// core components

function Cards() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="section section-team text-center"
      >
        <Container>
          <h4
            style={{ paddingBottom: "50px", color: "#233b80" }}
            className="category text-center"
          >
            Product
          </h4>
          <Row>
            <Col md="4">
              <div className="team-player">
                <CardImg
                  top
                  width="100%"
                  src={require("assets/img/default.jpg")}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link style={{ color: "#029bc6" }}>
                    <CardTitle className="title" tag="h4">Hubble Recods</CardTitle>
                  </Link>

                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                </CardBody>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <CardImg
                  top
                  width="100%"
                  src={require("assets/img/default.jpg")}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link style={{ color: "#029bc6" }}>
                    <CardTitle className="title" tag="h4">Auto Discovery</CardTitle>
                  </Link>
                  <CardText>
                    This is a wider card with supporting text below as a natura
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                </CardBody>
              </div>
            </Col>
            <Col md="4">
              <div className="team-player">
                <CardImg
                  top
                  width="100%"
                  src={require("assets/img/default.jpg")}
                  alt="Card image cap"
                />
                <CardBody>
                  <Link style={{ color: "#029bc6" }}>
                    <CardTitle className="title" tag="h4">
                      Hubble Analytics
                    </CardTitle>
                  </Link>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                </CardBody>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cards;
