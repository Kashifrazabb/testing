import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from '../components/Navbar'

import { findByTestAttr } from '../../utils/ShallowComp'

const setUp = () => {
    const component = shallow(<Navbar />)
    return component
}

describe('Navbar Component', () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', () => {
        const header = findByTestAttr(component, 'navbar')
        expect(header.length).toBe(1)
    })
    it('Should render a logo', () => {
        const logo = findByTestAttr(component, 'logo')
        expect(logo.length).toBe(1)
    })
})