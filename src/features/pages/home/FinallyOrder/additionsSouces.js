import {Fragment} from 'react';
import { addCommaAllPrice } from '../../../shares/globalSlice/globalSliceLogic';
import { useSelector } from 'react-redux';



export default function AdditionSouces({additions}) {
    const {priceSimbol,plusSimbol} = useSelector((state) => state.globalSlice)

    return (
        <>
            {additions.map((addition,addIndex) => {
                    const {price,selected,selectedCount,name} = addition
                    return (
                        <Fragment key={addIndex}>
                            {selected ? <div className="additionRecept">
                                    <div className="containerForNameAndquantity">
                                        <span className="orderedCount"></span>
                                        <span className='productName'>
                                            <span>{`${selectedCount}x `}</span>{name}
                                        </span>
                                    </div>
                                    <span className={"productPrice"}>
                                        {price ? plusSimbol + " " + addCommaAllPrice(price) + "" + priceSimbol : ""}
                                    </span>
                            </div> : null}
                        </Fragment>
                    )
            })}
        </>
    )
}