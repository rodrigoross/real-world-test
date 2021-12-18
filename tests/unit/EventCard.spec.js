/**
 * Aula 1 - Setup e testando como usuario.
 * 
 * Como analisado o componente event card é um componente critico para a usabilidade da aplicação e relativamente fácil de testar
 */

import EventCard from '@/components/EventCard';
import { mount } from '@vue/test-utils';

describe('EventCard', () => {
  it('Renderiza dados do evento corretamente', () => {
    // Prop mockada.
    const event = {
      id: 1,
      time: '12:00 PM',
      date: '28 de Desembro, 2021',
      title: 'Treinamento de Volei para maior idade'
    };
    mount(EventCard, {
      props: {
        event
      }
    });
  });
});
