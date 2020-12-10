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
import Slider from "react-slick";
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
      </>
    
    )   
}
export default Home