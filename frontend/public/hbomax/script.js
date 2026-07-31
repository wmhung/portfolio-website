/*  mobile menu  */
var hbtn = document.getElementById('hbtn'),
  mmenu = document.getElementById('mmenu'),
  overlay = document.getElementById('overlay');

function closeMenu() {
  mmenu.classList.remove('open');
  overlay.classList.remove('open');
}
hbtn.addEventListener('click', function () {
  mmenu.classList.add('open');
  overlay.classList.add('open');
});
overlay.addEventListener('click', closeMenu);

/*  shrink nav bg on scroll  */
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

/*  build carousels (DRY: data -> DOM)  */
var ROWS = [
  { title: 'Trending Now', seed: 'trend', n: 12 },
  { title: 'Max Originals', seed: 'orig', n: 12 },
  { title: 'Movies We Love', seed: 'movie', n: 12 },
  { title: 'Because you watched The Northern Lights', seed: 'rec', n: 12 },
];

var rows = document.getElementById('rows');
ROWS.forEach(function (r) {
  var wrap = document.createElement('div');
  wrap.className = 'row';

  var rail = document.createElement('div');
  rail.className = 'rail';
  for (var i = 0; i < r.n; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
      '<img src="https://picsum.photos/seed/' +
      r.seed +
      i +
      '/300/450" alt="" loading="lazy" />' +
      '<div class="cap">Title ' +
      (i + 1) +
      '</div>';
    rail.appendChild(card);
  }

  var prev = document.createElement('button');
  prev.className = 'rail-btn prev';
  prev.innerHTML = '‹';
  var next = document.createElement('button');
  next.className = 'rail-btn next';
  next.innerHTML = '›';
  prev.onclick = function () {
    rail.scrollBy({ left: -rail.clientWidth * 0.8, behavior: 'smooth' });
  };
  next.onclick = function () {
    rail.scrollBy({ left: rail.clientWidth * 0.8, behavior: 'smooth' });
  };

  var rw = document.createElement('div');
  rw.className = 'rail-wrap';
  rw.appendChild(prev);
  rw.appendChild(rail);
  rw.appendChild(next);

  wrap.innerHTML = '<h2>' + r.title + '</h2>';
  wrap.appendChild(rw);
  rows.appendChild(wrap);
});

/*  genre grid  */
var GENRES = [
  'Action',
  'Comedy',
  'Drama',
  'Documentary',
  'Kids',
  'Horror',
  'Sci-Fi',
  'Reality',
];
var gg = document.getElementById('genreGrid');
GENRES.forEach(function (g) {
  var d = document.createElement('div');
  d.className = 'genre';
  d.innerHTML = '<span>' + g + '</span>';
  gg.appendChild(d);
});
