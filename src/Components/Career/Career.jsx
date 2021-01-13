import "./Career.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Career = ()=>{

    return(
        <div className = "career-main-section">
          <section className="career-sec-1">

        <div className = "career-main-intro">
         <h2 className= "hello">Join us. Be you.</h2>
         <p>Watch the Film. <i class="far fa-play-circle"></i></p>
         
       </div>
         
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
              <div className = "inv-sec-1"  >
                <h6>ABOUT LEGENDESK</h6>
                 <p>See What drives us.</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2">
              <h6>TEAMS</h6>
                 <p>Find your calling.</p>   
                </div> 
                </Col>
                </Row>
                </div>
                 <div className ="invi-img-sec-2">
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-3">
                 <h6>MACHINE LEARNING AND AI</h6>
                 <p>Build amazing experiences</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4">
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
    export default Career 