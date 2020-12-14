import "./About.css"
import playButton from "../../Assets/Images/play-button.svg"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = ()=>{

return(
    <main className = "about-main-section">
        <section className = "about-banner">
          
            <h2>
               
                Helping You Ace<br/>
                Your Digital<br/>
                Presence<br/>
               
            </h2>
            <p>Watch the Flim  <img src = {playButton} alt="play-button"/></p>  
            <p className="brand-text">
            Sometimes this is the irony of <br/>
            promoting your businesses products  <br/>
            and services, because for a fact that <br/>
             you want to make your business <br/>
             recognizable and earn more sales. <br/>
            </p>
       
        </section>
      <section className = "team-section">
          <Container>
              <Row>
                <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
            <div className = "team-section-img">
                 <div className="team-section-card">
                     <p>
                     We moved into our new headquarters in <br/>
                      October 2019. Having a building to call our own <br/>
                       is wonderful. Especially the early check-in and <br/>
                       late check-out policy. Talk about 5 star <br/>
                       accommodations!
                     </p>
                 </div>
            </div>
          
          </Col>
          </Row>
          </Container> 
      </section>
    </main>
)

}
export default About 