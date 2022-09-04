// import { openSlider } from "../homeSlice"

import { openSlider } from "../homeSlice"

export function GenerateSituationWhenImgCount1or2(Img_index,ImageURL,dispatch,imgID) {
    return <img onClick={() => dispatch(openSlider(imgID))} className="imginitial" key={Img_index + 1} src={ImageURL}/>
}

export function GenerateAllCaseWhenIndex0_OR_index5_And_CountImg6(Img_index,classImg,ImageURL,dispatch,imgID) {
    return <div key={Img_index} className={classImg}>
        <img onClick={() => dispatch(openSlider(imgID))} className="imginitial" src={ImageURL}/>
    </div>
}

export function GenerateAllCaseImg_index6_OR_toTasteImg_coun6(classImg,stepSix,Group_Img,Img_index,ImageURL,dispatch,imgID) {
    const currentImgId = stepSix ? Group_Img[Img_index - 1].id : imgID
    const currentImgId2 = stepSix ? imgID : Group_Img[Img_index + 1].id
    return <div key={Img_index} className={classImg}>
        <img onClick={() => dispatch(openSlider(currentImgId))} className="imginitial" src={stepSix ? Group_Img[Img_index - 1].url : ImageURL}/>
        <img onClick={() => dispatch(openSlider(currentImgId2))} className="imginitial" src={stepSix ? ImageURL : Group_Img[Img_index + 1].url}/>
    </div>
}

export function GenerateAllCaseWhenImg_index3And_Img_countNotEquaL6(Img_count,Img_index,ImageURL,Group_Img,dispatch,imgID) {
    return <div key={Img_index} className={`imgPositionWhenImgCount${Img_count}andPosition${Img_index}`}>
    <img onClick={() => dispatch(openSlider(imgID))} className="imginitial" src={ImageURL}/>
    {Img_count === 5 ? <img onClick={() => dispatch(openSlider(Group_Img[Img_index + 1].id))} className="imginitial" src={Group_Img[Img_index + 1].url}/> : null}
</div>
}