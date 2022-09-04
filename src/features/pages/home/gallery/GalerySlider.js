import Slider from "react-slick";
import { useSelector,useDispatch } from 'react-redux';
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss"; 
import { Settings, sliderPosition } from "../additionFunction";
import { closeGallerySlider } from "../homeSlice";
import { HookForGallerry } from "../hook";


export function GalerySlider() {
    const { gallerySlider } = useSelector((state) => state.home);
    const dispatch = useDispatch()
    HookForGallerry()

    

    return (
        <div className="galerySlider" style={sliderPosition()} onClick={() => dispatch(closeGallerySlider())}>
            <Slider {...Settings()}  >
                {gallerySlider.map(({largeImageURL},index) => (
                    <div key={index} className='sliderItem'><img src={largeImageURL} alt="sliderImg"/></div>
                ))}
            </Slider>
        </div>
    )
}