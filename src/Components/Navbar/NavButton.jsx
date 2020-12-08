import {useState,useRef} from "react"
import "./NavButton.css"
import legendDeskLogoInvert from "../../Assets/Images/legendesk-logo-invert.svg"
import LegenDesk_logo from "../../Assets/Images/legendesk-logo-main.svg"
import LegenDeskFullLogo from "../../Assets/Images/Legendesk-full-logo.svg"

const Navbar = ()=>{
    const [toggleMenu,setToggleMenu] = useState(false)
    const toggleMenuState = ()=>{
        setToggleMenu(!toggleMenu)
    }

    const [isOpen,setIsOpen]= useState(false)
    const img_Ref = useRef()
    const isOpenClass = ()=>{
        setIsOpen(!isOpen)
        // setToggleMenu(false)
    }
   

    return(
        <div className={isOpen ? "nav-bar is-open" : "nav-bar" } onClick= {isOpenClass}>
            { isOpen ? <img src = {LegenDeskFullLogo} alt = "legenDesk-logo" className ={"nav-button-active"}/>:

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