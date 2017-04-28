const navs = document.querySelectorAll('.nav-item-box');
const route = 'experience';

function selectItem(e) {
  const el = e.target;
  const current = document.querySelectorAll('.selected')[0];
  const currentRoute = current.getAttribute('data-route');
  const newRoute = el.getAttribute('data-route');

  if (el.className.match(/selected/g)) {
    el.classList.remove('selection');
    return null;
  }

  if (current) {
    current.classList.remove('selected');
  }

  el.classList.remove('selection');
  el.classList.add('selected');

  changeRoute(currentRoute, newRoute);
}

function changeRoute(prev, next) {
  document.getElementById(prev).style.display = 'none';
  document.getElementById(next).style.display = 'block';
}


navs.forEach((e) => {
  e.addEventListener('touchend', selectItem);
  e.addEventListener('mouseup', selectItem);

  e.addEventListener('mouseenter', (e) => e.target.classList.add('selection'));
  e.addEventListener('mouseleave', (e) => e.target.classList.remove('selection'));
});
