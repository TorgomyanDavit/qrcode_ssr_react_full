import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getHomeDetails } from "../../Api/Branch/getApi";
import { fetchGaleryImg } from "../../Api/fetchGalleryData/fetchGaleryImg";
import { homeScrollTop } from "./homeSlice";



export function HookForApi() {
    const dispatch = useDispatch()
    const {userToken} = useSelector((state) => state.globalSlice)

    useEffect(() => {
        if(userToken) {dispatch(getHomeDetails())
        } else {console.log("userToken is not defined")}
        dispatch(fetchGaleryImg())
    },[userToken])
}

export function HookForGallerry() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "visible";
        }
    },[])
}

export function HookForTopButton() {
    const dispatch = useDispatch()
    const { homeScrollbutton } = useSelector((state) => state.home);

    useEffect(() => {
        window.addEventListener('scroll', (event) =>  OnScroll(dispatch,homeScrollbutton));
        return () => {
            console.log("unmount");
            window.removeEventListener('scroll', (event) =>  {dispatch(homeScrollTop());OnScroll(dispatch,homeScrollbutton)});
        }
    },[])
}

export function OnScroll(dispatch,homeScrollbutton) {
    if(window.scrollY > 0 && homeScrollbutton !== true) {
        dispatch(homeScrollTop(true))
    } else if(window.scrollY === 0) {
        dispatch(homeScrollTop(false))
    }
}