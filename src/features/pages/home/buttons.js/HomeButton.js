import { Link } from "react-router-dom"
import { ROUTES } from "../../../shares/constantsVariable/routes.js"
import { useDispatch } from "react-redux"
import { openSpecFood, selectMenu } from "../../../shares/globalSlice/globalSlice.js"



export function HomeButton({state}) {
    const {index,val} = state
    const dispatch = useDispatch()
    

    return (
        <Link to={ROUTES.PRODUCT} className="ourMenyuButton" onClick={() => {
            dispatch(openSpecFood({key:null}))
            dispatch(selectMenu({id:index}))
        }}>{val.name}</Link>
    )
}