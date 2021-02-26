import "./SBU.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import sbuImg from "../../Assets/Images/sbu-pic-1.png"
import sbuImg2 from "../../Assets/Images/sbu-pic-2.png"
import sbuStrat from "../../Assets/Images/sbu-strat.png"

import AOS from "aos"
import {useEffect} from "react"




const SBU = ()=>{
 

    useEffect(()=>{
        AOS.init({duration:800}); 
         window.scrollTo(0,0) 
       

    },[])
    
    const v_sliderData = [1,2,3,4,]

    return(
        <div className = "sbu-main-section" >

            <Container >
                <section className ="sbu-sec-1">

                <Row >
                    <Col className="col-md-12">
                        <div data-aos="fade-right" >
                        <h3>
                        What we deliver & 
                        <br/>
                         how we drive impact .
                   </h3>
                   <div className = "sbu-brand">
                       
                    
                       <ul>
                           <li><a href = "#" >Data & Brand Strategy</a></li>
                           <li><a href = "#" >Performance Media</a></li>
                           <li><a href = "#" > Brand Content</a></li>
                       </ul>
                      
                   </div>
                 
                    
                    </div>
                    </Col>

                </Row>
                </section>
                <section className = "sbu-sec-2" data-aos="fade-left"  data-aos-duration="3000">
                <Container>
                <Row>
                <img src={sbuImg} alt=""/> 
                </Row> 
                </Container>      
                </section>
           
                 {v_sliderData.map((slidesToChange )=>{
                     return(
                        <section className = "sbu-sec-img"  key = {slidesToChange} data-aos="fade-up"  data-aos-duration="3000">
                        <Container>
                            <Row>
                                <Col xs = {12} sm={12} md={6} lg={6}>
                                <div className = "strat-data">
                                <h3>Data & Brand Strategy</h3>
                                 <p>Breakthrough with the <br/> latest insights. </p>
                                  <a > Learn More.</a>
                                  <div className="strat-data-inner">
                                     <ul>
                                     <li className = "first-li"><a >Customer Experience</a></li> 
                                     <li><a  href = "#">Brand Identity & Messaging </a></li> 
                                     <li><a  href = "#">CRM Implementation </a></li> 
                                     <li><a  href = "#">Predicitve Customer Modeling</a></li> 
                                     <li><a  href = "#">Reporting & Data Visualization</a></li> 
                                     <li><a  href = "#">Research & Insights </a></li> 
                                     <li><a  href = "#">Brand Strategy </a></li> 
                                     <li><a  href = "#">Data Science & Analytics </a></li> 
                                     <li><a  href = "#">Advance Attribution </a></li> 
                                     <li><a  href = "#">Conversion Rate Optimization </a></li> 
        
                                     
                                    </ul>    
                                    </div>    
                                 </div>
                                </Col>
                                <Col xs={12} sm = {12} md={6} lg = {6}>
                                  <div className="strat-img">
                                      <img src={sbuStrat} alt=""/>
                                  </div>
                                </Col>
                            </Row>
                        </Container>
                        
                        </section>

                     )
                 })}
              
                
              
      <section className = "service-business-unit" data-aos="fade-up" data-aos-duration="3000">
          <Row>
           <Col xs = {12} sm = {12} md ={12} lg={12} xl ={12}>
          <h6>KEY PARTNERSHIPS</h6>
          <h2>Working alongside <br/> the leaders in digital.</h2>
          </Col>
         </Row>

        </section>
          <section className = "sbu-sec-3">
              <img src={sbuImg2} alt=""/>
          </section>
            </Container>

        </div>
    )
    
    }
    export default SBU 