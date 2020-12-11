import "./Home.css"
import {useEffect,useRef} from "react"
import { gsap, TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image1 from "../../Assets/Images/image-1.jpg"
import Image2 from "../../Assets/Images/image-2.jpg"
import Image3 from "../../Assets/Images/image-3.jpg"
import Image4 from "../../Assets/Images/image-4.jpg"
import CombinedShaped from "../../Assets/Images/combined-shape.svg"
import Mobilepng from "../../Assets/Images/mobile.png"
import Slider from "react-slick";
import AOS from "aos"
import CardImage from "../../Assets/Images/card-img.png"
import CEO1 from "../../Assets/Images/ceo-1.png"
import CEO2 from "../../Assets/Images/ceo-2.png"
import CEO3 from "../../Assets/Images/ceo-3.png"
import CEO4 from "../../Assets/Images/ceo-4.png"
import OurLegend from "../../Assets/Images/our-legend.png"

// import "../../../node_modules/aos/dist/aos.css"
// TimelineLite,Power3,Power2
gsap.registerPlugin(ScrollTrigger);




const Home = ()=> {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const businessSectionCards = [{cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the Restless Marketer`,cardImg:CardImage},
  {cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the  Restless Marketer`,cardImg:CardImage},
  {cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the  Restless Marketer`,cardImg:CardImage},
  {cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the  Restless Marketer`,cardImg:CardImage},
  {cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the  Restless Marketer`,cardImg:CardImage},
  {cardTitle:"DESIGN UNIT",cardHeading: `The Rise of the  Restless Marketer`,cardImg:CardImage},
  ]
  const mainHeading = useRef(null)
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const imageSection = useRef(null)
   
  const sliderContent = [{slidertitle: "Unique Branding Services",
  sliderHeading: "Absolute professionals who work round the clock to turn your business into a brand.",
  sliderParagraph: "Providing solutions making you stand out from the competition. We know the art to design logos that communicate your message.",
  readBtn: "Read More."},
  {slidertitle: "Web Design & Development",
  sliderHeading: "Give your online visitors an insight into your business and its offerings to drive interaction.",
  sliderParagraph: "Providing solutions making you stand out from the competition. We know the art to design logos that communicate your message.",
  readBtn: "Read More."},
  {slidertitle: "Mobile Application Development",
  sliderHeading: "Breathtaking applications that provide for an exceptional experience while engaging users",
  sliderParagraph: "Providing solutions making you stand out from the competition. We know the art to design logos that communicate your message.",
  readBtn: "Read More."},
  {slidertitle: "Video Animation Services",
  sliderHeading: "Animated videos have the power to connect, communicate and make the audiences act.",
  sliderParagraph: "Providing solutions making you stand out from the competition. We know the art to design logos that communicate your message.",
  readBtn: "Read More."},
  {slidertitle: "Web Design & Development",
  sliderHeading: "Give your online visitors an insight into your business and its offerings to drive interaction.",
  sliderParagraph: "Providing solutions making you stand out from the competition. We know the art to design logos that communicate your message.",
  readBtn: "Read More."},
  
] 


  useEffect(()=>{
    AOS.init({duration:2000});

   TweenMax.fromTo(
     mainHeading.current,0.5,{y:18},{y: -18,yoyo: true, repeat: 5}
   )
 
  
    gsap.from(".img-1",{
      duration: 2,
      y: 800,
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
        trigger : ".sec-3",
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
        trigger : ".sec-3",
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
        trigger : ".sec-3",
        start: "top center",
        end: "bottom 100%",
      }
     
    })
  },[])
    return(
      <>
        <section className="sec1">
          <div className = "hero-main-section">
            <h2 className= "hello" ref = {mainHeading}>Hello.</h2>
            <p className = "Today-at-Legendesk"> Today at Legendesk</p> 
            
          </div>
        

        </section>
        <section className = "sec-2" >
          <Container>
            <Row xs = {12}>
             <Col>
              <h6>WE ARE LEGENDESK</h6>
               <p>
               Legendesk Private Limited is an IT Service providing company that is aimed at <br/>
                developing the local marketing to match the international standards. Everything we <br/>
                 do depicts this and only this. The company was founded by Mr. Schergeil Parvez, <br/>
                  CEO of Legendesk Pvt Limited, as a digital media agency. It was his vision that has led <br/>
                   the company to steer ahead achieving the success it has garnered. From being a small 
                    <br/>
                    scale agency in 2017,Legendesk has grown into a full-fledged IT services company in present day.
               </p>
               <p>
               Mr. Schergeil stays staunchly committed to the growth and development of the <br/>
              company, investing in the advancement of human resources through training and <br/>
              development. Legendesk is committed to provide the best work environment to its <br/>
                staff as well as superior service to its clients.
               </p>
                <p className = "read-more">
                 Read More.
               </p>
             </Col>
            </Row>
          </Container>
        </section>
        <section className = "sec-3" ref = {imageSection}>
          <Container xs = {12} md = {12}>
          <Row>
            <Col xs = {12} md={6} sm={6}>
              <img src={Image1} alt = "pic-1"  className = "img-1" ref = {img1}/>
            </Col>
            <Col xs = {12} md={4} sm={4}>
              <img src={Image2} alt = "pic-2" className = "img-2" ref = {img2}/>
            </Col>
            <Col xs = {12} md={2} sm={2}>
              <img src={Image3} alt = "pic-3"  className = "img-3" ref = {img3}/>
              <img src={Image4}  alt = "pic-4" className = "img-4" ref = {img4}/>

            </Col>
            <div className = "img-card">
              <Container>
                <Row > 
                <Col xs = {12} sm = {9} md = {9}>              
               <h6>
               With innovation & skills We Lead Businesses Forward
              </h6>
               <p>
               The management team at Legendesk is <br/>
                committed to lead the legends towards <br/>
                individual and in turn organizational success.
               </p>
               <p className = "read-more">
                 Read More.
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
        <section className = "sec-4">
          <Container >
          <div className = "slider-image">
           <div className="section-top">
          <Row>
           <Col xs = {4} sm = {4} md = {4} lg = {4}>
             <h6>WHAT WE DO?</h6>
             <h4>
             Empowering Businesses to Transform Ideas Into Reality
             </h4>
          </Col>
          <Col xs = {4} sm = {4} md = {4} lg = {4}>             
          </Col>
          <Col xs = {4} sm = {4} md = {4} lg = {4}>  
             <p>
             In all our work, we are single-minded when it <br/> 
             comes to achieving results. From in-depth <br/>
              customer journey mapping to our <br/>
              proprietary methodologies, insightful <br/>
               creative and key channel partners, by <br/>
                focusing on what matters for the brands we<br/>
                 work with, we consistently create positive
                 <br/> outcomes. 
             </p>
             <h6>Learn More.</h6>

          </Col>
          

          </Row>
          
        
            <Slider {...settings} > 
            {sliderContent.map((content,index)=>{
              return (
                
           
                <div key = {index} className = "sliderContentDetails" style={{padding: "10px"}}>

                <h6>{content.slidertitle}</h6>
                <h3>{content.sliderHeading}</h3>
                 <p>{content.sliderParagraph}</p>
                 <a href="!#">{content.readBtn}</a>     

                </div>
            
                
              )
            })}
           
            </Slider>
            </div>
          </div>
          
          </Container> 
        </section>
        <section className = "products">
          <Container>
            <Row>
              <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12} >
                <h6>PRODUCTS</h6>
              </Col>
            </Row>
            <div className = "mobile-product-1">
            <Row>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
                  
                  <div data-aos="fade-right"
              data-aos-offset="100"
             data-aos-easing="ease-in-sine" className = "mobile-1">
                    <div className="bg-product"></div>
                    <h5>evolve  </h5>
                    <img src={Mobilepng} alt="mble-1"/>
                     <p>
                       Empowering Business to <br/>
                       Transform Ideas Into reality 
                     </p>
                  </div>
                  
              </Col>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div data-aos="fade-right"
              data-aos-offset="100"
             data-aos-easing="ease-in-sine" className = "mobile-2">
               <div className="bg-product"></div>
              <h5>evolve  </h5>
              <img src={Mobilepng} alt="mble-2"/>
              <p>
                       Empowering Business to <br/>
                       Transform Ideas Into reality 
                     </p>
             </div>  
              </Col>

            </Row>
            </div>
            <div className="mobile-product-2">
            <Row>
             
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>

                  <div data-aos="fade-right"
              data-aos-offset="300"
             data-aos-easing="ease-in-sine" className = "mobile-3">
                  <h5>evolve  </h5>
                  <img src={Mobilepng} alt="mble-3"/>
                  <p>
                       Empowering Business to <br/>
                       Transform Ideas Into reality 
                     </p>
                  </div>
                  
              </Col>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div  data-aos="fade-right"
              data-aos-offset="300"
             data-aos-easing="ease-in-sine" className = "mobile-4">
              <h5>evolve  </h5>
              <img src={Mobilepng} alt="mble-4"/>
              <p>
                       Empowering Business to <br/>
                       Transform Ideas Into reality 
                     </p>
             </div>  
              </Col>

            </Row>
            </div>
            
            
          </Container>

        </section>
        <section className = "service-business-unit">
          <Container>
          <Row>
           <Col xs = {12} sm = {12} md ={12} lg={12} xl ={12}>
          <h6>SERVICE BUSINESS UNIT</h6>
          <h2>Our insights, ideas, and culture</h2>
          </Col>
           {businessSectionCards.map((card,index)=>( 
           <Col key = {index} xs = {4} md = {4} sm = {4} lg = {4} xl ={4}> 
           <div className= "business-main-card">
             <img src={card.cardImg} alt="card-images"/>
             <h6>{card.cardTitle}</h6>
           <p>{card.cardHeading}</p>  
           </div>
             </Col> ))}
         </Row>

         </Container>
        </section>
        <section className="ceo">
          <Container>
            <Row>
             <Col xs = {3} sm = {3} md = {3} lg = {3} xl = {3}>
               <div className = "ceo-image-section-1">
               <img src={CEO1} alt="-ceo-1"/>

                <img src = {CEO4} alt = "-ceo-4"/>
                </div>
             </Col>
             <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
             <div className = "ceo-image-section-2">
               <img src={CEO2} alt="-ceo-2"/>

                 <div className = "ceo-image-section-2-detail">
                   <h2>The brains that orchestrate our success</h2> 
                      <p>Spearheading the organization in the direction that sets everything right, the brains pave the path for the legends to follow</p>
                 </div>
                </div>
             </Col>
             <Col xs = {5} sm = {5} md = {5} lg = {5} xl = {5}>
              <div className="ceo-image-section-3">
             <img src={CEO3} alt="-ceo-3"/>
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
              <div className = "inv-sec-1">
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
      </>
    
    )   
}
export default Home