import "../../assets/styles/product/product.scss"
import Header from "../../shares/components/header/header"
import ProductContent from "./productContent"
import ProductMenu from "./productMenu"
import SpecialProduct from "./specialProduct/specialProduct"
import { useSelector } from "react-redux"  






export default function Product(params) {
    const {openSpecFoodKey} = useSelector((state) => state.globalSlice)


    return (
        <main className={`productContainer ${openSpecFoodKey ? 'backgroundShadow' : ''}`} style={{overflow:openSpecFoodKey ? "hidden" : "unset"}}>
            <Header/>
            <div className="productContent">
                <ProductMenu/>
                <ProductContent/>
            </div>
            <SpecialProduct/>
        </main>
    )
}