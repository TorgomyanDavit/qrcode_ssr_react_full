
import { useSelector } from 'react-redux';
import { showCountedMount, countedOrdersBill } from '../additionFunction';
import { addCommaAllPrice } from '../../../shares/globalSlice/globalSliceLogic';




export default function AllBasketMount() {
    const {subtotalText,discountText,totaltext} = useSelector((state) => state.product)
    const {priceSimbol,orderOpenKey,Orders,percent} = useSelector((state) => state.globalSlice)
    const Bill = countedOrdersBill(orderOpenKey,Orders)

    return (
        <>
            {showCountedMount(orderOpenKey) ? <div className="countedMount">
                <div className="priceAndDiscount">
                    <span>{subtotalText}</span>
                        <span>{addCommaAllPrice(Bill)}{priceSimbol}</span>
                    </div>

                    <div className="priceAndDiscount">
                        <span>{discountText} {`( ${percent}% )`}</span>
                        <span>{addCommaAllPrice(percent)}{priceSimbol}</span>
                    </div>

                    <div className="Total">
                        <span>{totaltext}</span>
                        <span>{addCommaAllPrice(Bill)}{priceSimbol}</span>
                    </div>
                </div> : null}
        </>
    )
}