export function getHomedetailLogic(state,action) {
    console.log("getHomeDetails  -> fulfiled",action);
    const {mainCover,logo,name,description,id,qrBranchMenu,covers} = action.payload.data
    state.mainCover = mainCover
    state.logoUrl = logo
    state.descriptionName = name
    state.descriptionContent = description
    state.qrBranchMenu = qrBranchMenu.map((val,i) => ({...val,selected:i === 0 ? true : false}));


    // galery
    // state.shimmerLoading = false
    // state.galeryState = splitImgToArray(action)
    state.gallerySlider = covers
}