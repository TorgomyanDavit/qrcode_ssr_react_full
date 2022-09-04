import { useEffect } from "react"
import { changeSelectedKategoriType, scrollenable } from "../../shares/globalSlice/globalSlice";
import * as Scroll from 'react-scroll';
import { useSelector } from 'react-redux';
const scroll = Scroll.animateScroll;

    export function ScrollHook(scrollIngIndex,scrollRef) {
    useEffect(() => {
        scrollRef.current[scrollIngIndex].scrollIntoView({ behavior: 'smooth', block: 'start'})
    },[scrollIngIndex])
}

export function SelectKategoriOnTimeScrollHook(event,scrollRef,dispatch,scrollIngIndex,scrollOn) {
    const productContainerScrollToTop = event.target.scrollTop
    if(productContainerScrollToTop > 0 && window.scrollY < 40) {
        scroll.scrollToBottom();
    }


    
    const headerHeight = event.target.parentElement.firstChild.clientHeight;
    const map = scrollRef.current.filter((val,index) => {
        if(val) {
            return val.getBoundingClientRect().top <= headerHeight
        }
    }).reduce((aggr,val,index,array) => {
        if(index === array.length - 1)return index;
        return aggr;
    },0)

    let currentKategoriElement = Math.ceil(scrollRef.current[map].getBoundingClientRect().top)

    if(currentKategoriElement === headerHeight) {
        dispatch(scrollenable())
    }

    if(map !== scrollIngIndex && scrollOn === true) {
        dispatch(changeSelectedKategoriType({id:map}))
    }
}

export function ScrolTopProductPage(specialProductMainRef) {
    const {openSpecFoodKey} = useSelector((state) => state.globalSlice);

    useEffect(() => {
        specialProductMainRef.current.scrollTop = -specialProductMainRef.current.scrollHeight
    },[openSpecFoodKey])
}
