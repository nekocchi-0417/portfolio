const notes = {
  good: 'Doing Good Better — a nudge to ask how evidence can help us do more good.',
  fish: 'Why Fish Don’t Exist — on the human need for order, and what slips through our categories.',
  house: 'The House in the Cerulean Sea — a little magic, chosen family, and a lot of heart.'
};
const books = document.querySelectorAll('[data-book]');
books.forEach(book => book.addEventListener('click', () => {
  books.forEach(item => item.setAttribute('aria-pressed', String(item === book)));
  document.querySelector('#book-note-text').textContent = notes[book.dataset.book];
}));
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.site-header nav a')];
  const sectionStates = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => sectionStates.set(entry.target, entry));
    const active = [...sectionStates.values()]
      .filter(entry => entry.isIntersecting)
      .sort((a,b) => b.intersectionRect.height - a.intersectionRect.height)[0];
    if (!active) return;
    navLinks.forEach(link => {
      if (link.hash === `#${active.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-5% 0px -45% 0px', threshold: [0, .1, .3, .6] });
  navLinks.forEach(link => {const section = document.querySelector(link.hash); if (section) observer.observe(section);});
}
