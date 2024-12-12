import {useState} from "react"


function Button({text}:{text:string}){

const [isHovered, setHovered] = useState(false)
const handleMouse = () => (
    setHovered(!isHovered)
)

return(
    
<button className={`w-72 h-11 ${isHovered ? "bg-[#C4F82A] text-black" : "bg-[#333333]"} mt-4 rounded-xl text-white`} onMouseEnter={handleMouse} onMouseLeave={handleMouse}> {text}  </button>


)



}

export default Button