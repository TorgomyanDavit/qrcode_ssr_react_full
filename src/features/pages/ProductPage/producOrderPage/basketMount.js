
import { useSelector } from 'react-redux';
import { addCommaAllPrice } from '../../../shares/globalSlice/globalSliceLogic';



export function BasketMounth() {
    const {orderTitle,subtotalText,discountText,totaltext} = useSelector((state) => state.product)
    const {basket,priceSimbol,plusSimbol,allOrderBill,percent,openSpecFoodKey} = useSelector((state) => state.globalSlice)
    return (
        <div className="countedMount">
            <div className="priceAndDiscount">
                <span>{subtotalText}</span>
                <span>{addCommaAllPrice(allOrderBill)}{priceSimbol}</span>
            </div>

            <div className="priceAndDiscount">
                <span>{discountText} {`( ${percent}% )`}</span>
                <span>{addCommaAllPrice(percent)}{priceSimbol}</span>
            </div>

            <div className="Total">
                <span>{totaltext}</span>
                <span>{addCommaAllPrice(allOrderBill)}{priceSimbol}</span>
            </div>
        </div>
    )
}