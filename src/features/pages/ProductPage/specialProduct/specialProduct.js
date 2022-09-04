import "../../../assets/styles/product//specialProduct.scss"
import { useDispatch, useSelector } from "react-redux"
import { additionsType,animateSpecialProductMain, styleForBottomPadding } from "../classNameAndAnimateFunction";
import { useRef,memo,useEffect } from "react";
import { decrease, increase,openSpecFood,SelectAdAdditionsSauces } from "../../../shares/globalSlice/globalSlice";
import { BusketButton } from "../busketButton/busketButton";
import { addCommaAllPrice } from "../../../shares/globalSlice/globalSliceLogic.js";
import * as Scroll from 'react-scroll';
import { ScrolTopProductPage } from "../Hook";
import { useLocation } from 'react-router-dom';
import { styleForcheckBox_Item_BottomPadding } from './../classNameAndAnimateFunction';
import { ExtraAddition } from './extraAddition';
const scroll = Scroll.animateScroll;



export default memo(function SpecialProduct() {
    const {openSpecFoodKey,Food,priceSimbol,plusSimbol} = useSelector((state) => state.globalSlice);
    const {name,description,originalPrice,extraTitle,maxCountText,permisionCount,additionsExtra} = Food || {}
    const inputValueRef = useRef("")
    const specialProductMainRef = useRef(null)
    const dispatch = useDispatch()
    ScrolTopProductPage(specialProductMainRef,)
    const location = useLocation()
    const svaeButtonKey = (location.pathname === "/order" && openSpecFoodKey === true ) || null

    
    return (
        <div ref={specialProductMainRef} className={`specialProductMain`} style={ animateSpecialProductMain(openSpecFoodKey) } 
            onClick={() => dispatch(openSpecFood({key:null}))}
        >
            <div className="productItemContainer">
                <div className="productSpecImg">
                    <img src={Food && Food.imgUrl} alt="foodImg"/>
                </div>
                {Food ? 
                <div className={`checkBox_Item`} style={styleForcheckBox_Item_BottomPadding(svaeButtonKey)} onClick={(e) => e.stopPropagation()}>
                    <span className="foodTitle">{name}</span>
                    <span className="foodDescription">{description}</span>
                    <span className="foodPrice">{addCommaAllPrice(originalPrice)}{priceSimbol}</span>
                    <div className="checkAddition">
                        <ExtraAddition/>
                    </div>
                    <span className="extraNote">{Food.extraNote}</span>
                    <input className="extraNoteInput" placeholder="Write Message" onChange={(e) => inputValueRef.current = e.target.value}/>
                </div> : null}
            </div>
            <BusketButton/>
        </div>
    )
});



// older version souces
// {Food ? 
//     <div className={`checkBox_Item`} style={styleForcheckBox_Item_BottomPadding(svaeButtonKey)} onClick={(e) => e.stopPropagation()}>
//         <span className="foodTitle">{name}</span>
//         <span className="foodDescription">{description}</span>
//         <span className="foodPrice">{addCommaAllPrice(originalPrice)}{priceSimbol}</span>
//         {/* <div className="chodeExtraAndpermissionCount">
//             <span className="extraTitle">{extraTitle}</span>
//             <span className="maxChoice">{maxCountText} {permisionCount}</span>
//         </div> */}
//         <div className="checkAddition">
//             {/* {Food.additions.map((addition,index) => {
//                 const {selected,name,price,originalPrice,selectedCount,maxCount} = addition
//                 const {permisionCount} = Food
//                 return (
//                     <div key={index} className="item_Additions">
//                         <label className="containerCheckBox">
//                             <label className={`${additionsType(permisionCount)} ${selected ? 'selected' + additionsType(permisionCount) : ''}`}>
//                                 <input type={"checkbox"} name="radio" onChange={(e) => {
//                                     dispatch(SelectAdAdditionsSauces({id:index}))
//                                 }}/>
//                             </label>
//                             <span className="additionsName">{name}</span>
//                         </label>
//                         <div className="containerPlusPinusAndPrice">
//                             {
//                                 selected && (maxCount > 1) ? 
//                                 <div className="countPlusMinusContainer">
//                                     <button onClick={() => dispatch(decrease({id:index}))}>-</button>
//                                     <span>{selectedCount}</span>
//                                     <button onClick={() => dispatch(increase({id:index}))}><span>+</span></button>
//                                 </div> : null
//                             }
//                             <span className="receptPrice">{ price ?  `${plusSimbol}  ${addCommaAllPrice(originalPrice)}${priceSimbol}` : null}</span>
//                         </div>
//                     </div>
//                 )
//             })} */}

//             <ExtraAddition/>
//         </div>
//         <span className="extraNote">{Food.extraNote}</span>
//         <input className="extraNoteInput" placeholder="Write Message" onChange={(e) => inputValueRef.current = e.target.value}/>
//     </div> : null}