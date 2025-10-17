
import { LanguageData } from 'Data/HeaderData';
import React, { Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next';

type listStateType = {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
}

// get selected props for change language type when change language type changes in language component
//  get setSelected props for set new language  

const LanguageList = ({ selected, setSelected }: listStateType) => {
    const { i18n } = useTranslation(); 
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelected(lng);
    };
    return (
        <div className={`more_lang ${selected ? 'active' : ''}`}>
            {
                LanguageData && LanguageData.map((item, index) => (
                    <div key={index} className='lang' onClick={() => changeLanguage(item.shortName)}>
                        <i className={item.iconClass}></i>
                        <span className='lang-txt'>{item.name}
                            {item.tag && <span> {item.tag}</span>}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default LanguageList