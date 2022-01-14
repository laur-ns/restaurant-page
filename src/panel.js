const panels = (() => {
  // header variables
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const links = document.createElement('a');
  const body = document.querySelector('body');
  // footer variables
  const footer = document.createElement('footer')
  const github = document.createElement('a');

  const appendHeader = () => {
    header.classList.add('panel');
    body.prepend(header);
    header.append(nav);
    nav.append(links);
    document.querySelector('nav a').setAttribute('id', '1')
    links.textContent = 'Home';
    nav.append(links.cloneNode());
    document.querySelector('nav a:last-child').textContent = 'Menu';
    document.querySelector('nav a:last-child').setAttribute('id', '2');
    nav.append(links.cloneNode());
    document.querySelector('nav a:last-child').setAttribute('id', '3');
    document.querySelector('nav a:last-child').textContent = 'Contact';
  }
  const appendFooter = () => {
    footer.classList.add('panel');
    github.setAttribute('href', 'https://github.com/laur-ns/');
    github.textContent = 'github.com/laur-ns'
    body.append(footer);
    footer.append(github);
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