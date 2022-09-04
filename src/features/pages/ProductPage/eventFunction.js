import { changeSelectedKategoriType, scrollUnable } from "../../shares/globalSlice/globalSlice";
import { current } from '@reduxjs/toolkit';
export function searchKategory(event) {
    console.log(event.target.value);
}

export function kategoriSelect(dispatch,index) {
    dispatch(scrollUnable());
    dispatch(changeSelectedKategoriType({id:index}));
}

export function decreaseGuestLogic(state,action) {
    const {guestCount} = state
    if(guestCount > 1 ) {
        state.guestCount -= 1
    }
}

export function incresaeGuestLogic(state,action) {
    state.guestCount += 1
}