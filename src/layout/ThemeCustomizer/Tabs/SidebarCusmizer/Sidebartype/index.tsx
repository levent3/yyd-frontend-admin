import React, { useContext } from 'react'
import Vertical from './Vertical'
import Horizontal from './Horizontal';
import CustomizerContext from 'helper/Customizer';
import { Sidebar_Type } from 'utils/Constant';

const SidebarType = () => {
    const { addSidebarLayouts, layout } = useContext(CustomizerContext);

    const handleSidebarType = (type: string) => {
        addSidebarLayouts(type);
    };
    return (
        <div>
            <h6>{Sidebar_Type}</h6>
            <ul className='sidebar-type layout-grid'>
                <Vertical handleSidebarType={handleSidebarType} layout={layout} />
                <Horizontal handleSidebarType={handleSidebarType} layout={layout} />
            </ul>
        </div>
    )
}

export default SidebarType