import { useSelector,useDispatch } from "react-redux";
// import { ShimmerBadge,ShimmerTitle } from "shimmer-react";
import { useRef, useEffect } from 'react';
import { 
    GenerateAllCaseImg_index6_OR_toTasteImg_coun6,
    GenerateAllCaseWhenImg_index3And_Img_countNotEquaL6,
    GenerateAllCaseWhenIndex0_OR_index5_And_CountImg6, 
    GenerateSituationWhenImgCount1or2 
} from "./galleryPosition";
import { GaaleryGroupDiv } from "../additionFunction";



export function Gallery() {
    const { galeryState,shimmerLoading} = useSelector((state) => state.home);
    const dispatch = useDispatch()

        
       


    // <ShimmerTitle line={2} gap={10} variant="primary" />
    return (
        // shimmerLoading ? <div className="shimmerLoading"><ShimmerTitle line={8} gap={10} variant="secondary" /></div> : 
        <div className={`galeryContainer`}>
            {galeryState.map((Group_Img,Group_index) => {
                const Img_count = Group_Img.length
                const situationWhenImgCount1or2 = Img_count < 3

                return (
                    <div key={Group_index} className={GaaleryGroupDiv(Img_count)}>
                        {Group_Img.map((img,Img_index) => {
                            const allCaseWhenIndex0_OR_index5AndCountImg6 = Img_index === 0 || (Img_index === 5  && Img_count === 6)
                            const allCaseWhenImg_index3And_Img_countNotEquaL6 = Img_index === 3 && Img_count !== 6
                            const stepSix = (Img_index === 4 && Img_count === 6)
                            const allCaseImg_index6_OR_toՏasteImg_coun6 = Img_index === 1 || stepSix 
                            const classImg = `imgPositionWhenImgCount_bigOrEqual${Img_count >= 3 ? 3 : Img_count}andPosition${Img_index}`
                            const ImageURL = img.url
                            const imgId = img.id

                            if(situationWhenImgCount1or2) {
                                return GenerateSituationWhenImgCount1or2(Img_index,ImageURL,dispatch,imgId)
                            } 
                            else {
                                if(allCaseWhenIndex0_OR_index5AndCountImg6 ) {
                                    return GenerateAllCaseWhenIndex0_OR_index5_And_CountImg6(Img_index,classImg,ImageURL,dispatch,imgId)
                                } 

                                else if(allCaseImg_index6_OR_toՏasteImg_coun6) {
                                    return GenerateAllCaseImg_index6_OR_toTasteImg_coun6(classImg,stepSix,Group_Img,Img_index,ImageURL,dispatch,imgId)
                                }

                                else if(allCaseWhenImg_index3And_Img_countNotEquaL6) {
                                    return GenerateAllCaseWhenImg_index3And_Img_countNotEquaL6(Img_count,Img_index,ImageURL,Group_Img,dispatch,imgId)
                                }
                            } 
                        })}
                    </div>
                )
            })}
        </div>
    )
}