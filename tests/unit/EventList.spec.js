import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
/**
 * Para utilizar os plugins injetados no projeto Vue, importamos como realizado no app.js
 */
import store from '@/store'
import router from '@/router'

describe('EventList', () => {
  it('Deve renderizar lista de eventos', () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })

    expect(wrapper.exists()).toBeTruthy() // Considerado como smokescreen test, é um teste válido mas não aplica cobertura sobre os métodos do componente.
  })

  describe('titulo da pagina', () => {
    it('Renderiza titulo corretamente', () => {
      // Setup
      const wrapper = mount(EventList, {
        global: {
          plugins: [store, router]
        }
      })

      // Find
      const title = wrapper.find('[data-testid="event-list-title"]')

      // Interaction => não há interação logo partimos para a assercao
      // Assertions
      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })
})
