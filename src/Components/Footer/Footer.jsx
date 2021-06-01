import "./Footer.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FooterLogo from "../../Assets/Images/Footer-logo.png"
import {Link} from "react-router-dom"
const Footer = ()=>{
    return(
        <div className = "footer"> 
             <Container> 
               <div className = "footer-Content">    
              <Row>
                  <Col xs = {4} sm = {4} md ={4} lg = {4} xl = {4}>
                    <Link to = "/"> 
                    <img src = {FooterLogo} alt = "logo-footer"/>
                    </Link>
                  </Col>
                  <Col xs = {2} sm = {2} md ={2} lg = {2} xl = {2}>
                    <ul>
                      <li><Link to="/">Hello.</Link></li>
                      <li><Link to = "/Work">Our Work</Link></li>
                      <li><Link to ="/Legends"> Who We Are </Link></li>
                      <li><Link to = "/Career"> Careers </Link></li>
                      <li> <Link to = "/Contact">Contact Us</Link></li>

                    </ul>
                  </Col >
                  <Col xs = {3} sm = {3} md ={3} lg = {3} xl = {3}>
                      <ul>
                          <li>Unique Branding Services</li>
                          <li>Web Design & Development</li>
                          <li>App Development</li>
                          <li>Video Animation</li>
                          <li>Social Media Management</li>
                          <li>Content Management</li>
                          <li>Search Engine Optimization</li>
                          <li>Digital Marketing</li>
                   </ul>
                  </Col>
                  <Col xs = {3} sm = {3} md = {3} lg = {3} xl = {3}>
                      <p>
                      We elevate brands by creating human-centered experiences and building future-proof tech to empower businesses across the globe. Have a project or partnership in mind? Let’s chat over coffee, tea, or something stronger.
                      </p>
                  </Col>
              </Row>
              </div>
            </Container>
        </div>
    )
}
export default Footer