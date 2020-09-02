import React from 'react'
import { shallow } from 'enzyme'
import { Headline } from '../components/headline'

import { findByTestAttr } from '../../utils/ShallowComp'

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />)
    return component
}

describe('Headline Component', () => {

    describe('Have Props', () => {

        let component;
        beforeEach(() => {
            component = setUp({
                title: 'Testing',
                desc: 'Testing'
            })
        })

        it('Should render without Errors', () => {
            const headline = findByTestAttr(component, 'headline')
            expect(headline.length).toBe(1)
        })

        it('Should render the headline title', () => {
            const headlineTitle = findByTestAttr(component, 'headlineTitle')
            expect(headlineTitle.length).toBe(1)
        })

        it('Should render the headline desc', () => {
            const headlineDesc = findByTestAttr(component, 'headlineDesc')
            expect(headlineDesc.length).toBe(1)
        })


    })

    describe('Don\'t Have Props', () => {

        let component;
        beforeEach(() => {
            component = setUp()
        })

        it('Should not render', () => {
            const headlineTitle = findByTestAttr(component, 'headlineTitle')
            expect(headlineTitle.length).toBe(0)
        })

    })
})