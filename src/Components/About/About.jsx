import "./About.css"
import {useEffect,useState} from "react"
import AOS from "aos"
import playButton from "../../Assets/Images/play-button.svg"
import TeamImg1 from "../../Assets/Images/about-img-1.png"
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo1 from "../../Assets/Images/Neleman logo.png"
import logo2 from "../../Assets/Images/sc-cambuur-logo.png"
import logo3 from "../../Assets/Images/alpha-n.png"
import logo4 from "../../Assets/Images/D.E.png"
import logo5 from "../../Assets/Images/Heineken-logo.png"
import logo6 from "../../Assets/Images/mijndomein.png"
import logo7 from "../../Assets/Images/Ausnutria.png"
import logo8 from "../../Assets/Images/TVM-logo.png"
import logo9 from "../../Assets/Images/Idenza.png"
import aboutTalkImg1 from "../../Assets/Images/about-talk-img1.png"
import aboutTalkImg2 from "../../Assets/Images/about-talk-img2.png"
import aboutTalkImg3 from "../../Assets/Images/about-talk-img3.png"
import Slider from "react-slick";
import b1 from "../../Assets/Images/b.png"
import b2 from "../../Assets/Images/b-1.png"
import b3 from "../../Assets/Images/b-3.png"
import a01 from "../../Assets/Images/01.jpg"
import a02 from "../../Assets/Images/02.jpg"
import a03 from "../../Assets/Images/03.jpg"
import a04 from "../../Assets/Images/04.jpg"
import a05 from "../../Assets/Images/05.jpg"
import a06 from "../../Assets/Images/06.jpg"
import a07 from "../../Assets/Images/07.jpg"
import a08 from "../../Assets/Images/08.jpg"
import b4 from "../../Assets/Images/b-4.png"
import CombinedShaped from "../../Assets/Images/combined-shape.svg"
import AboutPf1 from "../../Assets/Images/about-portfolio-1.jpg"
import AboutPf2 from "../../Assets/Images/about-portfolio-2.jpg"
import AboutPf3 from "../../Assets/Images/about-portfolio-3.jpg"
import AboutPf4 from "../../Assets/Images/about-portfolio-4.jpg"
import AboutPf5 from "../../Assets/Images/about-portfolio-5.jpg"
import AboutPf6 from "../../Assets/Images/about-portfolio-6.jpg"
import AboutPf7 from "../../Assets/Images/about-portfolio-7.jpg"
import AboutPf8 from "../../Assets/Images/about-portfolio-8.jpg"
import AboutPf9 from "../../Assets/Images/about-portfolio-9.jpg"
import {gsap} from "gsap"






import OurLegend from "../../Assets/Images/our-legend.png"


const About = ()=>{
  useEffect(()=>{

     window.scrollTo(0,0) 
   

},[])
    useEffect(()=>{
       AOS.init({duration:800})  

       gsap.from(".img-1",{
        duration: 5,
        x: -800,
        opacity: 0,
        scale:2, 
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger : ".sec-3",
          start: "top center",
          end: "bottom 100%",
        }
       
      })
       gsap.from(".img-2",{
        duration: 2,
        y: -800,
        opacity: 0,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger : ".sec-3-about",
          start: "top center",
          end: "bottom 100%",
        }
       
      })
      gsap.from(".img-3",{
        duration: 2,
        x: 800,
        opacity: 0,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger : ".sec-3-about",
          start: "top center",
          end: "bottom 100%",
        }
       
      })
      gsap.from(".img-4",{
        duration: 2,
        x: -800,
        opacity: 0,
        ease: "Power3.easeOut",
        scrollTrigger: {
          trigger : ".sec-3-about",
          start: "top center",
          end: "bottom 100%",
        }
       
      })
    },[])
    const [_pageX,setPageX] = useState(0)
    const [_pageY,setPageY] = useState(0)

   const mouseMovement = (evt)=>{
     console.log(`pageX: ${evt.pageX}`)
     console.log(evt.pageY)
     setPageX(evt.pageX)
     setPageY(evt.pageY)
    // console.log(evt)



   }


    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    useEffect(() => {
   
        AOS.init({duration:800});
   
    }, [])

    

