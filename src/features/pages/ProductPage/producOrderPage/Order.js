import Header from "../../../shares/components/header/header";
import { useSelector,useDispatch } from "react-redux"  
import "../../../assets/styles/product/order.scss"
import { createSliderPacket, deleteItemFromBasket, makeOrder, openSpecFood } from "../../../shares/globalSlice/globalSlice";
import {Fragment} from 'react';
import SpecialProduct from "../specialProduct/specialProduct";
import { OrderItemSlider } from "./sliderOrderedItem";
import { addCommaAllPrice } from "../../../shares/globalSlice/globalSliceLogic";
import { BasketMounth } from "./basketMount";
import { decreaseGuest, incresaeGuest } from "../productSlice";


export default function Order() {
    const {orderTitle, guestCount } = useSelector((state) => state.product)
    const {basket,priceSimbol,plusSimbol,allOrderBill,percent,openSpecFoodKey} = useSelector((state) => state.globalSlice)
    const dispatch = useDispatch()

    return (
        <div className={`order_Container ${openSpecFoodKey ? 'backgroundShadow' : ''}`}>
           <Header toRoute={true}/>
           <div className="addDaskCountAndTittle">
                <p className="guestCount">Guest count</p>
                <div className="guestCountButtonDiv">
                    <button onClick={() => dispatch(decreaseGuest())}>-</button>
                    {guestCount}
                    <button onClick={() => dispatch(incresaeGuest())}>+</button>
                </div>
           </div>

           <div className="orderTitle">
                <span>{orderTitle}</span>
                <button onClick={() =>  dispatch(deleteItemFromBasket("all"))} >Remove all</button>
            </div>



            {basket.map((order,index) => {
                const {name,price,imgUrl,orderedCount,additions} = order
                return (
                    <button key={index} className="productItem" onClick={(e) => {
                        dispatch(openSpecFood({goods:{...order,index}}))
                    }}>
                        <div className="Price_Name_Description">
                            <div className="deleteItemButton" onClick={(e) => {
                                e.stopPropagation()
                                dispatch(deleteItemFromBasket(order))
                            }}>
                                <i className='icon-ic_delete .path1'></i>
                            </div>
                            <div className="orderReceptDescriptionWraper">
                                <div className="containerForNameAndquantity">
                                    <span className="orderedCount">{`${orderedCount} x`}</span>
                                    <span className='productName'>{name}</span>
                                </div>
                                <span className={"productPrice"}>{addCommaAllPrice(price)}{priceSimbol}</span>
                            </div>
                            {additions.map((addition,addIndex) => {
                                const {price,selected,selectedCount,name} = addition
                                return (
                                    <Fragment key={addIndex}>
                                        {
                                            selected ? <div className="additionRecept">
                                                <div className="containerForNameAndquantity">
                                                    <span className="orderedCount"></span>
                                                    <span className='productName'>
                                                        <span>{`${selectedCount}x `}</span> {name}
                                                    </span>
                                                </div>
                                                <span className={"productPrice"}>{price ? plusSimbol + " " + addCommaAllPrice(price) + "" + priceSimbol : ""}</span>
                                            </div> : null
                                        }
                                    </Fragment>
                                )
                            })}
                        </div>
                        <img src={imgUrl}/>
                    </button>
                )
            })}

            {basket.length ? <BasketMounth/> : null}

            {basket.length ? 
            <button className="makeOrder" onClick={() => {
                dispatch(makeOrder());
                dispatch(createSliderPacket());
            }}><span>Make order</span></button> : null}

            <SpecialProduct/>
            <OrderItemSlider/>
        </div>
    )
}