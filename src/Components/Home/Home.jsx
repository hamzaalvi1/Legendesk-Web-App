import "./Home.css"
import {useState,useEffect,useRef} from "react"
import * as ScrollMagic from 'scrollmagic'
import { gsap,TimelineMax,TweenMax} from "gsap";
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
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
gsap.registerPlugin(ScrollTrigger);
ScrollMagicPluginGsap(ScrollMagic, gsap);


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
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const imageSection = useRef(null)
   
  const sliderContent = [{slidertitle: "Branding Services",
  sliderHeading: "Developing world-class identities and positioning brands that speak to customers.",
  sliderParagraph: "Our multidisciplinary team works collaboratively with the client to analyze, plan and develop a human-centered approach to create memorable experiences and impactful brand campaigns.",
  readBtn: "Learn More."},
  {slidertitle: "Web Design & Development",
  sliderHeading: "We create beautiful experiences that engage, interact and fit the needs of your audience.",
  sliderParagraph: "Our specialists build scalable platforms for a wide array of businesses, from startups to mid-sized and global corporations; we design and develop relevant experiences that connect to your audience.",
  readBtn: "Learn More."},
  {slidertitle: "Mobile Application Development",
  sliderHeading: "Delivering stellar mobile experiences with powerful & high-performance mobile apps ",
  sliderParagraph: "We combine the very best of UX/UI to build experiences that inspire and engage with our intuitive solutions that offer an exciting interface and deliver the performance your users demand.",
  readBtn: "Learn More."},
  {slidertitle: "Video Animation Services",
  sliderHeading: "Engage with well-thought stories and powerful graphics to captivates viewers.",
  sliderParagraph: "Whether you want to get the word out for your services, promote your products or need an engaging story for your brand, our master animators will turn the stuff of dreams into a reality.",
  readBtn: "Learn More."},
  {slidertitle: "Product Development",
  sliderHeading: "Building intuitive and scalable products for seamless customer interactions.",
  sliderParagraph: "From intelligent CRMs to robust attendance systems, HR applications and project management systems, we build products that automate your leads and boost customer management.",
  readBtn: "Learn More."},
  {slidertitle: "Social Media Management",
  sliderHeading: "Uncover the narrative that underpins your brand’s message & forms meaningful connections.",
  sliderParagraph: "Stand out in the competitive digital landscape with an effective SMM strategy that enables you to reach your customers with viral and compelling content while improving your business bottomline.",
  readBtn: "Learn More."},
  {slidertitle: "Search Engine Optimization",
  sliderHeading: "Gain better organic visibility for your business on the king of search engines.",
  sliderParagraph: "Want to stay one step ahead of your competition in the tough search engine games that are not for the faint of heart? Our SEO team knows what it takes to push your brand and turn it into a champ.",
  readBtn: "Learn More."},
  {slidertitle: "Content Creation",
  sliderHeading: "Connect with your audience on a deeper level with content that hits all the right sweet spots.",
  sliderParagraph: "Bring your brand to life with content that engages, compels and convinces. Your web or app design matters but only the right kind of content will enable you to connect with potential consumers.",
  readBtn: "Learn More."},
  {slidertitle: "Digital Marketing ",
  sliderHeading: "Creating intelligent customer-centric strategies that deliver tangible results.",
  sliderParagraph: "We help all kinds of brands and businesses navigate all facets of today’s digital landscape with customer-centric, revenue-driven strategies that drive positive ROI and deliver measurable results.",
  readBtn: "Learn More."},
]

