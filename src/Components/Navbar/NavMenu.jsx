import {useState,useContext} from "react"
import  "./NavMenu.css"
import {Link,useHistory} from "react-router-dom" 
import {MainContext} from "../Context/GlobalState"

const NavMenu = ()=>{
 

const [toggleMenuItem,setToggleMenuItem] = useState(false) 
const mainCntxt = useContext(MainContext)
const {setToggleNavClass,toggleNavClass,isOpen,setIsOpen} = mainCntxt
const onChangeNavClass = ()=>{
  setToggleNavClass(!toggleNavClass)
  setIsOpen(!isOpen)
}
const history = useHistory()   
const onHoverRoute = (path)=>{

 history.push(path)
}


  const navLink_Data = [{title: "Hello.",text: "Welcome Home.",path: "/"},
  {title: "SBU.",text: "Strategic Business Units.",path: "/sbu"},
  {title: "About.",text: "The Journey.",path: "/about"},
  {title: "Legends",text:"Meet the Team",path: "/legends"},
  {title: "Careers.",text: "Join the League.",path: "/career"},
  {title: "Contact.",text: "Get in touch.",path : "/contact"}]

    return(
      
       <div className = {toggleMenuItem ? "nav-Menu-active" : "nav-Menu"}>
            
                <ul className = "nav_list" > 
                   {navLink_Data.map((navMenu,index)=>(
                       <li key = {index} className="nav_list_items">
                        <Link to = {navMenu.path}
                        onClick = {onChangeNavClass}
                        onMouseEnter = {()=> onHoverRoute(navMenu.path)} className = "nav-list-menu" >{navMenu.title}</Link>
                        <p>{navMenu.text}</p>
                       </li>
                   ))} 
                </ul>
                
            </div>

    )
}
export default NavMenu