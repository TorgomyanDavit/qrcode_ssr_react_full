

import { useSelector, useDispatch } from 'react-redux';
import "../../../assets/styles/product/orderedItemSlider.scss";

// import {useNavigate} from 'react-router-dom';
import { sliderClass } from './additionalFunc';
import { closeOrderSlider } from '../../../shares/globalSlice/globalSlice';
import { SliderTimer } from './sliderTimerComponent';
import { useHistory } from 'react-router-dom';


export function OrderItemSlider() {
    const {openorderedSlider} = useSelector((state) => state.globalSlice);
    const {orderSliderButtonText,orderSliderTitleText,orderSliderdescriptionText} = useSelector((state) => state.product);
    const navigate = useHistory();
    const dispatch = useDispatch();

    


    return (
        <div className={sliderClass(openorderedSlider)} onClick={() => {dispatch(closeOrderSlider());navigate.push("/");}}>
            <div className='slider' onClick={(event) => event.stopPropagation()}>
                {openorderedSlider ? <SliderTimer/> : null} 
                <span className='orderTitleSlider'>{orderSliderTitleText}</span>
                <span className='orderDescriptionSlider'>{orderSliderdescriptionText}</span>
                <div className='containerButton'>
                    <button className='orderSliderButton' onClick={() => {dispatch(closeOrderSlider());navigate.push("/");}}>{orderSliderButtonText}</button>
                </div>
            </div>
        </div>
    )
}