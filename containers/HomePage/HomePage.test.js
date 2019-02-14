import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from './';
// import data from './HomePage.json';

describe('<HomePage />', () => {
    it('Renders an empty HomePage', () => {
        const componentJson = renderer
            .create(<HomePage />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders HomePage with data', () => {
        const componentJson = renderer
            .create(<HomePage {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
