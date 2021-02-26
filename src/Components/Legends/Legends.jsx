import "./Legend.css"
import {useEffect,useState} from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import OurLegend from "../../Assets/Images/our-legend.png"
import Owner_dummyImg from "../../Assets/Images/owner_dummy_img.png"
import Leader1Img from "../../Assets/Images/leader-1.png" 
import Leader2Img from "../../Assets/Images/leader-2.png" 
import Leader3Img from "../../Assets/Images/leader-3.png" 
import Leader4Img from "../../Assets/Images/leader-4.png" 
import Leader5Img from "../../Assets/Images/leader-5.png" 
import Leader6Img from "../../Assets/Images/leader-6.png" 
import Leader7Img from "../../Assets/Images/leader-7.png" 
import Leader8Img from "../../Assets/Images/leader-8.png" 
import LeaderDummy from "../../Assets/Images/leader-grey-dummy.png" 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {gsap} from "gsap"
import AOS from "aos"
import 'react-tabs/style/react-tabs.css';

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);





const Legends = ()=>{

    const leaders_photo = [{leadName:"Nasir Zia",leadDesign:"Head of Software Development", leadImg: Leader2Img},
     {leadName:"Syed Saadat Ali",leadDesign:"Head of UI/UX Development", leadImg: Leader1Img},
     {leadName:"Kamran Ghouri",leadDesign:"Business Unit Head", leadImg: LeaderDummy},
     {leadName:"Taha Rashid",leadDesign:"Business Unit Head", leadImg: LeaderDummy},
     {leadName:"Samia Rehman",leadDesign:"Head of HR", leadImg: Leader7Img},
     {leadName:"Muhammad Talha",leadDesign:"Head of Motion Graphics", leadImg: LeaderDummy},
     {leadName:"Sana Khan ",leadDesign:"Head of Content Management", leadImg: Leader4Img},
     {leadName:"Raheel Ahmed",leadDesign:"Head of Network & IT", leadImg: LeaderDummy},
     {leadName:"Muhammad Farrukh",leadDesign:"Head of Motion Graphics", leadImg: Leader5Img},
     {leadName:"Adil Amin ",leadDesign:"Head of Content Management", leadImg: Leader3Img},
     {leadName:"Sheikh Musharib",leadDesign:"Head of SEO", leadImg: LeaderDummy},
     {leadName:"Kashif Faizal",leadDesign:"Head of Network & IT", leadImg: Leader6Img},
     {leadName:"Hafsa Chughtai",leadDesign:"Head of SEO", leadImg: Leader8Img},
    
    ]
    useEffect(()=>{
      AOS.init({duration:800}); 
       window.scrollTo(0,0) 
     

  },[])

   useEffect(()=>{
      
     
        // gsap.from(".scroll-1",{duration: 5,x: 800,opacity:0,ease: "power4.out", scrollTrigger: {trigger: "our-legend-sec-2",markers: true,start: "20% 65%",end:"30% 20%"}}) 
        // gsap.from(".scroll-2",{duration: 5,x: -800,opacity:0,ease: "power4.out", scrollTrigger: {trigger: "our-legend-sec-2",markers: true,start: "20% 65%",end:"30% 20%"}})
        // gsap.from(".scroll-3",{duration: 5,y: -800,opacity:0,ease: "power4.out", scrollTrigger: {trigger: "our-legend-sec-2",markers: true,start: "20% 65%",end:"30% 20%"}})
        // gsap.from(".scroll-4",{duration: 5,y: 800,opacity:0,ease: "power4.out", scrollTrigger: {trigger: "our-legend-sec-2",markers: true,start: "20% 65%",end:"30% 20%"}})
        
     
         gsap.from(".scroll-1",{duration: 1,clipPath: "inset(0  0 0  100%)",
          scrollTrigger: {trigger: ".our-legend-sec-2",markers: false,start: "22% 65%",end:"30% 20%",toggleActions: "restart none restart none", toggleClass: {targets: ".our-legend-sec-2",className: "legend-1"}}}) 
          gsap.from(".scroll-2",{duration: 1,clipPath: "inset(0  0  0  100%)",
          scrollTrigger: {trigger: ".our-legend-sec-2",markers: false,start: "22% 65%",end:"30% 20%",toggleActions: "restart none restart none",toggleClass: {targets: ".our-legend-sec-2",className: "legend-1"}}}) 
          gsap.from(".scroll-3",{duration: 1,clipPath: "inset(0   0  0 100% )",
          scrollTrigger: {trigger: ".our-legend-sec-2",markers: false,start: "55% 65%",end:"80% 20%",toggleActions: "restart none restart none",toggleClass: {targets: ".our-legend-sec-2",className: "legend-1"}}})
          gsap.from(".scroll-4",{duration: 1,clipPath: "inset( 0  0 0  100%)",
          scrollTrigger: {trigger: ".our-legend-sec-2",markers: false,start: "55% 65%",end:"80% 20%",toggleActions: "restart none restart none",toggleClass: {targets: ".our-legend-sec-2",className: "legend-1"}}})
        
             
    },[])












    const main_Presidents = [{o_Name:"Schergeil Parvez",o_Designa: "Founder & Chief Executive Officer" ,o_img: Owner_dummyImg },
    {o_Name:"Ramiz Shahid",o_Designa: "President" ,o_img: Owner_dummyImg },
    {o_Name:"Jahanzeb Baber",o_Designa: "Chief Operating Officer" ,o_img: Owner_dummyImg },
    {o_Name:"Aamir Younus",o_Designa: "Lead Product Technologist" ,o_img: Owner_dummyImg },]
    return(
        <div className = "legend-main-section">
        <section className = "our-legend-sec-1">
          <Container>
            <Row>
            <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
              <h2 data-aos="zoom-in-up" data-aos-easing="linear"
     data-aos-duration="900">Who we are &  <br/>what motivates us</h2>
              <img src = {OurLegend} alt = "our-legend"/>
            </Col>  
            </Row> 
          </Container>
        </section>
        <section className = "our-legend-sec-2">
          <Container>
              <Row>
                  {main_Presidents.map((mvp,index)=>{
                      return(
                        <Col key ={index} xs = {12} sm={12} md={6} lg={6} > 
                         <div className = "mvp">   
                        <img src={mvp.o_img} alt="" className = {`scroll-${index + 1}`}/>
                        <h2>{mvp.o_Name}</h2>
                        <h4>{mvp.o_Designa}</h4>
                       
                        </div> 
                       </Col>
                      )
                  })}
                    
                {/* <Col xs = {12} sm={12} md={6} lg={6}>
                 <img src={Owner_dummyImg} alt=""/>
                 <h2>Some Dummy Text</h2>
                 <h4>Some Dummy Text</h4>

                </Col>   */}
              </Row> 
          </Container>

        </section>
        <section className = "our-legend-sec-3"> 
        <Tabs>
         <Container>
             <Row>
               <Col sm = {12} xs={12} md = {12} lg = {12} xl ={12}>
                   <div className="members">
                   <h2>Our People</h2>     
                
                    <TabList>
                    
              
                    <Tab> 
                     Team Members  
                    </Tab>
                 
                    <Tab>
                     Leadership 
                     </Tab>
                 

                    </TabList>
                   
                  </div>
               </Col>
               
             </Row>
             
             <TabPanel>
             <div class="members-photos">
            
             <Row>
              
                  <Col  xs={6} sm={6} md={3} lg={3} xl={3}>
                  <div className = "members-cards">
                    <img src = {Leader1Img} alt = ""/>
                    <h4>Syed Saadat Ali</h4>
                    <h6>Head of UI UX</h6>
   
   
                  </div>
                 </Col>
                 <Col  xs={6} sm={6} md={3} lg={3} xl={3}>
                  <div className = "members-cards">
                    <img src = {Leader1Img} alt = ""/>
                    <h4>Syed Saadat Ali</h4>
                    <h6>Head of UI UX</h6>
   
   
                  </div>
                 </Col>
                 <Col  xs={6} sm={6} md={3} lg={3} xl={3}>
                  <div className = "members-cards">
                    <img src = {Leader1Img} alt = ""/>
                    <h4>Syed Saadat Ali</h4>
                    <h6>Head of UI UX</h6>
   
   
                  </div>
                 </Col>
                 <Col  xs={6} sm={6} md={3} lg={3} xl={3}>
                  <div className = "members-cards">
                    <img src = {Leader1Img} alt = ""/>
                    <h4>Syed Saadat Ali</h4>
                    <h6>Head of UI UX</h6>
   
   
                  </div>
                 </Col>

              

             </Row>
             </div>
             </TabPanel>
             <TabPanel>
             <div class="members-photos">
            
             <Row>
               {leaders_photo.map((leaders,index)=>{
                 return(
                  <Col key = {index} xs={6} sm={6} md={3} lg={3} xl={3}>
                  <div className = "members-cards" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                    <img src = {leaders.leadImg} alt = ""/>
                    <h4>{leaders.leadName}</h4>
                    <h6>{leaders.leadDesign}</h6>
                    <div className="overlay-card">
                     <ul>
                       <li><a href="#"><i class="fab fa-linkedin-in"></i></a>
                       
                       </li>
                       <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                     </ul>
                    </div>
                     
   
   
                  </div>
                 </Col>

                 )
               })}

              

             </Row>
             </div>
             </TabPanel>

         </Container>
         </Tabs>
        </section>
        <section className = "invitation-section"  data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">
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
              <div className = "inv-sec-1"   data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1500" >
                <h6>ABOUT LEGENDESK</h6>
                 <p>See What drives us.</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2"  data-aos="fade-left" data-aos-easing="linear"
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
              <div className = "inv-sec-3" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1500" >
                 <h6>MACHINE LEARNING AND AI</h6>
                 <p>Build amazing experiences</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="1500" >
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
    export default Legends 