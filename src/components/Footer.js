import React from "react";
import { Box, FooterContainer, Row, Column, Heading, FooterLink } from "./FooterStyles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <div style={{ textAlign: "center", marginTop: "10px", marginBottom: "0", paddingBottom: "20px" }}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/pi.network.png`}
            alt="Pi Network Logo"
            style={{
              width: "100px",
              height: "auto",
              marginRight: "10px",
            }}
          />
        </div>
        <div>
          <h1 style={{ color: "#8A2BE2" }}>
            The Future of Cryptocurrency: Pi Network
          </h1>
        </div>
      </div>

      <FooterContainer>
        <Row>
          <Column>
            <Heading>About Pi Network</Heading>
            <FooterLink to="/about">What is Pi Network</FooterLink>
            <FooterLink to="/team">Team</FooterLink>
            <FooterLink to="/community">Community</FooterLink>
          </Column>
          <Column>
            <Heading>Pi Network Services</Heading>
            <FooterLink to="/mining">Mining</FooterLink>
            <FooterLink to="/wallet">Wallet</FooterLink>
            <FooterLink to="/security">Security</FooterLink>
          </Column>

          <Column>
            <Heading>Explore Pi Network</Heading>
            <FooterLink to="/getting-started">Getting Started</FooterLink>
            <FooterLink to="/app">Pi Network App</FooterLink>
            <FooterLink to="/earning-pi">Earning Pi</FooterLink>
            <FooterLink to="/blog">Pi Network Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Follow Us</Heading>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FooterLink to="/facebook">
                <i className="fab fa-facebook-f" style={{ marginRight: "10px" }}></i>
                Facebook
              </FooterLink>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FooterLink to="/instagram">
                <i className="fab fa-instagram" style={{ marginRight: "10px" }}></i>
                Instagram
              </FooterLink>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FooterLink to="/twitter">
                <i className="fab fa-twitter" style={{ marginRight: "10px" }}></i>
                Twitter
              </FooterLink>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FooterLink to="/youtube">
                <i className="fab fa-youtube" style={{ marginRight: "10px" }}></i>
                YouTube
              </FooterLink>
            </div>
          </Column>
        </Row>
      </FooterContainer>
    </Box>
  );
}

export default Footer;
