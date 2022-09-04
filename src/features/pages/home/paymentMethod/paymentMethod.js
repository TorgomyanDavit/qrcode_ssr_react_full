import "../../../assets/styles/home/paymentMethod.scss";
import { useSelector, useDispatch } from 'react-redux';
import { chengpaymenMethod, openPaymentPopUp, openRaitPopUp } from "../homeSlice";
import { selectedLangBorderColor, visiblityPaymentMethodPopUp } from './../additionFunction';
import RateMethod from "./ratePopUp";




export default function PaymentMethod() {
    const {paymentMethodKey,paymentTitle,paymenMethodData,paymentChooseButton,rateKey} = useSelector((state) => state.home);
    const dispatch = useDispatch()


    return (
        <>        
        {rateKey ? <RateMethod/> : 
            <div className="languangeContainer" style={visiblityPaymentMethodPopUp(paymentMethodKey)} onClick={() => dispatch(openPaymentPopUp())}>
                <div className={`langPopUP langPaymentPopUp`} onClick={(e) => e.stopPropagation()}>
                    <span className="langTitle">{paymentTitle}</span>
                    <div className="langButtonContainer">
                        {paymenMethodData.map((val) => {
                            const {name,selected,id} = val
                            return (
                                <button key={val.id} style={selectedLangBorderColor(selected)} onClick={(e) => dispatch(chengpaymenMethod(id))}>{name}</button>
                            )
                        })}
                    </div>
                    <button className="langCloseButton" onClick={() => {
                        dispatch(openRaitPopUp())
                    }}>{paymentChooseButton}</button>
                </div>
            </div>}
        </>
    )
}



