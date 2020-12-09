import {useState} from "react"
import  "./NavMenu.css"
import {Link,useHistory} from "react-router-dom" 

const NavMenu = ()=>{
const [toggleMenuItem,setToggleMenuItem] = useState(false) 
const history = useHistory()   
const onHoverRoute = (path)=>{
 history.push(path)
}


  const navLink_Data = [{title: "Hello.",text: "Today at Huge.",path: "/"},
  {title: "SBU.",text: "Fully-Functional-Unit.",path: "/SBU"},
  {title: "Work.",text: "What we've made.",path: "/Work"},
  {title: "Legends",text:"Our Management",path: "/Legends"},
  {title: "Careers.",text: "Join the team.",path: "/Career"},
  {title: "Contact.",text: "Get in touch.",path : "/Contact"}]

    return(
    <div className = {toggleMenuItem ? "nav-Menu-active" : "nav-Menu"}>
                <ul className = "nav_list" > 
                   {navLink_Data.map((navMenu,index)=>(
                       <li key = {index} className="nav_list_items">
                        <Link to = {navMenu.path} onMouseEnter = {()=> onHoverRoute(navMenu.path)} className = "nav-list-menu" >{navMenu.title}</Link>
                        <p>{navMenu.text}</p>
                       </li>
                   ))} 
                </ul>

            </div>

    )
}
export default NavMenu