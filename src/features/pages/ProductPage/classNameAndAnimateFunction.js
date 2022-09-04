export function animateSpecialProductMain(openSpecFoodKey) {
    return {
        animationName:openSpecFoodKey === null ? "" : 
        openSpecFoodKey ? "positionSpecialProduc" : "positionSpecialProductoDown"
    }
}

export function styleForBottomPadding(removeKey) {
    return {paddingBottom:removeKey ? 52 : 10}
}

export function styleForcheckBox_Item_BottomPadding(removeKey) {
    return {paddingBottom:removeKey ? 117 : 82}
}

export function classOpacitySpecialProductMain(openSpecFoodKey) {
    return openSpecFoodKey === null ? "" : 
    openSpecFoodKey ? "opacityClass" : ""
}

export function styleProductPrice(productDiscount) {
    return `productPrice ${productDiscount ? 'colorRed' : ''}`
}

export function styleMenuSearchBar(openSearchBar) {
    return {gap:openSearchBar ? "0px" : "10px"}
}

export function classMenuBar(openSearchBar) {
    return  `menuBar ${openSearchBar ? 'menubarAdded' : ''}`
}

export function classBarAndTitle(openSearchBar) {
    return  `barAndTitle ${openSearchBar ? `barAndTitleClose` : ''}`
}

export function classImgTransform(openPopUpKategory) {
    return   `${openPopUpKategory ? 'imgTransform' : ''} `
}

export function stylePopUpKategory(openPopUpKategory) {
    return   {marginTop:openPopUpKategory ? "10px" : "0px"}
}

export function animatePoUpKategory(openPopUpKategory) {
    return  {animationName:openPopUpKategory ? `kategoryName` : `initialAnimatekategoryName`}
}

export function animateBasketButton(addBasketkey) {
    return  {animationName:addBasketkey ? `basketButton` : ``}
}

export function classSearchInput(openSearchBar) {
    return   `searchInput ${openSearchBar ?  'searchInputAnimate' : ''}`
}

export function classKategoriButton(itemSelected,openSearchBar) {
    return  `kategoriButton ${itemSelected? 'selected' : ''} ${ openSearchBar ? 'closemenuKategori' : ''}`
}

export function additionsType(permisionCount) {
    return  permisionCount === 1 ?  "radio" : "checkbox"
}