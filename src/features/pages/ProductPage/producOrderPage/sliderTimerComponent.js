import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SettingsOrderSlider } from './additionalFunc.js';
import Slider from "react-slick";



export function SliderTimer() {
    const {sliderImg} = useSelector((state) => state.globalSlice)

    return (
        <div className='imgContainer'>
             <Slider {...SettingsOrderSlider()}  >
                {sliderImg.map((url,index) => (
                    <div key={index} className='sliderItem'><img src={url} alt="sliderImg"/></div>
                ))}
            </Slider>
        </div>
    )
}
