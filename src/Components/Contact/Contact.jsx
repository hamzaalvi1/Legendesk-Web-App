import {useEffect} from "react"
import "./Contact.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from "aos"

const Contact = ()=>{
  useEffect(()=>{
    AOS.init({duration:800}); 
     window.scrollTo(0,0) 
   

},[])
  
    return(
        <div className = "contact-main-section">

             <section className = "contact-sec-1" data-aos="fade-up"data-aos-easing="linear"
     data-aos-duration="1500" >
              <Container>
                  <Row>
                      <Col xs={12} md={12} lg={12} sm={12} xl={12} >
                          <h5>
                              Contact Us
                          </h5>
                      
                      </Col>
                  </Row>
                <Row>
                 <Col xs={12} sm= {12} md={4} lg={4} xl={4}>
                     <div>
                     <h4>
                         Let's talk! <br/>
                         about:
                     </h4>
                     </div>
                
                 
                 </Col>   
                 <Col xs={12} sm= {12} md={8} lg={8} xl={8}>
                     <div className="contact-sec-1b">
                         <p>Want to partner with us, join our team or just <br/> curious about our process? Drop us a line.</p>
                     </div>
                 
                 </Col>
                </Row>
              </Container>
             </section>
             <section className = "contact-sec-2">
              <Container>
               <Row>
                <Col  xs={12} sm= {12} md={4} lg={4} xl={4}>
                 <div className = "contact-2a" data-aos="fade-right"data-aos-easing="linear"
     data-aos-duration="1500" >
                     <ul>
                         <li>
                            <a>New Project</a> 
                         </li>
                         <li>
                            <a>Joining Our Team</a> 

                         </li>
                         <li>
                             <a>General Inquiries</a> 
                         </li>
                     </ul>

                 </div>               
                </Col>   
                 <Col  xs={12} sm= {12} md={8} lg={8} xl={8}>
                 <div className = "contact-2b" data-aos="fade-left"data-aos-easing="linear"
     data-aos-duration="1500" >
                  <form>
                   <div class="input-1">
                     <input type="text" required placeholder="*First Name" />    
                     <input type="text" required placeholder="*Last Name" />     
                  </div>
                  <div class="input-2">
                     <input type="text" required placeholder="*First Name" />    
                     <input type="text" required placeholder="*Last Name" />     
                  </div> 
                  <div class="input-3">
                     <textarea name="tell-us" cols="30" rows="10" placeholder= "Tell us about your project (including budget) "></textarea>   
                  </div> 
                   <input type="submit" value="Let's Get Started"/>
                  </form>

                 </div>               
                 
                 </Col> 

               </Row>
              </Container>
             </section>
            
            <section className = "invitation-section">
          <Container>
            <Row>
             <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12} > 
          <h2>An open invitation to open minds.</h2>
          <p>Come to Apple, where thousands of individual imaginations gather together
          <br/> to pave the way to innovation. Here, you’ll do more than join something — 
          <br/> you’ll add something.</p>
          </Col>
          
          </Row>
           <div className = "invi-img-sec-1">
          <Row>

          <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-1" >
                <h6>ABOUT LEGENDESK</h6>
                 <p>See What drives us.</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2" >
              <h6>TEAMS</h6>
                 <p>Find your calling.</p>   
                </div> 
                </Col>
                </Row>
                </div>
                 <div className ="invi-img-sec-2">
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-3" >
                 <h6>MACHINE LEARNING AND AI</h6>
                 <p>Build amazing experiences</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4" >
                <h6>LEGENDESK SUPPORT ROLES</h6>
                 <p>Bring people skills. Learn tech skills.</p> 

                </div>  </Col>
            
          </Row>
          </div>

          
            
         
          
         
            
          </Container>
        </section>
        </div>
    )
    
    }
    export default Contact 