return(
    <main className = "about-main-section">
        <section className = "about-banner" onMouseMove= {mouseMovement} >
          <div className = "img_01"><img src={a01} alt=""/><p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
          <div className = "img_03"><img src={a03} alt=""/><p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
          <div className = "img_08"><img src={a08} alt=""/><p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
          <div className = "img_02"><img src={a02} alt=""/>
          <p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
          <div className = "img_04"><img src={a04} alt=""/></div>
          <div className = "img_07"><img src={a07} alt=""/><p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
          <div className = "img_05"><img src={a05} alt=""/><p>  Sometimes this is the irony of<br/>promoting your businesses products<br/>and services, because for a fact that<br/>you want to make your business<br/>recognizable and earn more sales.</p></div>
           <div>
            <h2>
            Leading the <br/> Tech Revolution <br/> in  Pakistan

          </h2>
            <p >Watch the Video  <img className ="__dummy" src = {playButton} alt="play-button"/></p>  
            <p className="brand-text">
            Sometimes this is the irony of <br/>
            promoting your businesses products  <br/>
            and services, because for a fact that <br/>
             you want to make your business <br/>
             recognizable and earn more sales. <br/>
            </p>
            </div>
           
           
         
    
        </section>
      <section className = "team-section" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <Container>
              <Row>
                <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
            <div className = "team-section-img" >
                 <div className="team-section-card">
                     <p>
                     The Legendesk Headquarters is located near the beach, in a great neighborhood that’s filled with amazing hangouts. We’re a diverse bunch of individuals who empower each other with their unique perspectives. Talk about keeping good company!
                     </p>
                 </div>
            </div>
          
          </Col>
          </Row>
          </Container> 
      </section>
      <section className = "image-section" >
            <Container>
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg= {6} xl = {6}>
                    <div className = "img-box"data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src={TeamImg1} alt="team-img" />
                        <div className="our-ceo">
                            <p>
                            Our CEO, Isaac Rudansky founded AdVenture Media in 2012 after earning his Masters
                            Degree in Industrial / Organizational Psychology from Hofstra University.
                            </p>
                        </div>
                        </div>
                    </Col>
                    <Col xs = {6} sm = {6} md = {6} lg= {6} xl = {6} >
                    <div className = "img-box" data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                        <img src={TeamImg1} alt="team-img"/>
                        <div className = "our-ceo">
                        <p >
                            Our CEO, Isaac Rudansky founded AdVenture Media in 2012 after earning his Masters
                            Degree in Industrial / Organizational Psychology from Hofstra University.
                            </p>
                            </div>
                            </div>
                    </Col>
                </Row>
            </Container>
      </section>
      <section >
          <Container className = "about-detail" data-aos="fade-up"
     data-aos-duration="3000"> 
              <div>
              <Row>
                  <Col xs = {12} sm = {12} md = {12} lg = {12} xl ={12}>
                      <div className = "about-detail-1">
                      <h2>
                      Inside the <br/> Legendesk Headquarters
                      </h2>
                      <p>
                      Legendesk started as the brainchild of founder Schergeil Parvez together with his co-partner Rameez Shahid. And since 2017, we’ve been enabling national and international clients in nearly every industry craft unique user-centric experiences on the web and mobile. Unlike most tech agencies, our humble beginnings were fuelled by the passion to make Pakistan look good (like super good) as a tech giant. 
                     </p> 
                     </div>
                  </Col>
              </Row>
              <Row>
                  <Col xs = {3} sm = {3} md = {3} lg = {3} xl= {3}>
                  </Col>
                  <Col xs = {9} sm = {9} md = {9} lg = {9} xl= {9}>
                   <div className = "about-detail-2">
                       <p>   
                       From taking our first steps as a startup to growing into a full-fledged tech agency, we’re making waves in the international market
                   </p>
                   </div>
                  </Col>
              </Row>
              <Row>
                  <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} >
                  <div className = "about-detail-3">
                         <div>
                           <Link to = "/career" >Become a Legend</Link>
                           <Link to = "/legends" >Our Legends</Link>
                           </div>   
                    </div>
                  </Col>
                  <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} >

                      <div className = "about-detail-4">
                          
                         <p>
                         We started off as underdogs, but as our products and teams grew, the world came to recognize our passion and zeal. Today, we are known as big believers in the potential of customer-centric technology and best known for our future-proof strategies. We build brands, innovate digital products, and build tech for small to mid-sized companies and global businesses. By focusing on the customer journey, we fundamentally improve businesses, reinforce credibility and humanize the user experiences to create solutions that engage and empower customers.
                         </p>
                      </div>
                  </Col>
              </Row>
              </div>
          </Container>
      </section>
      <section className = "about-banner-2">
          <Container>
                <Slider {...settings}>
                <div className = "about-banner2-img">

                   </div>
                   <div className = "about-banner2-img">

                   </div>
                   <div className = "about-banner2-img">

                   </div>
                   <div className = "about-banner2-img">

                   </div>
                   
                   </Slider>
          </Container>
      </section>
      <section className = "our-brands">
      <Container>
          <Row>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl ={6}>
                  <div className = "our-brands-detail" data-aos="fade-right"
                     data-aos-offset="300"
                      data-aos-easing="ease-in-sine">
                       <h6>We love working with people who get it.</h6>
                       <p>With a combined experience of over 20 years in the IT and tech industry, our team has empowered thousands of global businesses and launched hundreds of websites and mobile apps, that resulted purely from rock solid processes, leaving little to no room for unwelcomed surprises. We work with the best teams who have a clear understanding of their subject matter, create future-proof strategies and empower our clients to attract positive attention from the international market.</p>
                  </div>
              </Col>
              
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl ={6}>
                  <div className = "our-brands-logos" >
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className = "logos">
                            <img src={logo1} alt="logo1"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo2} alt="logo2"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo3} alt="logo3"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className = "logos">
                            <img src={logo4} alt="logo4"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo5} alt="logo5"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo6} alt="logo6"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                            <div className = "logos">
                            <img src={logo7} alt="logo7"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo8} alt="logo8"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4} data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                        <div className = "logos">
                            <img src={logo9} alt="logo9"/>
                            </div>
                        </Col>
                    </Row>
                  </div>
              </Col>
          </Row>
      </Container>

      </section>
      <section className = "sec-3-about">
          <Container xs = {12} md = {12}>
          <Row>
            <Col xs = {12} md={6} sm={6}>
              <img src={b1} alt = "pic-1"  className = "img-1"  />
            </Col>
            <Col xs = {12} md={4} sm={4}>
              <img src={b2} alt = "pic-2" className = "img-2" />
            </Col>
            <Col xs = {12} md={2} sm={2}>
              <img src={b3} alt = "pic-3"  className = "img-3" />
              <img src={b4}  alt = "pic-4" className = "img-4" />

            </Col>
            <div className = "img-card">
              <Container>
                <Row > 
                <Col xs = {12} sm = {9} md = {9}>              
               <h6>
               Work Hard. Play Harder…
              </h6>
               <p>
               We strive to create a culture that empowers a creatively independent workforce. We are a bunch of uber hyper, super enthusiastic, and hardworking individuals who are serious about having fun, love to hang out, and celebrate diversity. We know what makes us different also makes us stronger.
               </p>
               </Col>
               <Col xs = {12} md = {3}>
                 <img src={CombinedShaped} alt="shape"/>
               </Col>
              </Row>
              
              </Container>
            </div>
          </Row>
          
          </Container>

        </section>
        <section className = "team-section">
          <Container>
              <Row>
                <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
            <div className = "team-section-img--1">
                 <div className="team-section-card">
                     <p>
                     Women at Legendesk not only have a voice but drive major stakes in leadership roles. Legendesk has a 40% female workforce with a relentless drive to not settle for anything less than the extraordinary. We are huge believers in gender diversity, bent on setting an example as an equal opportunity workplace in Pakistan that recognizes women as individuals and enables them to unlock their true potential.
                     </p>
                 </div>
            </div>
          
          </Col>
          </Row>
          </Container> 
      </section>
        <section className ="about-portfolio">
        <Container>
        <Row>
          <Col xs = {12} sm ={12} md ={4} lg={4} xl={4}>
              <div className = "portfolio-1" data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={AboutPf3} alt=""/>
                <div className = "our-ceo">
                        <p >
                        Nechama once had to tie a rubber band around her mouse to get to the bottom of an Excel model she was working on for a client. Yea, she's just that good.
                            </p>
                            </div>
              </div>         
          </Col> 
          <Col xs = {12} sm ={12} md ={4} lg={4} xl={4}>
              <div className = "portfolio-2" data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <Row>
                    <Col xs = {12} sm ={12} md ={6} lg={6} xl={6}>
                       <img src={AboutPf1} alt=""/>
                    </Col>  

                    <Col xs = {12} sm ={12} md ={6} lg={6} xl={6}>
                       <img src={AboutPf2} alt=""/>
                    </Col>  
                </Row> 
                
                
                

              </div>    
              <div className = "portfolio-3" data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={AboutPf4} alt=""/>
                

              </div>      
          </Col> 
          <Col xs = {12} sm ={12} md ={4} lg={4} xl={4}>
              <div className = "portfolio-4" data-aos="flip-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={AboutPf5} alt=""/>
                <div className = "our-ceo">
                 <p>
                 We don't miss birthday party's. Well sometimes we do, but not Shira's.
                </p>
               </div>
              </div>         
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className = "portfolio-1" data-aos="fade-up"
     data-aos-duration="3000" >
                <img src={AboutPf6} alt=""/>
                <div className = "our-ceo">
                  <p >
                  Patrick, Ben, Erica, Isaac and Esti celebrating a successful campaign (and brainstorming ideas to improve it)!
                 </p>
                 </div>
              </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className = "portfolio-4" data-aos="fade-up"
     data-aos-duration="3000" >
            <img src={AboutPf7} alt=""/>
            <div className = "our-ceo">
             <p>
             Esti and Alex, account managers at work, neurotically focused on profit.
            </p>
            </div>
            </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className = "portfolio-1" data-aos="fade-up"
     data-aos-duration="3000">
                <img src={AboutPf8} alt=""/>
                <div className = "our-ceo">
                  <p >
                  Esti and Alex, account managers at work, neurotically focused on profit.
                 </p>
                 </div>
              </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className = "portfolio-4" data-aos="fade-up"
     data-aos-duration="3000" >
            <img src={AboutPf9} alt=""/>
            <div className = "our-ceo">
             <p>
            our legenesk team
            </p>
            </div>
            </div> 
          
          </Col> 
        </Row> 

        </Container>
        </section>

      <section className = "our-legend">
          <Container>
            <Row>
            <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
              <h6>OUR LEGENDS</h6>
              <h2>The Winning Team</h2>
              <img src = {OurLegend} alt = "our-legend"/>
            </Col>  
            </Row> 
          </Container>
        </section>
        <section className = "about-talk">
            <Container>
                <div>
              <Row className = "about-talk-container">
               <Col xs = {12} sm ={12} md = {12} lg = {12} xl ={12}>
               <div className = "about-talk-main">
                   <h2>
                   Ready to step up your game?
                   </h2>
                   <a href="#!">Let's Talk</a>

               </div>
               </Col>
               <div className = "about-talk-images">
                  <Row>
                   <Col xs = {4} sm ={4} md={4} lg= {4} xl ={4}>
                     <img src={aboutTalkImg1} alt="about-img-1" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="700"/>
                   </Col>   
                   <Col xs = {4} sm ={4} md={4} lg= {4} xl ={4}>
                     <img src={aboutTalkImg2} alt="about-img-2" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="700"/>
                   </Col> 
                   <Col xs = {4} sm ={4} md={4} lg= {4} xl ={4}>
                     <img src={aboutTalkImg3} alt="about-img-3" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="700"/>
                   </Col> 
                 </Row> 
                  
               </div>
              </Row>
              </div>
            </Container>

        </section>
    </main>
)

}
export default About 