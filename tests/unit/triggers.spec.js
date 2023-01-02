import { mount } from '@vue/test-utils'
import TriggerView from '@/views/TriggerView'
import Navbar from '@/components/Navbar'


describe('Testing TriggerView.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(TriggerView)

    // then
    expect(wrapper.text()).toMatch('Hier ist deine Triggerliste')
  })

  it('should have navbar component', () => {
    // when
    const wrapper = mount(TriggerView)

    // then
    const navBar = wrapper.findComponent(Navbar)
    expect(navBar.exists()).toBeTruthy()
  })

})


