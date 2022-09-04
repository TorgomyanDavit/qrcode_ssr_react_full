import {  useState } from "react"
import { useSelector,useDispatch } from "react-redux"  
import { selectMenu } from "../../shares/globalSlice/globalSlice"
import { selectedMenu } from "../../shares/globalSlice/globalSliceLogic"
import { 
    animatePoUpKategory, classBarAndTitle, classImgTransform,
    classKategoriButton,
    classMenuBar, classSearchInput, styleMenuSearchBar, 
    stylePopUpKategory 
} from "./classNameAndAnimateFunction"
import { kategoriSelect, searchKategory } from "./eventFunction"





export default function ProductMenu() {
    // dev-dependencies
    const dispatch = useDispatch()

    // global state
    const {searchPlaceholder} = useSelector((state) => state.product)
    const {StateMenu} = useSelector((state) => state.globalSlice)

    // local state
    const [openSearchBar,setOpenSearch] = useState(false)
    const [openPopUpKategory,setopenPopUpKategory] = useState(false)



    return (
        <div className="productMenu">
            <div className="menu_Search_Bar" style={styleMenuSearchBar(openSearchBar)}>
                <div className={classMenuBar(openSearchBar)}>
                   
                    <div className={classBarAndTitle(openSearchBar)}>
                        <button className="menuBarTitle" onClick={() => setopenPopUpKategory(!openPopUpKategory)}>
                            {selectedMenu(StateMenu).name} 
                            <img className={classImgTransform(openPopUpKategory)} src="/images/product/menuBarIcon.png" alt="menuBarIcon"/>
                        </button>

                        <div className='PopUpKategory' disabled={openPopUpKategory} style={stylePopUpKategory(openPopUpKategory)}>
                            {StateMenu.map((kategori,index) => {
                                if(kategori.selected !== true) {
                                    return <button key={index} className='kategoryNameInitial' style={animatePoUpKategory(openPopUpKategory)} onClick={() => {
                                        dispatch(selectMenu({id:index}));
                                        setopenPopUpKategory(!openPopUpKategory)
                                    }}>{kategori.name}</button>
                                }
                            })}
                        </div>
                    </div>
                    
                    <button className={`searchIcon`} disabled={openPopUpKategory} onClick={() => setOpenSearch(!openSearchBar)}>
                        <i className='icon-ic_search'></i>
                    </button>
                    
                    <input className={classSearchInput(openSearchBar)} type="text" placeholder={searchPlaceholder} onChange={searchKategory} />
                </div>

                <div className='menuKategori'>
                    {selectedMenu(StateMenu).kategoriMenu.map((item,index) => {
                        return <button key={index} 
                            onClick={() => kategoriSelect(dispatch,index)}
                            className={classKategoriButton(item.selected,openSearchBar)}
                        >
                            {item.name}
                        </button>
                    })}
                </div>
            </div>
        </div>
    )
}