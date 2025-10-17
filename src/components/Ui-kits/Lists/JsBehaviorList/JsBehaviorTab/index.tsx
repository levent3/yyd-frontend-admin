import { JsBehaviorListData } from 'Data/Ui-kits/ListData'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const JsBehaviorTab = ({ tabId }: { tabId: string }) => {
    return (
        <TabContent activeTab={tabId}>
            {
                JsBehaviorListData && JsBehaviorListData.map((item, index) => (
                    <TabPane className={item.class} tabId={item.id} key={index}>
                        {item.htmlText}
                    </TabPane>
                ))
            }
        </TabContent>
    )
}

export default JsBehaviorTab