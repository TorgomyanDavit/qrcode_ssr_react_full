import { useSelector,useDispatch } from "react-redux"  
import "../../../assets/styles/home/home.scss"
import { openorderDetail, openSpecFood } from "../../../shares/globalSlice/globalSlice";
import { classnameorderActive, countedOrdersBill, OrderDetail, showCountedMount } from "../additionFunction";
// import { addCommaAllPrice } from "../../../shares/globalSlice/globalSliceLogic";
import AdditionSouces from "./additionsSouces";
import AllBasketMount from './allBasketMount';
import { addCommaAllPrice } from './../../../shares/globalSlice/globalSliceLogic.js';

export default function MakingOrder() {
    const {orderTitle,subtotalText,discountText,totaltext} = useSelector((state) => state.product)
    const {priceSimbol,plusSimbol,orderOpenKey,Orders,percent} = useSelector((state) => state.globalSlice)
    const dispatch = useDispatch()
    const Bill = countedOrdersBill(orderOpenKey,Orders)

    return (
    <div className={`order_Container ${classnameorderActive(orderOpenKey)}`}>
            <button className="freeSpace" onClick={() => dispatch(openorderDetail())}></button>
            <span className="orderTitle">{orderTitle}</span>
            <div className="orderScroll">
                {OrderDetail(orderOpenKey,Orders).map((order,index) => {
                    const {name,price,imgUrl,orderedCount,additions} = order
                    return (
                        <button key={index} className="productItem" onClick={() => dispatch(openSpecFood({goods:{...order,index}}))}>
                            <div className="Price_Name_Description">
                                <div className="orderReceptDescriptionWraper">
                                    <div className="containerForNameAndquantity">
                                        <span className="orderedCount">{`${orderedCount} x`}</span>
                                        <span className='productName'>{name}</span>
                                    </div>
                                    <span className={"productPrice"}>{addCommaAllPrice(price)}{priceSimbol}</span>
                                </div>
                                <AdditionSouces additions={additions}/>
                            </div>
                            <img src={imgUrl}/>
                        </button>
                    )
                })}
                <AllBasketMount/>
            </div>
        </div>
    )
}