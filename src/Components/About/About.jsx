import "./About.css"
import {useEffect} from "react"
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







import OurLegend from "../../Assets/Images/our-legend.png"


const About = ()=>{
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
        <section className = "about-banner">
        <Container>
            <Row>
             <Col>   
          
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
            </Col>
            </Row> 
            </Container>
    
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
      <section className = "image-section">
            <Container>
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg= {6} xl = {6}>
                    <div className = "img-box">
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
                    <div className = "img-box">
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
          <Container className = "about-detail"> 
              <div>
              <Row>
                  <Col xs = {12} sm = {12} md = {12} lg = {12} xl ={12}>
                      <div className = "about-detail-1">
                      <h2>
                      At the Forefront <br/>
                      of Legendesk.
                      </h2>
                      <p>
                       Legendesk Private Limited is an IT Service providing company that is
                       aimed at developing the local marketing to match the international
                       standards. Everything we do depicts this and only this. The company
                       was founded by Mr. Schergeil Parvez, CEO of Legendesk Pvt Limited, as a digital media agency. 
                       It was his vision that has led the company
                       to steer ahead achieving the success it has garnered. 
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
                  From being a small scale agency in 2017, 
                  Legendesk has grown into a full-fledged IT
                   services company in present day.
                   </p>
                   </div>
                  </Col>
              </Row>
              <Row>
                  <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} >
                  <div className = "about-detail-3">
                         <div>
                           <Link to = "/career" >Carrers</Link>
                           <Link to = "/legends" >Our Legends</Link>
                           </div>   
                    </div>
                  </Col>
                  <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6} >

                      <div className = "about-detail-4">
                          
                         <p>
                         Mr. Schergeil stays staunchly committed to the growth and 
                         development of the company, investing in the advancement of human 
                         resources through training and development. Legendesk is committed 
                         to provide the best work environment to its staff as well as superior 
                         service to its clients.
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
                  <div className = "our-brands-detail">
                       <h6>Working alongside the leaders in digital.</h6>
                       <p>Through strategic partnerships with the most 
                           influential platforms, our accredited team stays
                            at the forefront of marketing technologies. 
                            Equipped with the latest tools, techniques and 
                            beta programs, we continue to offer our 
                            partners integrated solutions that turn market
                             potential into brand performance.</p>
                  </div>
              </Col>
              
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl ={6}>
                  <div className = "our-brands-logos">
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                            <div className = "logos">
                            <img src={logo1} alt="logo1"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                        <div className = "logos">
                            <img src={logo2} alt="logo2"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                        <div className = "logos">
                            <img src={logo3} alt="logo3"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                            <div className = "logos">
                            <img src={logo4} alt="logo4"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                        <div className = "logos">
                            <img src={logo5} alt="logo5"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                        <div className = "logos">
                            <img src={logo6} alt="logo6"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                            <div className = "logos">
                            <img src={logo7} alt="logo7"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
                        <div className = "logos">
                            <img src={logo8} alt="logo8"/>
                            </div>
                        </Col>
                        <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
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
              <img src={b1} alt = "pic-1"  className = "img-1" />
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
               On Friday We Work ...
              </h6>
               <p>
               And play darts, and hang out on couches and bean bags.
               And drink beer. And attend Patrick's client rundown 
                meeting. And talk about the week's most challenging projects 
                 and exciting breakthroughs.
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
                     After climbing the corporate ladder at <br/>
                      Omnicom, Erica Newman decided to put her<br/> 
                      digital advertising expertise to more practical  <br/>
                      use in a smaller agency setting. We're very glad <br/>
                      she made that decision ... and so are our clients.
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
              <div className = "portfolio-1">
                <img src={AboutPf3} alt=""/>
                <div className = "our-ceo">
                        <p >
                        Nechama once had to tie a rubber band around her mouse to get to the bottom of an Excel model she was working on for a client. Yea, she's just that good.
                            </p>
                            </div>
              </div>         
          </Col> 
          <Col xs = {12} sm ={12} md ={4} lg={4} xl={4}>
              <div className = "portfolio-2">
                <Row>
                    <Col xs = {12} sm ={12} md ={6} lg={6} xl={6}>
                       <img src={AboutPf1} alt=""/>
                    </Col>  

                    <Col xs = {12} sm ={12} md ={6} lg={6} xl={6}>
                       <img src={AboutPf2} alt=""/>
                    </Col>  
                </Row> 
                
                
                

              </div>    
              <div className = "portfolio-3">
                <img src={AboutPf4} alt=""/>
                

              </div>      
          </Col> 
          <Col xs = {12} sm ={12} md ={4} lg={4} xl={4}>
              <div className = "portfolio-4">
                <img src={AboutPf5} alt=""/>
                <div className = "our-ceo">
                 <p>
                 We don't miss birthday party's. Well sometimes we do, but not Shira's.
                </p>
               </div>
              </div>         
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
          <div className = "portfolio-1">
                <img src={AboutPf6} alt=""/>
                <div className = "our-ceo">
                  <p >
                  Patrick, Ben, Erica, Isaac and Esti celebrating a successful campaign (and brainstorming ideas to improve it)!
                 </p>
                 </div>
              </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className = "portfolio-4">
            <img src={AboutPf7} alt=""/>
            <div className = "our-ceo">
             <p>
             Esti and Alex, account managers at work, neurotically focused on profit.
            </p>
            </div>
            </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className = "portfolio-1">
                <img src={AboutPf8} alt=""/>
                <div className = "our-ceo">
                  <p >
                  Esti and Alex, account managers at work, neurotically focused on profit.
                 </p>
                 </div>
              </div> 
          
          </Col> 
          <Col xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className = "portfolio-4">
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
              <h2>Our People, The True Legends</h2>
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
                   In need of a results-driven <br/>
                    marketing partner?
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