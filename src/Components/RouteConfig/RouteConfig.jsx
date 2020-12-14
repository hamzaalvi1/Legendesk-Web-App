import {Switch,Route} from "react-router-dom"
import Home from "../Home/Home"
import About from "../About/About"
import SBU from "../SBU/SBU"
import Legends from "../Legends/Legends"
import Career from "../Career/Career"
import Contact from "../Contact/Contact"



const RouteConfig = ()=>{
    return(
        <div className="">
            <Switch>
                <Route exact path = "/" component = {Home}  />
                <Route  path = "/About" component = {About}  />
                <Route  path = "/SBU" component = {SBU}  />
                <Route  path = "/Legends" component = {Legends}  />
                <Route  path = "/Career" component = {Career}  />
                <Route  path = "/Contact" component = {Contact}  />



            </Switch>    
        </div>
    )
}
export default RouteConfig