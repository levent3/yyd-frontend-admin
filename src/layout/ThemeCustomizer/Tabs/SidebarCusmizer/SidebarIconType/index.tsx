import React, { useContext, useEffect } from 'react'
import StrokeIcon from './StrokeIcon'
import FillIcon from './FillIcon'
import CustomizerContext from 'helper/Customizer';
import ConfigDB from 'config/ThemeConfig';
import { Sidebar_Icon } from 'utils/Constant';

const SidebarIconType = () => {
    const { addSidebarIconType } = useContext(CustomizerContext);
    const sideBarIconType = ConfigDB.data.settings.sidebar.iconType;

    const handleSideBarIconType = (type: string) => {
        addSidebarIconType(type);
    };

    return (
        <div>
            <h6>{Sidebar_Icon}</h6>
            <ul className='sidebar-type layout-grid flex-row'>
                <StrokeIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType} />
                <FillIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType} />
            </ul>
        </div>
    )
}

export default SidebarIconType