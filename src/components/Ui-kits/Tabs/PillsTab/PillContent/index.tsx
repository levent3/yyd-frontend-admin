import { PillTabData } from 'Data/Ui-kits/TabData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const PillContent = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                PillTabData && PillTabData.map((item, index) => (
                    <TabPane className="fade show" tabId={item.id} key={index}>
                        {item.text}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default PillContent