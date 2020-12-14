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
                <Route  path = "/about" component = {About}  />
                <Route  path = "/sbu" component = {SBU}  />
                <Route  path = "/legends" component = {Legends}  />
                <Route  path = "/career" component = {Career}  />
                <Route  path = "/contact" component = {Contact}  />



            </Switch>    
        </div>
    )
}
export default RouteConfig