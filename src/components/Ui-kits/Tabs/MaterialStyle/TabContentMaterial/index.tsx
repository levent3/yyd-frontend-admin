import { MaterialData } from 'Data/Ui-kits/TabData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const TabContentMaterial = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                MaterialData && MaterialData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        {item.text}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default TabContentMaterial