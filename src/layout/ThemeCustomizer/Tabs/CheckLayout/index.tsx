import React, { useContext } from 'react'
import { CheckLayoutData } from '../../../../../Data/CustomizerData';
import { ImgPath } from '../../../../../utils/Constant';
import CustomizerContext from 'helper/Customizer';

const CheckLayout = () => {
    const { setLayoutName } = useContext(CustomizerContext);

    const handlePageLayputs = (type: string) => {
        setLayoutName(type.toLowerCase().replace(' ', ''));
    };
    return (
        <ul className='sidebar-type layout-grid layout-types'>
            {
                CheckLayoutData && CheckLayoutData.map((item, index) => (
                    <li key={index} data-attr={item.attr} className={`${item.class ? item.class : ''}`} onClick={() => { handlePageLayputs(item.title) }}>
                        <div className='layout-img'>
                            <img src={`${ImgPath}${item.image}`} className='img-fluid' alt='layout Type' />
                            <h6>{item.title}</h6>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default CheckLayout