import React from 'react';
import renderer from 'react-test-renderer';
import Hero from './';
// import data from './Hero.json';

describe('<Hero />', () => {
    it('Renders an empty Hero', () => {
        const componentJson = renderer
            .create(<Hero />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders Hero with data', () => {
        const componentJson = renderer
            .create(<Hero {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
