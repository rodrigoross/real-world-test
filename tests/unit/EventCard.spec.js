/**
 * Aula 1 - Setup e testando como usuario.
 *
 * Como analisado o componente event card é um componente critico para a usabilidade da aplicação e relativamente fácil de testar
 */

import EventCard from '@/components/EventCard'
import { mount } from '@vue/test-utils'

describe('EventCard', () => {
  it('Renderiza dados do evento corretamente', () => {
    // Prop mockada.
    const event = {
      id: 1,
      time: '12:00 PM',
      date: '28 de Desembro, 2021',
      title: 'Treinamento de Volei para maior idade'
    }
    /**
     * A parte mais complicada e quando montamos o componente, pois é quando defini quais as dependencias do mesmo, nesse caso.
     * Foi refatorado o componente pois assim remove uma dependencia e o componente passa a ficar responsavel a somente o que precisa
     * neste caso, exibir dados do evento.
     */
    const wrapper = mount(EventCard, {
      props: {
        event
      }
    })

    /**
     * ?MELHORES PRÁTICAS
     * * É recomendado fazer cache do HTML para evitar consultas desncessárias no DOM
     * * É recomendado re-utilizar o dado mockado nas asserções
     */
    const wrapperHtml = wrapper.html()
    // Verifica se os dados da prop estão presentes na renderização do componente. (DOM)
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.title)
    /**
     * ?OBS:
     * * Com esse teste foi possivel revelar problemas com a arquitetura do projeto levando a refatoração do código.
     * * Protege o componente de futuras refatorações pois considera sempre os dados das props.
     */
  })
})
