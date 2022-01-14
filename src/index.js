import appendPanels from './panel.js';
import appendHome from './home.js';
import appendMenu from './menu.js';
import appendContact from './contact.js';

appendPanels();
appendHome();

const init = (() => {
  const removeContent = () => {
    let content = document.querySelector('#content')
    content.remove();
    let title = document.querySelector('#page-title');
    if (title) {
      title.remove();
    }
  }
  const setEventListeners = () => {
    const home = document.querySelector('#one')
    const menu = document.querySelector('#two')
    const contact = document.querySelector('#three')
    home.addEventListener('click', () => {
      removeContent();
      appendHome();
    })
    menu.addEventListener('click', () => {
      removeContent();
      appendMenu();
    })
    contact.addEventListener('click', () => {
      removeContent();
      appendContact();
    })
  }

  return {
    setEventListeners,
  }
})()

init.setEventListeners();