import React from 'react';

class Tabs extends React.Component {

    static defaultProps = { tabs: [] ,
                            content : ''   
                     };

/****************************************************/
/* start back at "Making the buttons work" on mod 11*/
/****************************************************/

   renderButtons = () => this.props.tabs.map( (tab,i) => ( <button key={i}>{tab.name}</button> ) )
   
   renderContent = () => { 
       const currentTab =this.props.tabs[0];
                   return(
                      <div className="content">
                        {currentTab.content}
                    </div>
                   )
                    
   }
    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.props.tabs.length ? this.renderContent() : ''}
            </div>
        )
    }
}

export default Tabs;