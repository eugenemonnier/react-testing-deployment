import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Counter from './counter'

describe('Counter component', () => {
  test('should be alive at app start', () => {
    const component = shallow(<Counter />)
    expect(component.find('span').exists()).toBeTruthy()
  })

  test('should render correctly', () => {
    const tree = renderer.create(<Counter />)
    expect(tree).toMatchSnapshot()
  })

  test('should change state on click +', () => {
    const component = mount(<Counter />)
    const button = component.find('.up')
    button.simulate('click')
    expect(component.find('#currCount').text()).toContain(1)
  })

  test('should change state on click -', () => {
    const component = mount(<Counter />)
    const button = component.find('.down')
    button.simulate('click')
    expect(component.find('#currCount').text()).toContain(-1)
  })

})
