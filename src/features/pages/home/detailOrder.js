import { useDispatch, useSelector } from "react-redux";
import { openorderDetail } from "../../shares/globalSlice/globalSlice";
import { addCommaAllPrice } from "../../shares/globalSlice/globalSliceLogic";
import { openPaymentPopUp } from "./homeSlice";



export function DetailOrder() {
    const {
        orderItemText,detailOrderTotalText,payOnlineText,
        viewDetailButtonText,AskForBill
    } = useSelector((state) => state.home);
    const { Orders,priceSimbol } = useSelector((state) => state.globalSlice);
    const dispatch = useDispatch()


    return (
        <>
            {
                Orders.length ? <div className="orders">
                    {
                        Orders.map((order,index) => {
                            const {countOrders,Bill} = order
                            return (
                                <div key={index} className="ordersItem">
                                    <div className="detailOrders">
                                        <span>{countOrders} {orderItemText}</span>
                                        <span>{detailOrderTotalText} {addCommaAllPrice(Bill)}{priceSimbol}</span>
                                        <button className="viewDetailButton" onClick={() => dispatch(openorderDetail(index))}>
                                        {viewDetailButtonText}</button>
                                    </div>
                                    <div className="billButton">
                                        <button className="payOnline" onClick={() => {dispatch(openPaymentPopUp())}}>{payOnlineText}</button>
                                        <button className="AskForBill">{AskForBill}</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> : null
            }
        </>
    )
}