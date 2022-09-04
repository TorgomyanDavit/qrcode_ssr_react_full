import "../../../constantsStyle/language.scss";
import { useSelector, useDispatch } from 'react-redux';
// import { visiblitylangPopUp } from './../../../../pages/home/additionFunction';
import { selectedLangBorderColor, visiblitylangPopUp } from "../../../constantsVariable/additionFunction";
import { chengLanguage, openLanguagePopUp } from "../../../globalSlice/globalSlice";



export default function Language() {
    const {languagePopUpKey,langTitle,languageData} = useSelector((state) => state.globalSlice);
    const dispatch = useDispatch()
    return (
        <div className="languangeContainer" onClick={() => dispatch(openLanguagePopUp())} style={visiblitylangPopUp(languagePopUpKey)}>
            <div className="langPopUP" onClick={(e) => e.stopPropagation()}>
                <span className="langTitle">{langTitle}</span>
                <div className="langButtonContainer">
                   {languageData.map((val,index) => {
                        const {name,imgUrl,selected,id} = val
                        return (
                            <button key={val.id} style={selectedLangBorderColor(selected)} onClick={(e) => dispatch(chengLanguage(id))}>
                                <span className="imgContainer"><img src={imgUrl} alt="langImg"/></span>
                                <span className="buttonName">{name}</span>
                            </button>
                        )
                   })}
                </div>
                <button className="langCloseButton" onClick={() => dispatch(openLanguagePopUp())}>Choose</button>
            </div>
        </div>
    )
}