import React, {createContext,useState} from "react"


export const MainContext = createContext()

export const MainProvider =  ({children})=>{

    const [toggleNavClass,setToggleNavClass] = useState(false)
    const [isOpen,setIsOpen]= useState(false)



return(
    <MainContext.Provider value= {{toggleNavClass,setToggleNavClass,isOpen,setIsOpen}}>
        {children}
    </MainContext.Provider>
)

}
