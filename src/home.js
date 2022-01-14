const appendHome = () => {
  const content = document.createElement('div');
  const titleWrapper = document.createElement('div')
  const title = document.createElement('div')
  const infoWrapper = document.createElement('div')
  const card = document.createElement('div')
  const img = document.createElement('img')

  content.setAttribute('id', 'content');
  titleWrapper.classList.add('title-container');
  title.classList.add('title');
  infoWrapper.classList.add('info-container');
  card.classList.add('card', 'radius');
  img.classList.add('radius');
  img.setAttribute('src', './img/home-img.jpg');

  const ingTitle = document.createElement('h2')
  const loremIpsum = document.createElement('p')
  const addressTitle = document.createElement('h2')
  const address = document.createElement('p')
  const hoursTitle = document.createElement('h2')
  const hours = document.createElement('p')

  title.innerHTML = '<h1>Seafood Masters</h1>';
  ingTitle.textContent = 'FRESH INGREDIENTS';
  loremIpsum.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos dolorum, exercitationem, eos nesciunt praesentium explicabo illum accusantium maxime.";
  addressTitle.textContent = 'ADDRESS';
  address.innerHTML = '24 Pepega Rd., Blockway<br>Wellywood'
  hoursTitle.textContent = 'HOURS';
  hours.innerHTML = 'Mon-Fri: 8am - 6pm<br>Sat-Sun: 10am-4pm';

  const panel = document.querySelector('.panel');
  panel.parentNode.insertBefore(content, panel.nextSibling);
  content.append(titleWrapper);
  titleWrapper.append(title);
  content.append(infoWrapper);
  infoWrapper.append(card);
  card.append(img);
  card.append(ingTitle);
  card.append(loremIpsum);
  card.append(addressTitle);
  card.append(address);
  card.append(hoursTitle);
  card.append(hours);
};

export default appendHome;