/**
  * @jest-environment jsdom
* */

import { setBootingBackground, setInGameBackground } from '../../src/helpers/css.helper';

describe('CSS Helper Test', () => {
  const element: HTMLElement = document.createElement('div');
  element.setAttribute('id', 'html');
  document.body.appendChild(element);

  test('setBootinScreenBackground should add bootin-screen class to html element', 
       async () => {
         setBootingBackground();
         expect(element.classList.length).toBe(1);
         expect(element.classList.item(0)).toBe('booting-screen');
  });

  test('setInGameBackground should replace booting-screen with in-game-screen',
       async () => {
         setInGameBackground();
         expect(element.classList.length).toBe(1);
         expect(element.classList.item(0)).toBe('in-game-screen');
  });
});
