import "./About.css"
import playButton from "../../Assets/Images/play-button.svg"
const About = ()=>{

return(
    <main className = "about-main-section">
        <section className = "about-banner">
            
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
        </section>
    </main>
)

}
export default About 