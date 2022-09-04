
import { useSelector,useDispatch } from 'react-redux';
import { checkSouces,increaseadditionsExtra,decreaseadditionsExtra } from '../../../shares/globalSlice/globalSlice';
import { addCommaAllPrice } from '../../../shares/globalSlice/globalSliceLogic';
import { additionsType } from '../classNameAndAnimateFunction';



export function ExtraAddition() {
    const {Food,priceSimbol,plusSimbol} = useSelector((state) => state.globalSlice);
    const {additionsExtra} = Food || {};
    const dispatch = useDispatch()


    return (
        <>
            {
                additionsExtra ? 
                additionsExtra.map((additionsExtra,extraIndex) => {
                    const {name,maxCountText,maxCount,extraSouces,id} = additionsExtra

                    
                    return (
                        <div key={extraIndex} className="extraExtra">
                            <div className="titleAndCountExtra">
                                <span className="extraTitle">{name}</span>
                                <span className="maxChoice">{maxCountText}{maxCount}</span>
                            </div>
                            {
                                extraSouces.map((souces,soucesIndex) => {
                                    const {name,originalPrice,selected,price,selectedCount} = souces
                                    
                                    return  (
                                        <div key={soucesIndex} className="item_Additions">
                                            <label className="containerCheckBox">
                                                <label className={`${additionsType(maxCount)} ${selected ? 'selected' + additionsType(maxCount) : ''}`}>
                                                <input type={"checkbox"} name="radio" onChange={(e) => {
                                                dispatch(checkSouces({id:soucesIndex,extraIndex:extraIndex}))
                                            }}/>
                                                </label>
                                                <span className="additionsName">{name}</span>
                                            </label>
                                            <div className="containerPlusPinusAndPrice">
                                                {
                                                    selected && (souces.maxCount > 1) ? 
                                                    <div className="countPlusMinusContainer">
                                                        <button onClick={() => dispatch(decreaseadditionsExtra({id,soucesIndex}))}>-</button>
                                                        <span>{selectedCount}</span>
                                                        <button onClick={() => dispatch(increaseadditionsExtra({id,soucesIndex}))}><span>+</span></button>
                                                    </div> : null
                                                }
                                                <span className="receptPrice">{ price ?  `${plusSimbol}  ${addCommaAllPrice(originalPrice)}${priceSimbol}` : null}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }) : null
            }
        </>
    )
}