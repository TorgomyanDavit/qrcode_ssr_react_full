import { addOrderToBasket, decreaseOrderCount, deleteItemFromBasket, increaseOrderCount, openSpecFood, saveChanges } from "../../../shares/globalSlice/globalSlice"
import { animateBasketButton, styleForBottomPadding } from "../classNameAndAnimateFunction"
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {  Redirect, useHistory, useLocation } from 'react-router-dom';
import "../../../assets/styles/basketButton/basketButton.scss"
import { createSliderPacket } from "../productSlice";
import { addCommaAllPrice } from "../../../shares/globalSlice/globalSliceLogic";



export function BusketButton() {
    const { openSpecFoodKey,basket,Food,allOrderBill,priceSimbol } = useSelector((state) => state.globalSlice);
    // useEffect(() => {setBasketKey(false)},[openSpecFoodKey])
    // const navigate = useNavigate();
    const navigate = useHistory()
    const dispatch = useDispatch();
    const location = useLocation();
    const svaeButtonKey = (location.pathname === "/order" && openSpecFoodKey === true ) || null
 

    return (
        <>
            {(openSpecFoodKey === true || basket.length > 0 && location.pathname !== "/order" ) ? 
            <div className={`sendFoodToBasketContainer `} style={styleForBottomPadding(svaeButtonKey)} onClick={(e) => e.stopPropagation()}>
                {
                    openSpecFoodKey ? <div className="countPlusMinusFood">
                        <button onClick={() => dispatch(decreaseOrderCount()) }>-</button>
                        <span>{Food ? Food.orderedCount : ""}</span>
                        <button onClick={() => dispatch(increaseOrderCount())}><span>+</span></button>
                    </div> : null
                }
                 

                {
                    location.pathname !== "/order" ? <button className='sendFoodToBasket' onClick={() => {
                    if(openSpecFoodKey === true)dispatch(addOrderToBasket())
                    if(openSpecFoodKey === null && basket.length > 0)navigate.push("/order")
                    }}>{basket.length  && openSpecFoodKey !== true ? `Go To Order (${addCommaAllPrice(allOrderBill)}${priceSimbol})` : "Add To Basket"}</button> : null
                }

                
                {
                    svaeButtonKey ? <button className='sendFoodToBasket' onClick={() => {
                        dispatch(saveChanges());
                    }}>{`Save Changes`}</button> : null
                }         


                {
                    svaeButtonKey ? <button className='removeItem' onClick={() => {
                        dispatch(deleteItemFromBasket());
                    }}>{`Remove product from order`}</button> : null
                }  
            </div> : null}
        </>
    )
}