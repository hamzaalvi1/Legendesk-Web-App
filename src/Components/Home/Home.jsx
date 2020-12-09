import "./Home.css"
import {useEffect,useRef} from "react"
import { gsap, TweenMax,TimelineLite,Power3,Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image1 from "../../Assets/Images/image-1.jpg"
import Image2 from "../../Assets/Images/image-2.jpg"
import Image3 from "../../Assets/Images/image-3.jpg"
import Image4 from "../../Assets/Images/image-4.jpg"
import CombinedShaped from "../../Assets/Images/combined-shape.svg"




const Home = ()=> {
  const timeline = new TimelineLite()
  const mainHeading = useRef(null)
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const imageSection = useRef(null)



  useEffect(()=>{
   console.log(mainHeading.current)
   TweenMax.fromTo(
     mainHeading.current,0.5,{y:18},{y: -18,yoyo: true, repeat: 5}
   )
   TweenMax.to(
    imageSection.current,1.5,{css: {visibility:"visible"}}
  )
   timeline.from(img1.current,1.2,{y:800, opacity:1, ease:Power2.easeOut},1)
            .from(img1.current,2,{scale:1.2, opacity:0,  ease:Power2.easeOut},1)


    timeline.from(img2.current,1.2,{y:-800, opacity:1, ease:Power2.easeOut},1)
            .from(img2.current,2,{scale:1.2, opacity:0,  ease:Power2.easeOut},1)
   
            timeline.from(img3.current,1.2,{x:-400, opacity:1, ease:Power2.easeOut},1)
            .from(img3.current,2,{scale:1.2, opacity:0,  ease:Power2.easeOut},1)
            timeline.from(img4.current,1.2,{x:400, opacity:1, ease:Power2.easeOut},1)
            .from(img4.current,2,{scale:1.2, opacity:0,  ease:Power2.easeOut},1)

    // gsap.fromTo(img1.current, 1.2,{
    //   y:800,
    //   opacity:1, 
    //   ease:Power2.easeOut,
    // },{
      
    //   ScrollTrigger: {
    //     trigger: '.sec-3',
    //     start: 'top center +=100',
    //     toggleActions: "restart pause reverse none",
    //     scrub:true,
    //     markers: true
    //   },
    // });

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
              <img src={Image1} alt="image-1" className = "img-1" ref = {img1}/>
            </Col>
            <Col xs = {12} md={4} sm={4}>
              <img src={Image2} alt="image-2" className = "img-2" ref = {img2}/>
            </Col>
            <Col xs = {12} md={2} sm={2}>
              <img src={Image3} alt="image-3" className = "img-3" ref = {img3}/>
              <img src={Image4} alt="image-4" className = "img-4" ref = {img4}/>

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
          <Container>
            <Row>
              <Col>
          <h3>Hello World</h3>
          <h3>Hello World</h3>
          <h3>Hello World</h3>
          <h3>Hello World</h3>
          <h3>Hello World</h3>
          </Col>
          </Row>
          </Container> 
        </section>
      </>
    
    )   
}
export default Home