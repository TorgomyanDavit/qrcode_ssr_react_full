import { useRef } from "react"
import { useSelector,useDispatch } from "react-redux"
import { openSpecFood } from "../../shares/globalSlice/globalSlice"
import { addCommaAllPrice } from "../../shares/globalSlice/globalSliceLogic"
import { styleProductPrice } from "./classNameAndAnimateFunction"
import { ScrollHook, SelectKategoriOnTimeScrollHook } from "./Hook"


export default function ProductContent()  {
    const {StateMenu,priceSimbol,scrollIngIndex,scrollOn} = useSelector((state) => state.globalSlice)
    const scrollRef = useRef([])
    const dispatch = useDispatch()
    const mainRef = useRef(null)
    ScrollHook(scrollIngIndex,scrollRef,mainRef)


    return (
        <main className="product" ref={mainRef} onScroll={(event) => {
            SelectKategoriOnTimeScrollHook(event,scrollRef,dispatch,scrollIngIndex,scrollOn);
        }}>
            {
                StateMenu.map((menu) => {
                    if(menu.selected) {
                        return menu.kategoriMenu.map((kategori,kategoriIndex) => {
                            return (
                                <div ref={(element) => (scrollRef.current[kategoriIndex] = element)} key={kategoriIndex} className="kategori">
                                    <div className='kategoriTitle'>
                                        <span className='kategoriName'>{kategori.name}</span>
                                        {kategori.activeTime && <span className='kategoriActiveTime'>{kategori.activeTime}</span>}
                                    </div>

                                    <div className="productWrapper">
                                        {
                                            kategori.product.map((product,index) => {
                                                const {preOrdered,name,description,discount,price,imgUrl} = product

                                                return (
                                                    <button key={index} className="productItem" onClick={() => dispatch(openSpecFood({goods:{...product,index,kategoriIndex,menuId:menu.id}}))}>
                                                        <div className="Price_Name_Description">
                                                            <div className="containerForNameAndquantity">
                                                                {preOrdered ? <span className="orderedCount">{`${preOrdered} x`}</span> : null} 
                                                                <span className='productName'>{name}</span>
                                                            </div>
                                                            <span className='productDescription'>{description}</span>
                                                            <div className='productPriceContainer'>
                                                                <span className={styleProductPrice(discount)}>{addCommaAllPrice(price)}{priceSimbol}</span>
                                                                {discount  ? <span className='productPriceDiscount'>{addCommaAllPrice(discount)}{priceSimbol}</span> : null}
                                                            </div>
                                                        </div>
                                                        <img src={imgUrl}/>
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                })
            }
        </main>
    )
}

// .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
