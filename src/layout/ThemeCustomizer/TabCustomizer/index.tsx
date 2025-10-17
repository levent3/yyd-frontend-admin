import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import TabHeader from './TabHeader';
import CheckLayout from '../Tabs/CheckLayout';
import SidebarCusmizer from '../Tabs/SidebarCusmizer';

type TabCustomizerType = {
    callbackNav: (test: string, open: boolean) => void;
    selected: string
}

const TabCustomizer = ({ callbackNav, selected }: TabCustomizerType) => {

    return (
        <TabContent activeTab={selected}>
            <TabHeader callbackNav={callbackNav} />
            <div className="customizer-body custom-scrollbar tab-content">
                <TabPane tabId="check-layout">
                    <CheckLayout />
                </TabPane>
                <TabPane tabId="sidebar-type">
                    <SidebarCusmizer />
                </TabPane>
            </div>
        </TabContent>
    )
}

export default TabCustomizer