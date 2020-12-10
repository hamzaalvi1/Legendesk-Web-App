import {useState,useRef,useContext} from "react"
import "./NavButton.css"
import legendDeskLogoInvert from "../../Assets/Images/legendesk-logo-invert.svg"
import LegenDesk_logo from "../../Assets/Images/legendesk-logo-main.svg"
import LegenDeskFullLogo from "../../Assets/Images/Legendesk-full-logo.svg"
import {MainContext} from "../Context/GlobalState"

const Navbar = ()=>{
    const [toggleMenu,setToggleMenu] = useState(false)
    const toggleMenuState = ()=>{
        setToggleMenu(!toggleMenu)
    }
    const mainCntxt = useContext(MainContext)
    const {toggleNavClass,setToggleNavClass,isOpen,setIsOpen} = mainCntxt
  
    const img_Ref = useRef()
    const isOpenClass = ()=>{
        setIsOpen(!isOpen)
        setToggleNavClass(!toggleNavClass)
       
    }
   

    return(
        <div className={isOpen && toggleNavClass ? "nav-bar is-open" : "nav-bar" } onClick= {isOpenClass}>
            { isOpen && toggleNavClass ? <img src = {LegenDeskFullLogo} alt = "legenDesk-logo" className ={"nav-button-active"}/>:

        <div className={"nav-button"} onClick = {toggleMenuState} onMouseEnter = {()=>img_Ref.current.src = legendDeskLogoInvert}
    onMouseLeave = {()=> img_Ref.current.src = LegenDesk_logo  }>
    <img src = {LegenDesk_logo} ref = {img_Ref} alt = "logo-main"
     width = "120px"
       />
    </div>      }          
       </div>

    )
}
export default Navbar