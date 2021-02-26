import "./Career.css"
import {useEffect} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordian from "../Utils/Accordian"
import Dumm_Team from "../../Assets/Images/dummy_member.png"
import AOS from "aos"


const Career = ()=>{
  useEffect(()=>{
    AOS.init({duration:800}); 
     window.scrollTo(0,0) 
   

},[])
  

    const acoords_Detail = [{title:"Account Manager / Supervisor",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Delivery Manager",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Social Media Supervisor",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Social Media Specialist",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Paid Social Strategist",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Paid Search Specialist",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Programmatic Media Specialist",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Email Marketing & CRM Specialist",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Full Stack Developer",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Front-End Developer",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"Back-End .NET Developer",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},
     {title:"UX Designer & Information Architect (UX/IA)",
     descp: "We’re looking for a Social Media Supervisor to lead and execute the agency’s social media strategies and campaigns for our clients."
     , jobDetail: "View Job Posting"},]

     const tightTeamNeat = [1,2,3,4,5,6,7,8,9]
   
    return(
        <div className = "career-main-section">
          <section className="career-sec-1">

        <div className = "career-main-intro">
         <h2 className= "hello">Join us. Be you.</h2>
         <p>Watch the Film. <i class="far fa-play-circle"></i></p>
         
       </div> 
         
      </section>

       <section className = "career-accordian-sec">
         <Container>
           <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
             <div className="career-accord-sec-1 sticky-top"> 
              
            <h6>Current openings</h6>
            <h3>
            We're hiring. If you <br/>see something you <br/> like, let us know.
            </h3>
            </div>
          
           </Col>
           <Col xs={12} sm={12} md={6} lg={6} xl={6}>
             <div data-aos="fade-left"
                  data-aos-offset="400"
                  data-aos-easing="ease-in-sine" className = "career-accord-sec-2">
               { 
                 acoords_Detail.map((accordD)=>{
                   return(
                     <Accordian  key = {accordD.title} title={accordD.title}>
                        <p>{accordD.descp}</p>
                         <a>{accordD.jobDetail} <i class="fas fa-arrow-right"></i></a>
                     </Accordian>
                   )
                 })
               }

             </div>            
           </Col>

           </Row>
         </Container>
       </section>
       <section className = "career-benefits-perks">
         <div>
            <Container>
             <Row>
               <Col xs = {12} md={12} sm={12} lg={12} xl = {12}>
               <div  className = "career-benefits-1a" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                   <h5>Perks + Benefits</h5>
                  <div>
                    <h2>Reason to Work Here.</h2>
                    <a >Learn About Our Culture <i class="fas fa-arrow-right"></i></a>
                  </div>
               </div>
                <div className="career-benfits-2a">
                 <Container>
                   <Row> 
                    {tightTeamNeat.map((team)=>{
                      return(
                    <Col key={team} xs={12} sm = {12} md = {4} xl={4} lg={4} >
                     <div className = "card_mem" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                      <img src ={Dumm_Team} alt= ""/>
                        <h3>Tight Knit Team</h3>
                        <p>We're a close group of talented people who enjoy working (and not working) together.</p>
                      
                      
                     </div>
                    </Col>
                      )
                    })}
                   </Row>                  
                   </Container>
                </div>     
               </Col>       
            </Row>  
            </Container> 
         </div>           
       </section>
      <section className = "invitation-section" data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
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
              <div className = "inv-sec-1" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" > 
                <h6>ABOUT LEGENDESK</h6>
                 <p>See What drives us.</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2"data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" >
              <h6>TEAMS</h6>
                 <p>Find your calling.</p>   
                </div> 
                </Col>
                </Row>
                </div>
                 <div className ="invi-img-sec-2">
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-3"data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
                 <h6>MACHINE LEARNING AND AI</h6>
                 <p>Build amazing experiences</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
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