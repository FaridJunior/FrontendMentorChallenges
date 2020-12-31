import React from "react";
import styled from "styled-components";
function Footer() {
  const Footer = styled.footer`
    background: var(--main-black);
    text-align: center;
    h4 {
      color: var(--white);
    }
    li {
      color: var(--light-gray);
    }
  `;
  const Container = styled.div`
    display: grid;
    justify-content: center;
  `;
  return (
    <Footer>
      <Container className="container">
        <div className="footer-section"></div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>{" "}
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>{" "}
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section"></div>
      </Container>
    </Footer>
  );
}

export default Footer;
