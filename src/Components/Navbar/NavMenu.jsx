import {useState} from "react"
import  "./NavMenu.css"
import {Link} from "react-router-dom" 

const NavMenu = ()=>{
const [toggleMenuItem,setToggleMenuItem] = useState(false) 
   
  const setToggleItem = ()=>{
      setToggleMenuItem(!toggleMenuItem)
  }
  const navLink_Data = [{title: "Hello.",text: "Today at Huge.",path: "/"},
  {title: "SBU.",text: "Fully-Functional-Unit.",path: "/SBU"},
  {title: "Work.",text: "What we've made.",path: "/Work"},
  {title: "Legends",text:"Our Management",path: "/Legends"},
  {title: "Careers.",text: "Join the team.",path: "/Career"},
  {title: "Contact.",text: "Get in touch.",path : "/Contact"}]

    return(
    <div className = {toggleMenuItem ? "nav-Menu-active" : "nav-Menu"}>
            {/* <img src={LegendeskfullLogo} onClick = {setToggleItem} alt="legendesk-logo"  style={{width: "150px",display:"block",paddingTop: "80px",margin: "0 auto",cursor:"pointer"}} /> */}
                <ul className = "nav_list" > 
                   {navLink_Data.map((navMenu,index)=>(
                       <li key = {index} className="nav_list_items">
                        <Link to = {navMenu.path} className = "nav-list-menu">{navMenu.title}</Link>
                        <p>{navMenu.text}</p>
                       </li>
                   ))} 
                </ul>

            </div>

    )
}
export default NavMenu