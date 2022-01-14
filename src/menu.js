const createMenu = (() => {
  const content = document.createElement('div');
  const menuContainer = document.createElement('div');
  const menuCard = document.createElement('div')
  const img = document.createElement('img')
  const subTitle = document.createElement('h2');
  const description = document.createElement('p');
  const menuTitle = document.createElement('h1');

  menuTitle.setAttribute('id', 'page-title')
  content.setAttribute('id', 'content');
  menuContainer.classList.add('menu-container');
  menuCard.classList.add('menu-card', 'radius');
  img.classList.add('radius');
  img.setAttribute('src', './img/home-img.jpg');
  subTitle.textContent = 'Grilled Salmon';
  description.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos</p>'

  const setMenuTitle = () => {
    menuTitle.innerHTML = "<u id='menu-title'>MENU</u>"
    const panel = document.querySelector('.panel');
    panel.parentNode.insertBefore(menuTitle, panel.nextSibling);
    panel.parentNode.insertBefore(content, menuTitle.nextSibling);
  }

  const displayCards = () => {
    const panel = document.querySelector('.panel');
    panel.parentNode.insertBefore(content, menuTitle.nextSibling);
    content.append(menuContainer);
    menuCard.append(img);
    menuCard.append(subTitle);
    menuCard.append(description);
    menuContainer.textContent = '';
    for(let i = 0; i < 6; i++) {
      menuContainer.append(menuCard.cloneNode(true));
    }
  }

  return {
    setMenuTitle,
    displayCards,
  }
})();


export default function appendMenu() {
  createMenu.setMenuTitle();
  createMenu.displayCards();
}