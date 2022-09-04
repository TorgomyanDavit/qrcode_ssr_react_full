

export function styletitleMargin(orderOpenKey) {
    return {marginTop:orderOpenKey ? "150px" : 0}
}

export function sliderClass(openorderedSlider) {
    return `sliderMain ${openorderedSlider ? 'sliderMainShow' : ''}`
}


export function SettingsOrderSlider() {
    return {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1000
        // variableWidth: true,
    };
}
