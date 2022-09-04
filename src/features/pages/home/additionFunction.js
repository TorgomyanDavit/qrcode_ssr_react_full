export function classnameOverflowHiden(orderOpenKey) {
    return typeof(orderOpenKey) === 'number' ? 'overflowHiden' : ''
}

export function classnameorderActive(orderOpenKey) {
    return  typeof(orderOpenKey) === "number" ? 'orderActive' : ''
}

export function showCountedMount(orderOpenKey) {
    return  typeof(orderOpenKey) === "number" 
}

export function OrderDetail(orderOpenKey,Orders) {
    return (typeof(orderOpenKey) === "number" ? Orders[orderOpenKey].allArderDetail : [])
}

export function countedOrdersBill(indexOrder,Orders) {
    if(typeof(indexOrder) === "number") {
        return Orders[indexOrder].allArderDetail.reduce((aggr,order) => {
            order.additions.forEach((souces) => {
            const {price,selected} = souces
                if(selected) { aggr += price }
            })
            return aggr += order.price
        },0)
    } else {
        return 0
    }
}

export function Settings() {
    return {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // variableWidth: true,
    };
}

export function sliderPosition() {
    return { top:window.scrollY + "px" }
}

export function GaaleryGroupDiv(Img_count) {
    return `imgPositionWhenImgCount${Img_count >= 3 ? "_bigOrEqualThree" : Img_count}`
}

export function selectedLangBorderColor(selected) {
    return {border:selected ? "3px solid black" : "1px solid #8F93A4"}
}

export function visiblityPaymentMethodPopUp(PopUpKey) {
    return {visibility:PopUpKey ? "visible" : "hidden"}
}