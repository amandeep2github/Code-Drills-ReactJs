import {useState} from 'react'
import './style.css';
import Tab from '../TabButton/index';
import TabContent from '../TabContent/index';

const Header = () => {

    const [activeTab, setActiveTab] = useState();

    const tabClick = (e) => {
        console.log('Tab clicked', e.target.id);
        setActiveTab(e.target.id);
    }

    return (
        <>

        <div className="tab-header">
            <Tab id="Tab1" name="Tab1" activeTab={activeTab} tabClick={tabClick}/>
            <Tab id="Tab2" name="Tab2" activeTab={activeTab} tabClick={tabClick}/>
            <Tab id="Tab3" name="Tab3" activeTab={activeTab} tabClick={tabClick}/>
        </div>
        <TabContent id="Tab1Content" activeTab={activeTab} content="Tab 1 Content"/>
        <TabContent id="Tab2Content" activeTab={activeTab} content="Tab 2 Content"/>
        <TabContent id="Tab3Content" activeTab={activeTab} content="Tab 3 Content"/>
        </>
    )

}

export default Header;