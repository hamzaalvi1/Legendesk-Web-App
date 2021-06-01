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

     const tightTeamNeat = [{tightTitle: "Rest & Relaxation",tightPara: "We offer plenty of paid time off for full-time employees so you can relax, enjoy and rejuvenate."},
     {tightTitle: "Transportation",tightPara: "Commute can be a hassle which is why we provide safe transportation options for our staff."},
     {tightTitle: "Career Path",tightPara: "We ensure the creation of opportunities for growth, learning & collaboration across departments."},
     {tightTitle: "Tight-Knit Team",tightPara: "We’re a close-knit group of talented and passionate individuals who enjoy each other’s company."},
     {tightTitle: "Health & Wellness",tightPara: "Our full-time employees are offered medical insurance for themselves as well as their families."},
     {tightTitle: "Learning & Mentorship",tightPara: "New at your job? Don’t worry! We provide on-job training and support to help you grow."},
     {tightTitle: "Planning for Future",tightPara: "Welcoming a new family member? We provide maternity/paternity leaves for all new parents."},
     {tightTitle: "Inclusive & Diverse",tightPara: "We are an all-inclusive and diverse team of people who stand against bullying & harassment."},
     {tightTitle: "Female Workforce",tightPara: "We have an empowered female workforce working at various positions and levels at the company."},
    ]
   
    return(
        <div className = "career-main-section">
          <section className="career-sec-1">

        <div className = "career-main-intro">
         <h2 className= "hello">Become a Legend.</h2>
         <p>We make things happen. Join the team. <i class="far fa-play-circle"></i></p>
         
       </div> 
         
      </section>

       <section className = "career-accordian-sec">
         <Container>
           <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
             <div className="career-accord-sec-1 sticky-top"> 
              
            <h6>Current openings</h6>
            <h3>
            Have what it takes? We’re <br/> hiring passionate individuals.
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
                   <h5>Perks & Benefits</h5>
                  <div>
                    <h2>Why Work with Us</h2>
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
                        <h3>{team.tightTitle}</h3>
                        <p>{team.tightPara}</p>
                      
                      
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
          <h2>Want to be the Next Legend?</h2>
          <p>We’re an ever-expanding diverse team of individuals who are driven by passion and connected by hardwork. Ready to fuel your fire? Join our Legendary team</p>
          </Col>
          
          </Row>
           <div className = "invi-img-sec-1">
          <Row>

          <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-1" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" > 
                <h6>Legendesk Blog</h6>
                 <p>Be in the know</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2"data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" >
              <h6>Human Resource</h6>
                 <p>We’re the people’s people</p>   
                </div> 
                </Col>
                </Row>
                </div>
                 <div className ="invi-img-sec-2">
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-3"data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
                 <h6>Stuff We Build</h6>
                 <p>Experience is everything</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500">
                <h6>Training & Development</h6>
                 <p>Learn, Experience, Grow</p> 

                </div>  </Col>
            
          </Row>
          </div>

          
            
         
          
         
            
          </Container>
        </section>
      
        </div>
    )
    
    }
    export default Career 