const [scrolling,setScrolling] = useState(0)
const scrollEvt = ()=>{
  setScrolling(document.body.getBoundingClientRect().top)
  
 }
 useEffect(()=>{
  window.addEventListener("scroll",scrollEvt)

  return ()=>{
  window.removeEventListener("scroll",scrollEvt)
  }
  },[])
  useEffect(()=>{
    AOS.init({duration:800}); 
     window.scrollTo(0,0) 
   

},[])

 
 


  useEffect(()=>{
    
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
  useEffect(()=>{
    const controller = new ScrollMagic.Controller()
    const scroll_timeline = new TimelineMax()
   
    scroll_timeline.add(
      [

        
      TweenMax.to(".background-scroll",2,{scale:Math.abs(scrolling)}),
       TweenMax.to(".hello",2,{scale: 2.5,color: "white",delay: 0.7,}),
       TweenMax.to(".sec1",2,{backgroundColor: "white",delay:1}),
  
      
      
  
       ])
  
  
    new ScrollMagic.Scene({
      duration: "350%", // the scene should last for a scroll distance of 100px
      offset: 0 // start this scene after scrolling for 50px
    })
     .setTween(scroll_timeline)
      .setPin(".sec1")
      .addTo(controller); // assign the scene to the controller
    return ()=>{
      setScrolling(0)
    }
   },[setScrolling])
    return(
      <div className = "home-section">
        
        <section className="sec1">
       
          <div className = "hero-main-section">
            <h2 className= "hello" >Hello.</h2>
            <p className = "Today-at-Legendesk" data-aos="fade-up"  data-aos-duration="1500"> Moving the Tech Industry Forward </p> 
            
          </div>
            
            <div className = "background-scroll">

            </div>
          
        </section>
        
        <section className = "sec-2" >
          <Container>
            <Row xs = {12}>
             <Col>
              <h6 >EVERY GREAT STORY STARTS WITH AN IDEA</h6>
               <p data-aos="fade-up"  data-aos-duration="3000" >
               So did ours. Legendesk began as a vision back in 2017. We started our journey with a team of passionate individuals dedicated to creating innovative tech solutions, ready to make an impact and break the barriers currently present in the local IT and tech market. And even though we started off small, it was solely our belief in pushing the boundaries that led us to where we stand today – making our mark across Pakistan and the world. .
               </p>
               <p data-aos="fade-up"  data-aos-duration="3000">
               Founded by Mr. Schergeil Parvez, our core mission is to shape the future of Pakistan by creating opportunities in the local market for people while building unprecedented value for investors and partners across the world. Legendesk is an employee-centric company that creates tech solutions designed to improve business & customer relations, and thrives on disrupting the norm. 
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
            <div className = "img-card"  data-aos="fade-up"  data-aos-duration="3000">
              <Container>
                <Row > 
                <Col xs = {12} sm = {9} md = {9}>              
               <h6>
               Diverse. Inclusive. Equal. Open. 
              </h6>
               <p>
               People love working where they are valued and appreciated. At Legendesk, we’ve worked hard to build an environment that’s safe and a culture where everyone feels they belong (we’re pretty cool that way). 
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
          <div className = "slider-image" data-aos="fade-up"  data-aos-duration="3000">
           <div className="section-top">
          <Row>
           <Col xs = {4} sm = {4} md = {4} lg = {4}>
             <h6>WHAT WE DO?</h6>
             <h4>
             Creating Human-Centered Digital Experiences to Transform Businesses
             </h4>
          </Col>
          <Col xs = {4} sm = {4} md = {4} lg = {4}>             
          </Col>
          <Col xs = {4} sm = {4} md = {4} lg = {4}>  
             <p>
             We build brands, develop digital products and innovate tech for startups, companies, and global businesses. At the heart of what we do is the passion for building future-proof solutions that fundamentally improve businesses and humanize the user experiences. By focusing on the customer journey, we create experiences that engage and empower customers. 
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
                <h6>Stuff We Build</h6>
              </Col>
            </Row>
            <div className = "mobile-product-1">
            <Row>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
                  
                  <div data-aos="fade-right"
              data-aos-offset="100"
             data-aos-easing="ease-in-sine" className = "mobile-1">
                    <div className="bg-product"></div>
                    <h5>CRM</h5>
                    <img src={Mobilepng} alt="mble-1"/>
                     <p>
                     Empowering businesses to <br/>evolve into the future 
                     </p>
                  </div>
                  
              </Col>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div data-aos="fade-right"
              data-aos-offset="100"
             data-aos-easing="ease-in-sine" className = "mobile-2">
               <div className="bg-product"></div>
              <h5>Mobile App </h5>
              <img src={Mobilepng} alt="mble-2"/>
              <p>
              Connect on the go because <br/> business never sleeps 
                     </p>
             </div>  
              </Col>

            </Row>
            </div>
            <div className="mobile-product-2">
            <Row>
             
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>

                  <div data-aos="fade-right"
              data-aos-offset="100"
             data-aos-easing="ease-in-sine" className = "mobile-3">
                  <h5>Performance <br/>System </h5>
                  <img src={Mobilepng} alt="mble-3"/>
                  <p>
                  Accurate forecasts that drive engagement
                     </p>
                  </div>
                  
              </Col>
              <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div  data-aos="fade-right"
              data-aos-offset="300"
             data-aos-easing="ease-in-sine" className = "mobile-4">
              <h5>Attendances <br /> Portal</h5>
              <img src={Mobilepng} alt="mble-4"/>
              <p>
              Next-gen automation for <br/> transformative companies 
                     </p>
             </div>  
              </Col>

            </Row>
            </div>
            
            
          </Container>

        </section>
        <section className = "service-business-unit" >
          <Container>
          <Row>
           <Col xs = {12} sm = {12} md ={12} lg={12} xl ={12}>
          <h6 data-aos="fade-right"  data-aos-duration="3000">Strategic Business Units</h6>
          <h2 data-aos="fade-right"  data-aos-duration="3000">We Build. Create. Matter Together</h2>
          </Col>
           {businessSectionCards.map((card,index)=>( 
           <Col key = {index} xs = {4} md = {4} sm = {4} lg = {4} xl ={4}> 
           <div className= "business-main-card" data-aos="fade-down"  data-aos-duration="3000" >
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
               <img src={CEO1} alt="-ceo-1" data-aos="fade-right"/>

                <img src = {CEO4} alt = "-ceo-4" data-aos="fade-right"/>
                </div>
             </Col>
             <Col xs = {4} sm = {4} md = {4} lg = {4} xl = {4}>
             <div className = "ceo-image-section-2">
               <img src={CEO2} alt="-ceo-2" data-aos="fade-right" />

                 <div className = "ceo-image-section-2-detail">
                   <h2>The brains & brawn leading the way</h2> 
                      <p>Paving the way for driven tech fanatics and future visionaries, we’re spearheading the Legends on the journey to create a positive future for Pakistan.</p>
                 </div>
                </div>
             </Col>
             <Col xs = {5} sm = {5} md = {5} lg = {5} xl = {5}>
              <div className="ceo-image-section-3">
             <img src={CEO3} alt="-ceo-3" data-aos="fade-right"  />
             </div>
             </Col>

            </Row>
          </Container>
        </section>
        <section className = "our-legend">
          <Container>
            <Row>
            <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12}>
              <h6 data-aos="fade-right" data-aos-duration="3000">OUR LEGENDS</h6>
              <h2  data-aos="fade-right" data-aos-duration="3000"> The Winning Team</h2>
              <img src = {OurLegend} alt = "our-legend" data-aos="fade-right" data-aos-duration="3000"/>
            </Col>  
            </Row> 
          </Container>
        </section>

        <section className = "invitation-section">
          <Container>
            <Row>
             <Col xs = {12} sm = {12} md = {12} lg = {12} xl = {12} > 
          <h2 data-aos="fade-up" data-aos-easing="linear"
           data-aos-duration="1500">Want to be the Next Legend?</h2>
          <p data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">We’re an ever-expanding diverse team of individuals who are driven by passion and connected by hardwork. Ready to fuel your fire? Join our Legendary team.</p>
          </Col>
          
          </Row>
           <div className = "invi-img-sec-1">
          <Row>

          <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-1" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
                <h6>Legendesk Blog</h6>
                 <p>Be in the know.</p> 
              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-2" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
              <h6>Human Resource</h6>
                 <p>We’re the people’s people.</p>   
                </div> 
                </Col>
                </Row>
                </div>
                 <div className ="invi-img-sec-2">
                <Row>
                <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-3" data-aos="fade-up" data-aos-easing="linear"
     data-aos-duration="1500">
                 <h6>Stuff We Build</h6>
                 <p>Experience is everything</p>   

              </div>
              
            </Col>
            <Col xs = {6} sm = {6} md = {6} lg = {6} xl = {6}>
              <div className = "inv-sec-4" data-aos="fade-up" data-aos-easing="linear"
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
export default Home