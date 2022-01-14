const panels = (() => {
  let header = document.createElement('header');
  header.classList.add('panel');
  let nav = document.createElement('nav');

  
  const appendHeader = () => {
    console.log('header');
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