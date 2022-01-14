const panels = (() => {
  let header = document.createElement('header');
  let nav = document.createElement('nav');
  let links = document.createElement('a');
  let body = document.querySelector('body');
  const appendHeader = () => {
    header.classList.add('panel');
    body.prepend(header);
    document.querySelector('header').append(nav);
    document.querySelector('nav').append(links);
    document.querySelector('nav a').setAttribute('href', './index.html')
    links.textContent = 'Home';
    document.querySelector('nav').append(links.cloneNode());
    document.querySelector('nav a:last-child').textContent = 'Menu';
    document.querySelector('nav').append(links.cloneNode());
    document.querySelector('nav a:last-child').textContent = 'Contact';
  }
  const appendFooter = () => {
    console.log('footer');
  }
  return {
    appendHeader,
    appendFooter,
  }
})();

export default function appendPanels() {
  panels.appendHeader();
  panels.appendFooter();
}