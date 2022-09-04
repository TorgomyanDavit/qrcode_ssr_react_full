import { current } from "@reduxjs/toolkit"
export function splitImgToArray(action) {
    const BASKET = []
    let basketCount = 0
    action.payload.hits.map(({largeImageURL,id}) => {return {url:largeImageURL,id:id}})
    .reduce((aggr,imgObj,index,data) => {
        aggr[basketCount] = imgObj
        if(data.length - 1 === index ) {
            BASKET.push(aggr)
        } else if(basketCount === 5){
            BASKET.push(aggr)
            basketCount = 0
            aggr = []
        } else{
            basketCount++
        }
        return aggr
    },[]);

    return BASKET
}

export function openSliderLogic(state,action) {
    let currentImg = null;
    state.gallerySlider = state.gallerySlider.filter((img) => {
        if(img.id === action.payload) {
            currentImg = img
            return false
        }
        return true
    })
    state.gallerySlider.unshift(currentImg);
    state.SliderKey = true
}

export function closeGallerySliderLogic(state) {
    state.SliderKey = false
}

export function openPaymentPopUpLogic(state) {
    if(state.paymentMethodKey === false) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }
    state.paymentMethodKey = !state.paymentMethodKey
}

export function chengpaymenMethodLogic(state,action) {
    state.paymenMethodData = state.paymenMethodData.map((val) => {
      if(val.id === action.payload) {
        return {...val,selected:true}
      }
      return {...val,selected:false}
    })
}

export function openRaitPopUpLogic(state,action) {
    if(state.rateKey === true) {
        document.body.style.overflow = "unset";
    }
    state.paymentMethodKey = false
    state.rateKey = !state.rateKey
    state.RateData = state.RateData.map((star) => ({...star,selected:false}))
}

export function rateRestourantLogic(state,action) { 
    const rateCount = action.payload
    state.RateData = state.RateData.map((star,dataIndex) => {
        if(dataIndex <= rateCount) {
            return {...star,selected:true}
        }
        return {...star,selected:false}
    })
}

export function homeScrollTopLogic(state,action) { 
    state.homeScrollbutton = action.payload
}