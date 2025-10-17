import { VerticalTabData } from 'Data/Ui-kits/TabData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const VerticalContent = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                VerticalTabData && VerticalTabData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        {item.text}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default VerticalContent