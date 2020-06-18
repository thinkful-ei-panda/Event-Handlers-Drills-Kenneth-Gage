import React from 'react';

class Tabs extends React.Component {

    static defaultProps = { tabs: [] ,
                            content : ''   
                     };



    


    render() {
        const buttons = this.props.tabs.map((tab,i) =>
            <button key={i}>{tab.name}</button>
        )
        const currentTab =this.props.tabs[0];
        return (
            <div>
                {buttons}
                {
                    this.props.tabs.length ? 
                    <div className="content">
                        {currentTab.content}
                    </div> : '' 
                }
            </div>
        )
    }
}

export default Tabs;