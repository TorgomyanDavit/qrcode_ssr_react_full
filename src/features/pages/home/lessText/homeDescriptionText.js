import { useState } from "react"
import { useSelector } from "react-redux"  


export function LessTextDescription({max=450}) {
    const [showText,setshowText] = useState(true)
    const { descriptionContent } = useSelector((state) => state.home);
    
    return (
        <p className="restaurantDescription">
            {showText ? descriptionContent.substring(0,max) + "..." : descriptionContent}
            <button className="showLessButton" onClick={() => setshowText(!showText)}>{showText ? `show more ` : "show less"}</button>
        </p>
    )
}