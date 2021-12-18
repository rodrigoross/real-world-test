import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
/**
 * Para utilizar os plugins injetados no projeto Vue, importamos como realizado no app.js
 */
import { createStore } from '@/store'
import router from '@/router'

/**
 * Importa eventos como mockEvents
 */
import { events as mockEvents } from '../../db.json'

/**
 * Refatorando lógica de Setup para evitar repetição de codigo no teste.
 */
function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return mount(EventList, {
    global: {
      plugins: [createStore(config.plugins.store), router]
    },
    ...config.mountOptions
  })
}

let wrapper

describe('EventList', () => {
  beforeEach(() => {
    // Setup
    wrapper = mountEventList()
  })

  it('Deve renderizar lista de eventos', () => {
    expect(wrapper.exists()).toBeTruthy() // Considerado como smokescreen test, é um teste válido mas não aplica cobertura sobre os métodos do componente.
  })

  describe('Titulo da pagina', () => {
    it('Renderiza titulo corretamente', () => {
      // Find
      const title = wrapper.find('[data-testid="event-list-title"]')

      // Interaction => não há interação logo partimos para a assercao
      // Assertions
      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })

  describe('Eventos', () => {
    it('Renderiza em uma lista com os dados necessários', () => {
      //Setup customizado
      wrapper = mountEventList({
        plugins: {
          store: {
            state: () => ({
              events: mockEvents
            })
          }
        }
      })

      // Find
      const events = wrapper.findAll('[data-testid=event]')

      // Assert
      expect(events).toHaveLength(mockEvents.length)

      // Teste de integração com o EventCard
      events.forEach((event, i) => {
        const eventText = event.text()

        expect(eventText).toContain(mockEvents[i].title)
        expect(eventText).toContain(mockEvents[i].date)
      })
    })
  })
})
