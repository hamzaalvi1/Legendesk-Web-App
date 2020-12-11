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
                    <img src = {FooterLogo} alt = "logo-footer"/>
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
                      Je vindt ons trouwens aan de
                       Wiardaplantage 1 in Leeuwarden, maar ook
                      in Amsterdam aan de Johan van
                       Hasseltkade 304 en in Groningen aan de  Lübeckweg 2. Bellen mag altijd op 
                     +31(0)58 204 3400, of stuur een mailtje
                      naar info@Legendesk.com.
                      </p>
                  </Col>
              </Row>
              </div>
            </Container>
        </div>
    )
}
export default Footer