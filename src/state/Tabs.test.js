import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';

describe(`Tabs Component` , () => {
    it ('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Tabs />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    const tabsProp = [
        {
        name : 'Steve Jobs',
        content : 'why'
    },
    {
        name : 'died from ',
        content : 'do i '
    },
    {
        name : "ligma",
        content : 'have to do this so much '
    }
        ]
    it( 'renders the first tab by default', () => {
        const tree = renderer.create(<Tabs tabs={tabsProp}/>).toJSON( )
        expect(tree).toMatchSnapshot()
    })

})