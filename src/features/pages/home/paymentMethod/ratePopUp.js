import "../../../assets/styles/home/paymentMethod.scss";
import { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../../../assets/styles/home/rate.scss"
import { setOverflowHidden } from "../additionFunction";
import { openRaitPopUp, rateRestourant } from "../homeSlice";




export default function RateMethod() {
    const {rateTitle,RateData,paymentChooseButton,rateDescription,placeholderRate,notNowRateFeetback} = useSelector((state) => state.home);
    const dispatch = useDispatch()
    const textRef = useRef(null)
    return (
        <div className={`languangeContainer RateMainContainer`} onClick={() => dispatch(openRaitPopUp())}>
            <div className={`langPopUP rateContainer`} onClick={(e) => e.stopPropagation()}>
                <span className="langTitle">{rateTitle}</span>
                <span className="rateDescription">{rateDescription}</span>
                <div className="langButtonContainer">
                    {RateData.map((val,index) => {
                        const {selected} = val
                        return (
                            <button key={val.id} onClick={() => dispatch(rateRestourant(index))}>
                                <i className={`icon-Polygon-1 ${selected ? 'starColor' : ''}`}></i>
                            </button>
                        )
                    })}
                </div>
                <textarea ref={textRef} placeholder={placeholderRate} name="comment" form="usrform" onChange={(e) => textRef.current = e.target.value}></textarea>
                <button className="RateFeetback" onClick={() => dispatch(openRaitPopUp())}>{paymentChooseButton}</button>   
                <button className="notNowRateFeetback" onClick={() => dispatch(openRaitPopUp())}>{notNowRateFeetback}</button>
            </div>
        </div>
    )
}

// onClick={(e) => dispatch(chengpaymenMethod(id))}
// style={selectStar(selected)}

// onClick={() => dispatch(openPaymentPopUp())}