import { BorderData } from 'Data/Ui-kits/TabData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const TabComponent = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                BorderData && BorderData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        {item.text}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default TabComponent