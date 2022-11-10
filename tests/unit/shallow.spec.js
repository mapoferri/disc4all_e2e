import { shallowMount, mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'
import Slideshow from '@/components/Slideshow.vue'
import Footer from '@/components/Footer.vue'

test('Header.vue', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })


test('Slideshow.vue', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })

test('Footer.vue', () => {
    const wrapper = mount(Header)
    expect(wrapper.html()).toMatchSnapshot()
  })

