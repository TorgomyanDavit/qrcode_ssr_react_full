import "../../assets/styles/home/home.scss"
import { useSelector } from "react-redux"  
import { Gallery } from "./gallery/gallery"
import { HookForApi, HookForTopButton, OnScroll } from "./hook"
import { HomeButton } from "./buttons.js/HomeButton"
import { LessTextDescription } from "./lessText/homeDescriptionText"
import { DetailOrder } from "./detailOrder"
import { classnameOverflowHiden } from "./additionFunction"
import MakingOrder from "./FinallyOrder/finallyOrder"
import Header from "../../shares/components/header/header"
import { GalerySlider } from "./gallery/GalerySlider"
import PaymentMethod from "./paymentMethod/paymentMethod"
import * as Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;


export default function Home() {
    const {
        logoUrl,menyuName,mainCover,SliderKey,qrBranchMenu,
        descriptionName,galleryName,homeScrollbutton
    } = useSelector((state) => state.home);
    const { StateMenu,orderOpenKey } = useSelector((state) => state.globalSlice);
    HookForApi();
    HookForTopButton();



    return (
        <main className={`mainHomeContainer ${classnameOverflowHiden(orderOpenKey)}`}>
            <Header/>
            <div className="homeImgContainer">
                <img className="homeImg" src={mainCover} alt="homeImg" title="Restaurant"/>
            </div>
            <div className="homeContentDiv">
                <div className="contentLogo"><img src={logoUrl} alt="logo"/></div>
                <section className="sectionContainer">
                    <span className="homeSectiontTitle">{menyuName}</span>
                    <DetailOrder/>
                    <div className="buttonContainer">
                        {qrBranchMenu.map((val,index) => {
                            return <HomeButton key={index} state={{val,index}}/>
                        })}
                    </div>
                </section>

                <section className="sectionContainer">
                    <span className="homeSectiontTitle">{descriptionName}</span>
                    <LessTextDescription/>
                </section>

                <section className="sectionContainer">
                    <span className="homeSectiontTitle">{galleryName}</span>
                    <Gallery/>
                </section>
            </div>
            <MakingOrder/>
            {SliderKey ? <GalerySlider/> : null}
            <PaymentMethod/>
            
            {homeScrollbutton ? 
            <button className="scrollToTop" onClick={() => scroll.scrollToTop()}>
                <i className='icon-Feather-arrows-arrow-up'></i>
            </button> : null}
        </main>
    )
}